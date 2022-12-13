import Archetype from './Archetype';

export default class Warrior extends Archetype {
  energyType: string;
  private static _warriorCount = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.addWarrior();
  }

  private static addWarrior() {
    this._warriorCount += 1;
  }

  static createdArchetypeInstances() {
    return this._warriorCount;
  }
}