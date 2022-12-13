import Archetype from './Archetype';

export default class Ranger extends Archetype {
  energyType: string;
  private static _rangerCount = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.addRanger();
  }

  private static addRanger() {
    this._rangerCount += 1;
  }

  static createdArchetypeInstances() {
    return this._rangerCount;
  }
}