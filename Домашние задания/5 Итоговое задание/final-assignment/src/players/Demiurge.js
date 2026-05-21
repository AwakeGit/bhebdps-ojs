import { Mage } from './Mage.js';
import { StormStaff } from '../weapons/StormStaff.js';

export class Demiurge extends Mage {
  constructor(position, name) {
    super(position, name);
    this.life = 80;
    this.magic = 120;
    this.initialMagic = 120;
    this.attack = 6;
    this.luck = 12;
    this.description = 'Демиург';
    this.weapon = new StormStaff();
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }

    const base = (this.attack + this.weapon.getDamage()) * this.getLuck() / distance;
    if (this.magic > 0 && this.getLuck() > 0.6) {
      return base * 1.5;
    }

    return base;
  }
}
