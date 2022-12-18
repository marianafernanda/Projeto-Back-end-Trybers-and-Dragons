import Battle from './Battle';
import Character from '../Character';

export default class PVP extends Battle {
  player1: Character;
  player2: Character;

  constructor(player1: Character, player2: Character) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
  }
}