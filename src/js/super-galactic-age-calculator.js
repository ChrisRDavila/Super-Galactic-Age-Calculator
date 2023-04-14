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

  venYearsSince30() {
    return Number.parseFloat(((this.earthAge - 30) / 0.62).toFixed(2));
  }

  marsYearsSince30() {
    return Number.parseFloat(((this.earthAge - 30) / 1.88).toFixed(2));
  }

  jupYearsSince30() {
    return Number.parseFloat(((this.earthAge - 30) / 11.86).toFixed(2));
  }

  yearsTil50() {
    return Number.parseFloat((50 - this.earthAge).toFixed(2));
  }

  mercYearsTil50() {
    return Number.parseFloat(((50 - this.earthAge) / 0.24).toFixed(2));
  }

  venYearsTil50() {
    return Number.parseFloat(((50 - this.earthAge) / 0.62).toFixed(2));
  }

  marsYearsTil50() {
    return Number.parseFloat(((50 - this.earthAge) / 1.88).toFixed(2));
  }

  jupYearsTil50() {
    return Number.parseFloat(((50 - this.earthAge) / 11.86).toFixed(2));
  }
}
