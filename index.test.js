const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  // test('[2] returns a copy, leaving the original object intact', () => {})
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimProperties(input)
    expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  // test('[3] returns an object with the properties trimmed', () => {})
  // test('[4] the object returned is the exact same one we passed in', () => {})
  test('[3] returns an object with the properties trimmed', () => {
    const input = { name: '  jane  ', role: ' developer ' };
    const expected = { name: 'jane', role: 'developer' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });

  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { name: '  jane  ', role: ' developer ' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toBe(input);
  });
})

describe('[Exercise 3] findLargestInteger', () => {
  // test('[5] returns the largest number in an array of objects { integer: 2 }', () => {})
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const integers = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    const largest = utils.findLargestInteger(integers);
    expect(largest).toBe(3);
  });
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3);
  });

  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3);
  });

  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown(); // first call
    expect(counter.countDown()).toBe(2); // second call
  });

  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown(); // 1
    counter.countDown(); // 2
    counter.countDown(); // 3
    counter.countDown(); // Should return 0, attempting to go below zero
    expect(counter.countDown()).toBe(0); // Should still return 0
  });
  // test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {})
  // test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {})
  // test('[8] the count eventually reaches zero but does not go below zero', () => {})
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })

  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe('summer');
  });

  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next(); // Skip summer
    expect(seasons.next()).toBe('fall');
  });

  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next(); // Advance to summer
    seasons.next(); // Advance to fall
    expect(seasons.next()).toBe('winter');
  });

  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next(); // Advance to summer
    seasons.next(); // Advance to fall
    seasons.next(); // Advance to winter
    expect(seasons.next()).toBe('spring');
  });

  test('[13] the FIFTH call of seasons.next returns "summer"', () => {
    seasons.next(); // Advance to summer
    seasons.next(); // Advance to fall
    seasons.next(); // Advance to winter
    seasons.next(); // Advance to spring
    expect(seasons.next()).toBe('summer');
  });

  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) { // Iterate 39 times to get to the 40th call
      seasons.next();
    }
    expect(seasons.next()).toBe('spring');
  });
});


  // test('[9] the FIRST call of seasons.next returns "summer"', () => {})
  // test('[10] the SECOND call of seasons.next returns "fall"', () => {})
  // test('[11] the THIRD call of seasons.next returns "winter"', () => {})
  // test('[12] the FOURTH call of seasons.next returns "spring"', () => {})
  // test('[13] the FIFTH call of seasons.next returns again "summer"', () => {})
  // test('[14] the 40th call of seasons.next returns "spring"', () => {})

  describe('[Exercise 6] Car', () => {
    let focus
    beforeEach(() => {
      focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
    })

    test('[15] driving the car returns the updated odometer', () => {
      expect(focus.drive(100)).toBe(100); 
      expect(focus.drive(100)).toBe(200); 
      expect(focus.drive(100)).toBe(300); 
      expect(focus.drive(200)).toBe(500); 
    });
    // test('[15] driving the car returns the updated odometer', () => {})
    
    test('[16] driving the car uses gas', () => {
      focus.drive(600)
      expect(focus.drive(1)).toBe(600); 
      expect(focus.drive(1)).toBe(600); 
      expect(focus.drive(1)).toBe(600); 
      expect(focus.tank).toBe(0)
    });
    // test('[16] driving the car uses gas', () => {})

    test('[17] refueling allows to keep driving', () => {
      focus.drive(600)
      focus.refuel(10)
      focus.drive(600)
      expect(focus.odometer).toBe(900); 
      focus.refuel(20)
      focus.drive(600)
      expect(focus.odometer).toBe(1500)
    });
    // test('[17] adding fuel to a full tank has no effect', () => {})

    test('[18] adding fuel to a full tank has no effect', () => {
      focus.refuel(2000000)
      focus.drive(10000)
      expect(focus.odometer).toBe(600)
    });
    // test('[18] adding fuel to a full tank has no effect', () => {})
  })

  describe('[Exercise 7] isEvenNumberAsync', () => {
    test('[19] resolves true if passed an even number', async () => {
      await expect(utils.isEvenNumberAsync(4)).resolves.toBe(true);
    });
  
    test('[20] resolves false if passed an odd number', async () => {
      await expect(utils.isEvenNumberAsync(5)).resolves.toBe(false);
    });
  });
