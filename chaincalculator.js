function chainCalculator(initialValue) {
    let currentValue = initialValue;
  
    return {
      add(value) {
        currentValue += value;
        // console.log(this); // This will log the current value to the console
        return this; // 'this' refers to the calculator object
      },
      subtract(value) {
        currentValue -= value;
        console.log(this); // This will log the current value to the console
        return this; // Again, returns the same object for chaining
      },
      divide(value) {
        if (value !== 0) {
          currentValue /= value;
        } else {
          console.error("Cannot divide by zero");
        }
        return this; // Returns the same object for chaining
      },
      multiply(value) {
        currentValue *= value;
        return this; // Returns the same object for chaining
      },
      result() {
        
        return currentValue;
      }
    };
  }
  
  const calc = chainCalculator(10);
  const finalResult = calc.add(5).divide(0).result();
  console.log(finalResult); // Output: 13
  