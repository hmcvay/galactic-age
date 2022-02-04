export default class Age {
  constructor(earthAge) {
    this.earthAge = earthAge
  }

  calcMercuryAge() {
    return Math.round(this.earthAge/.24)
  }

  calcVenusAge() {
    return Math.round(this.earthAge/.62)
  }

  calcMarsAge() {
    return Math.round(this.earthAge * 1.88)
  }
}