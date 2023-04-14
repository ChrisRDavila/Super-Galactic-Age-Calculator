import { AgeCalculator } from '../src/js/super-galactic-age-calculator.js';

describe('AgeCalculator', () => {
  let ageTest;

  beforeEach(() => {
    ageTest = new AgeCalculator(38.866)
  });
  test ('1 :should allow to create personalized age Calculator with property for Earth age', () => {
    expect(ageTest.earthAge).toEqual(38.866);
  });
  ageTest.mercuryAge();
  test ("2 :should convert age(earthAge) to mercuryAge");
  expect(ageTest.mercuryAge).toEqual(162)
});