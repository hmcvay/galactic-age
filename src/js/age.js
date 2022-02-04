export default class Age {
  constructor(earthAge) {
    this.earthAge = earthAge
  }

  calcMercuryAge() {
    return this.earthAge/.24
  }

  calcVenusAge() {
    return this.earthAge/.62
  }
}