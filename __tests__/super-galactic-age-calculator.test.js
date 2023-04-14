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
    expect(ageTest.jupiterAge()).toEqual(3.28);
  });

  test ("6: should determine how many Earth years have passed since I was 30(earth years) old", () => {
    expect(ageTest.earthYears30()).toEqual(8.87);
  });

  test ("7: should determine how many mercury years have passed since I was 30 in earth years", () => {
    expect(ageTest.mercYearsSince30()).toEqual(36.94);

  })


});