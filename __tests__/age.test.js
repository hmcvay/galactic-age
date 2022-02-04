import Age from "../src/js/age.js"

let age;

beforeEach(() => {
  age = new Age(5);
  age.calcAges();
});

describe ('Age', () => {

  test('should construct Age object', () => {
    expect(age.earthAge).toEqual(5)
  });
});

describe ('calcAges', () => {

  test('should calculate Mercury age based on Earth age', () => {
    expect(age.mercuryAge).toEqual(21)
  });

  test('should calculate Venus age based on Earth age', () => {
    expect(age.venusAge).toEqual(8)
  });

  test('should calculate Mars age based on Earth age', () => {
    expect(age.marsAge).toEqual(9)
  });

  test('should calculate Jupiter age based on Earth age', () => {
    expect(age.jupiterAge).toEqual(59)
  });

});

// describe ('calcLifeExpect', () => {

// })