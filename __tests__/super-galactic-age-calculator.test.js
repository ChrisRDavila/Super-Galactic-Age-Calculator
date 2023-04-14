import { AgeCalculator } from '../src/js/super-galactic-age-calculator.js';

describe('AgeCalculator', () => {
  let ageTest;

  beforeEach(() => {
    ageTest = new AgeCalculator(38)
  });
  test ('should allow to create personalized age Calculator with property for Earth age', () => {
    expect(ageTest.earthAge).toEqual(38);
  });
});