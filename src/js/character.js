export default class Character {
  constructor(attack, stoned) {
    this.attack = attack;
    this.stoned = stoned;
  }

  calculateAttack(cells) {
    let { attack } = this;
    if (cells) {
      attack -= ((cells - 1) * 10 * attack) / 100;
    }
    if (this.stoned === true) {
      attack -= Math.log2(cells) * 5;
    }
    return attack;
  }
}
