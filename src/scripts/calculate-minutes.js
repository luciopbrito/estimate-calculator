/**
 * class responsible for calculating the minutes
 */
export default class CalculateMinutes {
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
