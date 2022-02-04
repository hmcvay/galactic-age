import Age from "../src/js/age.js"

describe ('Age', () => {

  let age;

  beforeEach(() => {
    age = new Age(30);
  });

  test('should construct Age object', () => {
    expect(age).toEqual(30)
  });
});