import { Arm } from '../weapons/Arm.js';
import { Knife } from '../weapons/Knife.js';

export class Player {
  constructor(position, name) {
    this.life = 100;
    this.magic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.description = 'Игрок';
    this.weapon = new Arm();
    this.position = position;
    this.name = name;
  }

  getLuck() {
    return (Math.random() * 100 + this.luck) / 100;
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }
    return (this.attack + this.weapon.getDamage()) * this.getLuck() / distance;
  }

  takeDamage(damage) {
    this.life = Math.max(0, this.life - damage);
  }

  isDead() {
    return this.life === 0;
  }

  moveLeft(distance) {
    this.position -= Math.min(Math.abs(distance), this.speed);
  }

  moveRight(distance) {
    this.position += Math.min(Math.abs(distance), this.speed);
  }

  move(distance) {
    if (distance < 0) {
      this.moveLeft(distance);
    } else {
      this.moveRight(distance);
    }
  }

  isAttackBlocked() {
    return this.getLuck() > (100 - this.luck) / 100;
  }

  dodged() {
    return this.getLuck() > (100 - this.agility - this.speed * 3) / 100;
  }

  takeAttack(damage) {
    if (this.isAttackBlocked()) {
      console.log(`${this.name} блокирует удар!`);
      this.weapon.takeDamage(damage);
      return;
    }

    if (this.dodged()) {
      console.log(`${this.name} уклоняется!`);
      return;
    }

    this.takeDamage(damage);
    if (this.isDead()) {
      console.log(`${this.name} погибает!`);
    }
  }

  getNextWeapon() {
    if (this.weapon instanceof Knife) {
      return new Arm();
    }
    return new Knife();
  }

  checkWeapon() {
    if (this.weapon.isBroken()) {
      const next = this.getNextWeapon();
      console.log(`${this.name}: ${this.weapon.name} сломалась, берёт ${next.name}`);
      this.weapon = next;
    }
  }

  tryAttack(enemy) {
    const rawDistance = Math.abs(this.position - enemy.position);
    if (rawDistance > this.weapon.range) {
      return;
    }

    const distance = Math.max(1, rawDistance);
    this.weapon.takeDamage(10 * this.getLuck());
    const damage = this.getDamage(distance);
    console.log(`${this.name} атакует ${enemy.name} (урон: ${damage.toFixed(2)})`);
    enemy.takeAttack(damage);

    if (rawDistance === 0) {
      enemy.position += 1;
      console.log(`${enemy.name} отлетает на позицию ${enemy.position}`);
      enemy.takeAttack(damage * 2);
    }
  }

  chooseEnemy(players) {
    const enemies = players.filter(player => player !== this && !player.isDead());
    if (enemies.length === 0) {
      return null;
    }
    return enemies.reduce((weakest, player) => player.life < weakest.life ? player : weakest);
  }

  moveToEnemy(enemy) {
    this.move(enemy.position - this.position);
  }

  turn(players) {
    if (this.isDead()) {
      return;
    }

    const enemy = this.chooseEnemy(players);
    if (!enemy) {
      return;
    }

    this.moveToEnemy(enemy);
    this.tryAttack(enemy);
    this.checkWeapon();
  }
}
