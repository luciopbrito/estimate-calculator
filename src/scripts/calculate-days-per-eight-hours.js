/**
 * class responsible for calculating the days per eight hours
 */
export default class CalculateDaysPerEightHours {
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
