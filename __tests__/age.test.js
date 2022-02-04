import Age from "../src/js/age.js"

describe ('Age', () => {

  let age;

  beforeEach(() => {
    age = new Age(5);
  });

  test('should construct Age object', () => {
    expect(age.earthAge).toEqual(5)
  });

  test('should calculate Mercury age based on Earth age', () => {
    expect(age.calcMercuryAge()).toEqual(21)
  });

  test('should calculate Venus age based on Earth age', () => {
    expect(age.calcVenusAge()).toEqual(8)
  });
});