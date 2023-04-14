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

  test ("8: should determine how many venus years have passed since I was 30 in earth years", () => {
    expect(ageTest.venYearsSince30()).toEqual(14.30);
  })

  test ("9: should determine how many mars years have passed since I was 30 in earth years", () => {
    expect(ageTest.marsYearsSince30()).toEqual(4.72);
  })

  test ("10: should determine how many jupiter years have passed since I was 30 in earth years", () => {
    expect(ageTest.jupYearsSince30()).toEqual(0.75);
  })

  test ("11: should determine how many earth years will pass by the time im 50", () => {
    expect(ageTest.yearsTil50()).toEqual(11.13);
  })
  
  test ("12: should determine how many mercury years will pass by the time im 50", () => {
    expect(ageTest.mercYearsTil50()).toEqual(46.39);
  })

  test ("13: should determine how many venus years will pass by the time im 50", () => {
    expect(ageTest.venYearsTil50()).toEqual(17.96);
  })

  test ("13: should determine how many venus years will pass by the time im 50", () => {
    expect(ageTest.venYearsTil50()).toEqual(17.96);
  })

  test ("14: should determine how many mars years will pass by the time im 50", () => {
    expect(ageTest.marsYearsTil50()).toEqual(5.92);
  })

  


});