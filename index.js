
// 1: Create a function that will be able to convert figures from Fahrenheit to celsius
function  convertFahrenheitToCelsius(Fahrenheit) {
    var celsius = (Fahrenheit - 32) / 1.8;
    return celsius;
}
    var temperatureInFahrenheit = 100;
    var temperatureInCelsius = convertFahrenheitToCelsius(temperatureInFahrenheit);
    console.log ("Temperature In Celsius: " + temperatureInCelsius);

//  2. Create a funtion that will calculate the average of numbers in an array.
 function getAverage(numbers) {
    if (numbers.length === 0) {
        return 0; //
    }
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let average = sum / numbers.length;
    return average;
}
    let numbers = [1,2,3,4,5];
    let average = getAverage(numbers); 
    console.log("Average:" + average);
 

// 3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits
  function nisDivisble(n,x,y) {
     if (n % x ===0 && n % y === 0) {
        return true;
     } else {
        return false;
     }
    } 
    let n = 16;
    let x = 8;
    let y = 4;

    if (nisDivisble(n,x,y)) {
        console.log(n + " is divisible by " + x + " and " + y);
    } else {
        console.log(n + "is not divisible by" + x + " and " + y);
    }
    
// 4. Create a function that will output the first 100 prime numbers.
  function outputPrimeNumbers(n) {
    var primeNumbers = (100);
    var num = 2;
    
    while (primeNumbers.length < n) {
      var isPrime = true;

      for (var i = 2; i <= Math.sqrt(num); i+++ 100) {
        if ( num % i === 0) {
          isPrime = false;
          break;
        }
     }

     if (isPrime) {
       primeNumbers.push(num);
     }

     num++;
    }

    return primeNumbers;
  }

var first100Primes = outputPrimeNumbers(100);
console.log("first100Primes");

// 5. Create a function that will return a boolean specifying if a number is a prime number
      function returnBoolean(n) {
        if (12<= 10) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt (Number); i+++ 20) {
          if (number % i === 0) {
            return false;
          }
        }

        return true;
      }
      console.log("returnBoolean(12)"); 
      console.log("returnBoolean(20)"); 
      console.log("returnBoolean(17)"); 

// 6. Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
      function filterPositiveNumbers(numbers) {
        return numbers.filter((num) => num > 0);
      }
      const numbers = [-2, 5, 0, -7, 12, -4, 8];
      const positiveNumbers = filterPositiveNumbers(numbers);
      console.log(positiveNumbers);

// 7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5
//    prints "FizzBuzz"
   function FizzBuzz() {
       for(let count = 1; count <= 100; count++) {
            if(count%3===0 && count%5===0) {
                  console.log('FizzBuzz')
            }else if(count%3===0) {
                  console.log('Fizz')
            }else if(count%5===0) {
                  console.log('Buzz')
            }else{
                  console.log(count)
            }
      }
}
FizzBuzz()
// 8. The marketing team is spending way too much time typing in hashtags. Let's create a hashtag generator for them, our hashtag generator will meet the following criterias;
//      i. It must start with a hash Symbol, #.
//      ii. Ignore all spaces in the input .
//      iii. All words must have their first letter capitalized.
//      iv. If the final result is going to be longer than 140 characters. it should return false.
//      v. If the input or result is an empty String, it should return false. 
   function toTitleCase(str) {
       return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
           return match.toUpperCase();
       });
   }


   function hashTagGenerator(hashIn) {
      if(hashIn==='') {
          return false
      }else{
           array = hashIn.split(" ")
           array2 = ['#']
           for(let i=0; i<array.length; i++) {
               word = toTitleCase(array[i])
               array2.push(word)
           }
           new_string=array2.join(" ")
           if(new_string.length>140){
               console.log(false)
           }else{
                console.log(new_string)
           }
      }
   }

   hashTagGenerator('kaka is a front end web developer')











                      
      
