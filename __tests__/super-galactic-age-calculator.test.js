import { AgeCalculator } from '../src/js/super-galactic-age-calculator.js';

describe('AgeCalculator', () => {
  let ageTest;

  beforeAll(() => {
    ageTest = new AgeCalculator(38.866)
  });
  
  test ('1 :should allow to create personalized age Calculator with property for Earth age', () => {
    expect(ageTest.earthAge).toEqual(38.866);
  });
  
  test ("2 :should convert age(earthAge) to mercury Age", () => {
    expect(ageTest.mercuryAge()).toEqual(161.94);
  });


});