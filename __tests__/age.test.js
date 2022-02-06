import Age from "../src/js/age.js"

let age;

beforeEach(() => {
  age = new Age(30);
  age.calcAges();
});

describe ('Age', () => {

  test('should construct Age object', () => {
    expect(age.earthAge).toEqual(30)
  });
});

describe ('calcAges', () => {

  test('should calculate Mercury age based on Earth age', () => {
    expect(age.mercuryAge).toEqual(125)
  });

  test('should calculate Venus age based on Earth age', () => {
    expect(age.venusAge).toEqual(48)
  });

  test('should calculate Mars age based on Earth age', () => {
    expect(age.marsAge).toEqual(56)
  });

  test('should calculate Jupiter age based on Earth age', () => {
    expect(age.jupiterAge).toEqual(356)
  });

});

describe ('calcLifeOnMercury', () => {
  
  beforeEach(() => {
    age.calcLifeOnMercury();
  });

  test('should calculate years left of life based on age on Mercury', () => {
    expect(age.mercuryYearsLeft).toEqual(-53)
  });

  test('if life expectancy comes back as a negative number, return as positive number of years lived PAST expectancy', () => {
    expect(age.mercuryYearsPast).toEqual(53)
  });

});

describe ('calcLifeOnVenus', () => {

  beforeEach(() => {
    age.calcLifeOnVenus();
  });

  test('should calculate years left of life based on age on Venus', () => {
    expect(age.venusYearsLeft).toEqual(24)
  });

  test('if life expectancy comes back as a negative number, return as positive number of years lived PAST expectancy', () => {
    let oldAge = new Age(80);
    oldAge.calcAges();
    oldAge.calcLifeOnVenus();
    expect(oldAge.venusYearsPast).toEqual(57)
  });

});

describe ('calcLifeOnMars', () => {

  beforeEach(() => {
    age.calcLifeOnMars();
  });

  test('should calculate years left of life based on age on Mars', () => {
    expect(age.marsYearsLeft).toEqual(16)
  });

  test('if life expectancy comes back as a negative number, return as a positive number of years lived PAST life expectancy', () => {
    let oldAge = new Age(80);
    oldAge.calcAges();
    oldAge.calcLifeOnMars();
    expect(oldAge.marsYearsPast).toEqual(78)
  });

});

describe ('calcLifeOnJupiter', () => {

  beforeEach(() => {
    age.calcLifeOnJupiter();
  });

  test('should calculate years left of life based on age on Jupiter', () => {
    expect(age.jupiterYearsLeft).toEqual(-284)
  });

  test('if life expectancy comes back as a negative number, return as a positive number of years lived PAST life expectancy', () => {
    expect(age.jupiterYearsPast).toEqual(284);
  })

});