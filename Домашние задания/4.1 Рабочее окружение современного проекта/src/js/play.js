export function play(players) {
  let alive = players.filter(player => !player.isDead());
  let round = 0;
  const maxRounds = 1000;

  while (alive.length > 1 && round < maxRounds) {
    round += 1;
    alive.forEach(player => {
      if (!player.isDead()) {
        player.turn(alive);
      }
    });
    alive = players.filter(player => !player.isDead());
  }

  if (alive.length === 1) {
    return alive[0];
  }

  return null;
}
