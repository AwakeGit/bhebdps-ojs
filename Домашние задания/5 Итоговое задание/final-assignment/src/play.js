export function play(players) {
  let alive = players.filter(player => !player.isDead());
  let round = 0;
  const maxRounds = 1000;

  while (alive.length > 1 && round < maxRounds) {
    round += 1;
    console.log(`\n--- Раунд ${round} ---`);
    alive.forEach(player => {
      if (!player.isDead()) {
        player.turn(alive);
      }
    });
    alive = players.filter(player => !player.isDead());
  }

  if (alive.length === 1) {
    console.log(`\nПобедитель: ${alive[0].name} (${alive[0].description})`);
    return alive[0];
  }

  if (alive.length === 0) {
    console.log('\nВсе погибли!');
    return null;
  }

  console.log('\nНичья');
  return null;
}
