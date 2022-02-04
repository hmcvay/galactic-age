export default class Age {
  constructor(earthAge) {
    this.earthAge = earthAge
  }

  calcMercuryAge() {
    return this.earthAge/.24
  }
}