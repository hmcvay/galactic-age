export default class Age {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
  }

  calcAges() {
    this.mercuryAge = Math.round(this.earthAge/.24);
    this.venusAge = Math.round(this.earthAge/.62);
    this.marsAge = Math.round(this.earthAge * 1.88);
    this.jupiterAge = Math.round(this.earthAge * 11.86);
  }
}
//   calcLifeExpect() {

//   }
// }