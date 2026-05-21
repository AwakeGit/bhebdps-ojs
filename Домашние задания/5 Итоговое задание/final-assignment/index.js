import { Warrior, Archer, Mage, Dwarf, Crossbowman, Demiurge } from './src/players/index.js';
import { play } from './src/play.js';

const players = [
  new Warrior(0, 'Алёша Попович'),
  new Archer(10, 'Леголас'),
  new Mage(5, 'Гендальф'),
  new Dwarf(2, 'Гимли'),
  new Crossbowman(8, 'Арагорн'),
  new Demiurge(6, 'Саруман'),
];

play(players);
