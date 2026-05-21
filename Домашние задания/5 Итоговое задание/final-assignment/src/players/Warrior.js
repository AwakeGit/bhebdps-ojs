import { Player } from './Player.js';
import { Sword } from '../weapons/Sword.js';

export class Warrior extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 120;
    this.initialLife = 120;
    this.speed = 2;
    this.description = 'Воин';
    this.weapon = new Sword();
  }

  takeDamage(damage) {
    if (this.life < this.initialLife * 0.5 && this.getLuck() > 0.8 && this.magic > 0) {
      this.magic = Math.max(0, this.magic - damage);
      return;
    }

    this.life = Math.max(0, this.life - damage);
  }
}
