export class AgeCalculator {
  constructor(earthAge) {
    this.earthAge = earthAge
  }
    
  mercuryAge() {
    return Number.parseFloat((this.earthAge / 0.24).toFixed(2));
  }

  venusAge() {
    return Number.parseFloat((this.earthAge / 0.62).toFixed(2));
  }

  marsAge() {
    return Number.parseFloat((this.earthAge / 1.88).toFixed(2));
  }

  jupiterAge() {
    return Number.parseFloat((this.earthAge / 11.86).toFixed(2));
  }

  earthYears30() {
    return Number.parseFloat((this.earthAge - 30).toFixed(2));
  }

  mercYearsSince30() {
    return Number.parseFloat(((this.earthAge - 30) / 0.24).toFixed(2));
  }
}
