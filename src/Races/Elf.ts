import Race from './Race';

export default class Elf extends Race {
  maxLifePoints: number;
  private static _elfCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.addElf();
  }

  private static addElf() {
    this._elfCount += 1;
  }

  static createdRacesInstances() {
    return this._elfCount;
  }
}