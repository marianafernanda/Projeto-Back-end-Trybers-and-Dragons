import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  energyType: string;
  private static _necromancerCount = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.addNecromancer();
  }

  private static addNecromancer() {
    this._necromancerCount += 1;
  }

  static createdArchetypeInstances() {
    return this._necromancerCount;
  }
}