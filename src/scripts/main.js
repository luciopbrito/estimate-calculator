/**
 * class responsible for calculating the estimate.
 */
class EstimateCalculator {
  /**
   * result of {@link calculate} method.
   * @type {number}
   */
  #resultAsEightHoursBaseUnit;
  
  /**
   * @type {CalculateDaysPerEightHours}
   */
  #days
  
  /**
   * @type {number}
   */
  #hours
  
  /**
   * @type {CalculateMinutes}
   */
  #minutes

  /**
   * @param {CalculateDaysPerEightHours} days CalculateDaysPerEightHours object
   * @param {number} hours number as hours
   * @param {CalculateMinutes} minutes CalculateMinutes object
   */
  constructor(days, hours, minutes) {
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
  }

  /**
   * method responsible for calculating the estimate based on the days, hours, 
   * and minutes
   * @returns {}
   */
  calculate() {
    try {
      if (
        this.#_verifyDaysValue(this.#days) &&
        this.#_verifyHoursValue(this.#hours) &&
        this.#_verifyMinutesValue(this.#minutes)
      ) {
        this.#resultAsEightHoursBaseUnit = this.#days.value + this.#hours + this.#minutes.value
        return this.#resultAsEightHoursBaseUnit;
      }
    } catch (error) {
      throw new Error(`method 'calculate' ran incorrectly \n ${error}`)
    }
  }

  reset() {
    throw new Error("Not implemented");
  }

  /**
   * method to verify whether the value is correct to process.
   * @param {CalculateDaysPerEightHours} daysObject CalculateDaysPerEightHours 
   * object
   */
  #_verifyDaysValue(daysObject) {
    try {
      return daysObject instanceof CalculateDaysPerEightHours;
    } catch (error) {
      throw Error(`method '_verifyDaysValue' ran incorrectly \n ${error}`);
    }
  }

  /**
   * method to verify whether the value is correct to process.
   * @param {number} hours number as hours
   */
  #_verifyHoursValue(hours) {
    try {
      return hours <= 24;
    } catch (error) {
      throw Error(`method '_verifyHoursValue' ran incorrectly \n ${error}`);
    }
  }

  /**
   * method to verify whether the value is correct to process.
   * @param {CalculateMinutes} minutesObject CalculateMinutes object
   */
  #_verifyMinutesValue(minutesObject) {
    try {
      return minutesObject instanceof CalculateMinutes;      
    } catch (error) {
      throw Error(`method '_verifyMinutesValue' ran incorrectly \n ${error}`);
    }
  }

  get days() {
    try {
      return this.#days;
    } catch (error) {
      throw new Error(`getter 'days' ran incorrectly \n ${error}`);
    }
  }

  set days(value) {
    try {
      if (this.#_verifyDaysValue(value)) {
        this.#days = value
        return;
      }

      throw new Error(`ValueIncompatible: the days must be an instanceof CalculateDaysPerEightHours`);
    } catch (error) {
      throw new Error(`setter 'days' ran incorrectly \n ${error}`);
    }
  }

  get hours() {
    try {
      return this.#hours;
    } catch (error) {
      throw new Error(`getter 'hours' ran incorrectly \n ${error}`);
    }
  }

  set hours(value) {
    try {
      if (this.#_verifyHoursValue(value)) {
        this.#hours = value;
        return;
      }

      throw new Error('ValueIncompatible: The hour value must be less or equal 24');
    } catch (error) {
      throw new Error(`setter 'hours' ran incorrectly \n ${error}`);
    }
  }

  get minutes() {
    try {
      return this.#minutes;
    } catch (error) {
      throw new Error(`getter 'minutes' ran incorrectly \n ${error}`);
    }
  }

  set minutes(value) {
    try {
      if (this.#_verifyMinutesValue(value)) {
        this.#minutes = value;
        return
      }

      throw new Error(`ValueIncompatible: The 'minuteObject' value must be an instanceof CalculateMinutes`);
    } catch (error) {
      throw new Error(`setter 'minutes' ran incorrectly \n ${error}`);
    }
  }

}

/**
 * class responsible for calculating the minutes
 */
class CalculateMinutes {
  /**
   * result of {@link #_calculateMinutes}
   */
  #minuteValue;

  /**
   * @param {number} minutes number as minutes
   */
  constructor(minutes){
    try {
      this.#_calculateMinutes(minutes);
    } catch (error) {
      throw new Error(`constructor of 'CalculateMinutes' ran incorrectly \n ${error}`);
    }
  }

  /**
   * method to verify whether the value is correct to process.
   * @param {number} minutes number as minutes
   * @returns {boolean}
   */
  #_verifyValue(minutes) {
    try {
      return typeof(minutes) == "number" ? true : false;
    } catch (error) {
      throw new Error(`method '_verifyValue' ran incorrectly \n ${error}`);
    }
  }

  /**
   * method responsible for calculating the minutes.
   * @param {number} minutes number as minutes
   */
  #_calculateMinutes(minutes) {
    try {
      if (this.#_verifyValue(minutes)) this.#minuteValue = minutes / 60;
    } catch (error) {
      throw new Error(`method '_calculateMinutes' ran incorrectly \n ${error}`);
    }
  }

  get value() {
    try {
      return this.#minuteValue;
    } catch (error) {
      throw new Error(`getter 'value' ran incorrectly \n ${error}`);
    }
  }

  set value(minutes) {
    try {
      this.#_calculateMinutes(minutes);
    } catch (error) {
      throw new Error(`setter 'value' ran incorrectly \n ${error}`);
    }
  }
}

/**
 * class responsible for calculating the days per eight hours
 */
class CalculateDaysPerEightHours {
  /**
   * result of {@link #_calculatePerEightHoursOfWork} method.
   * @type number
   */
  #dayValue

  /**
   * @param {number} days
   */
  constructor(days) {
    this.#_calculatePerEightHoursOfWork(days);
  }

  /**
   * method to verify whether the value is correct to process.
   * @param {number} value number as day
   * @returns {boolean}
   */
  #_verifyValue(value) {
    try {
      return typeof(value) == "number" ? true : false;
    } catch (error) {
      throw new Error(`method '_verifyValue' ran incorrectly \n ${error}`);
    }
  }

  /**
   * method to calculate the days per 8 hours (aka one workday)
   * @param {number} days number as number
   */
  #_calculatePerEightHoursOfWork(days) {
    try {
      if (this.#_verifyValue(days)) {
        this.#dayValue = days * 8;
      }
    } catch (error) {
      throw new Error(`method '_calculatePerEightHoursOfWork' ran incorrectly \n ${error}`);
    }
  }

  get value() {
    try {
      return this.#dayValue;
    } catch (error) {
      throw new Error(`getter 'value' ran incorrectly \n ${error}`);
    }
  }

  set value(days) {
    try {
      if (this.#_verifyValue(days)) this.#dayValue = days;
    } catch (error) {
      throw new Error(`setter 'value' ran incorrectly \n ${error}`);
    }
  }
}

let m = new CalculateMinutes(15);
let h = 5;
let d = new CalculateDaysPerEightHours(2);
let estimate = new EstimateCalculator(d,h,m);
console.log(estimate.calculate()); // must return 21.25