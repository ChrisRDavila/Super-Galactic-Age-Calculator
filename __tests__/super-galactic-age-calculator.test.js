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

  test ("3: should convert earthAge to Venus Age", () => {
    expect(ageTest.venusAge()).toEqual(62.69);
  });

  test ("4: should convert earthAge to Mars Age", () => {
    expect(ageTest.marsAge()).toEqual(20.67);
  });

  test ("5: should convert earthAge to Jupiter Age", () => {
    expect(ageTest.JupiterAge()).toEqual(100);
  });


});