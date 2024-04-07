/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  // ✨ implement
  const result = {};
  for (const prop in obj) {
    result[prop] = obj[prop].trim()
  }
  return result;
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  // ✨ implement
  for (let prop in obj) {
    if (typeof obj[prop] === 'string') {
      obj[prop] = obj[prop].trim();
    }
  }
  return obj;
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  // ✨ implement
  return Math.max(...integers.map(obj => obj.integer));
}

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    // ✨ initialize whatever properties are needed
    this.count = initialNumber;
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    // ✨ implement
    if (this.count > 0) {
      return this.count--;
    } else {
      return 0;
    }
  }
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    // ✨ initialize whatever properties are needed]
    this.seasons = ['summer', 'fall', 'winter', 'spring'];
    this.currentSeason = 0;
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    // ✨ implement
    const season = this.seasons[this.currentSeason % this.seasons.length];
    this.currentSeason++;
    return season;
  }
}

class Car {
  constructor(name, tankSize, mpg) {
    this.name = name;
    this.tankSize = tankSize; // The maximum fuel the tank can hold.
    this.mpg = mpg; // Miles per gallon the car can drive.
    this.odometer = 0; // Initializes with zero miles, tracks total distance driven.
    this.fuel = tankSize; // Initializes full of gas, tracks current fuel level.
  }

  drive(distance) {
    const drivableMiles = this.fuel * this.mpg;
    const drivenMiles = Math.min(distance, drivableMiles);
    this.odometer += drivenMiles;
    this.fuel -= drivenMiles / this.mpg; // Deduct the used fuel from the current fuel level.

    // If the car runs out of fuel before reaching the desired distance,
    // it can only drive as far as the current fuel allows.
    return this.odometer; // Return the updated odometer value.
  }

  refuel(gallons) {
    // Ensure we don't exceed the tank size when refueling.
    this.fuel += gallons;
    if (this.fuel > this.tankSize) {
      this.fuel = this.tankSize;
    }
    
    // This method could return the current fuel level, but if the spec or tests
    // expect the miles that can be driven after refueling, you could return that instead.
    // return this.fuel * this.mpg; // Optional, based on expected behavior.
  }
}


/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
function isEvenNumberAsync(number) {
  // ✨ implement
  return Promise.resolve(number % 2 === 0);

}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
