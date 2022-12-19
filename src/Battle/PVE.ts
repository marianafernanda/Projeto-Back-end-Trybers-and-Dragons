import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  constructor(public player:
  Fighter, public enemy: (SimpleFighter | Fighter)[]) {
    super(player);
  }

  fight(): number {
    let fight = true;

    while (fight) {
      this.playerAttack();
      this.enemyAttack();
      const enemyDead = this.enemy
        .every((e) => e.lifePoints === -1);

      if (this.player.lifePoints === -1) {
        fight = false;
        return -1;
      }

      if (enemyDead) {
        fight = false;
        return 1;
      }
    }
    return 0;
  }

  playerAttack() {
    const enemySorted = this.enemy
      .sort((a, b) => a.lifePoints - b.lifePoints);
    const enemyAlive = enemySorted
      .filter((e) => e.lifePoints !== -1);
    this.player.attack(enemyAlive[0]);
  }

  enemyAttack() {
    this.enemy.forEach((e) => {
      if (e.lifePoints !== -1) {
        e.attack(this.player);
      }
    });
  }
}