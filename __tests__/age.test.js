import Age from "../src/js/age.js"

describe ('Age', () => {

  let age;

  beforeEach(() => {
    age = new Age(30);
  });

  test('should construct Age object', () => {
    expect(age.earthAge).toEqual(30)
  });

  test('should calculate Mercury age based on Earth age', () => {
    expect(age.calcMercuryAge()).toEqual(125)
  });
});