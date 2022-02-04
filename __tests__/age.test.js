import Age from "../src/js/age.js"

let age;

beforeEach(() => {
  age = new Age(5);
  age.calcAges();
  age.calcLifeExpect();
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

describe ('calcLifeExpect', () => {
  
  test('should calculate life expectancy for earthlings based of age on Earth', () => {
    expect(age.earthLifeExpect).toEqual(72)
  });

  test('should calculate years left of life based on age on Mercury', () => {
    expect(age.mercuryLifeExpect).toEqual(51)
  });

  test('should calculate years left of life based on age on Venus', () => {
    expect(age.venusLifeExpect).toEqual(64)
  });

  test('should calculate years left of life based on age on Mars', () => {
    expect(age.marsLifeExpect).toEqual(63)
  });
  
});