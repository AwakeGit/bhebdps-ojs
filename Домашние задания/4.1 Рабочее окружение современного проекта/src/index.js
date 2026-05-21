import './css/style.css';
import { play } from './js/play.js';
import { Warrior } from './js/players/Warrior.js';
import { Mage } from './js/players/Mage.js';
import { Dwarf } from './js/players/Dwarf.js';

const players = [
  new Warrior(0, 'Алёша Попович'),
  new Mage(10, 'Гендальф'),
  new Dwarf(5, 'Гимли'),
];

const winner = play(players);

if (winner) {
  document.getElementById('output').textContent = 'Победитель: ' + winner.name + ' (' + winner.description + ')';
}
