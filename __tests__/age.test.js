import Age from "../src/js/age.js"

describe ('Age', () => {

  let age;

  beforeEach(() => {
    age = new Age(1);
  });

  test('should construct Age object', () => {
    expect(age.earthAge).toEqual(1)
  });

  test('should calculate Mercury age based on Earth age', () => {
    expect(age.calcMercuryAge()).toEqual(4.166666666666667)
  });

  test('should calculate Venus age based on Earth age', () => {
    expect(age.calcVenusAge()).toEqual(1.6129032258064517)
  })
});