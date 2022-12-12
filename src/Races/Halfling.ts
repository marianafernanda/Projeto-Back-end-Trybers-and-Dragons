import Race from './Race';

class Halfling extends Race {
  maxLifePoints: number;
  private static _halflingCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.addHalfling();
  }

  private static addHalfling() {
    this._halflingCount += 1;
  }

  static createdRacesInstances() {
    return this._halflingCount;
  }
}

export default Halfling;