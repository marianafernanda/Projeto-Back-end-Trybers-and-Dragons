import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  name: string;

  constructor(name: string) {
    this.name = name;
    this._dexterity = getRandomInt(1, 11);
    this._race = new Elf(this.name, this._dexterity);
    this._archetype = new Mage(this.name);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 11);
    this._defense = getRandomInt(1, 11);
    this._energy = {
      type_: this._archetype.energyType, amount: getRandomInt(1, 11) };
  }

  get race() { return this._race; }
  get archetype() { return this._archetype; }
  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }
  get defense() { return this._defense; }
  get dexterity() { return this._dexterity; }
  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount }; 
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 11);

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._strength += getRandomInt(1, 11);
    this._dexterity += getRandomInt(1, 11);
    this._defense += getRandomInt(1, 11);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special() {
    this._defense = 10;
  }
}