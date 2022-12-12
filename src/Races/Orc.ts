import Race from './Race';

export default class Orc extends Race {
  maxLifePoints: number;
  private static _orcCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.addOrc();
  }

  private static addOrc() {
    this._orcCount += 1;
  }

  static createdRacesInstances() {
    return this._orcCount;
  }
}