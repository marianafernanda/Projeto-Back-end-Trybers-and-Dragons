import Race from './Race';

class Dwarf extends Race {
  maxLifePoints: number;
  private static _dwarfCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.addDwarf();
  }

  private static addDwarf() {
    this._dwarfCount += 1;
  }

  static createdRacesInstances() {
    return this._dwarfCount;
  }
}

export default Dwarf;