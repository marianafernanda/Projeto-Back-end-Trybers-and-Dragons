import Archetype from './Archetype';

export default class Mage extends Archetype {
  energyType: string;
  private static _mageCount = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage.addMage();
  }

  private static addMage() {
    this._mageCount += 1;
  }

  static createdArchetypeInstances() {
    return this._mageCount;
  }
}