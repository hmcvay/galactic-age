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
    expect(age.mercuryLifeExpect).toEqual(-53)
  });

})

//these should actually be methods WITHIN each planet... hmmm
// describe ('calcLifeExpect', () => {
  
//   test('should calculate life expectancy for earthlings based of age on Earth', () => {
//     expect(age.earthLifeExpect).toEqual(72)
//   });

//   test('should calculate years left of life based on age on Venus', () => {
//     expect(age.venusLifeExpect).toEqual(24)
//   });

//   test('should calculate years left of life based on age on Mars', () => {
//     expect(age.marsLifeExpect).toEqual(16)
//   });

//   test('should calculate years left of life based on age on Jupiter', () => {
//     expect(age.jupiterLifeExpect).toEqual(-284)
//   });
  
// });

