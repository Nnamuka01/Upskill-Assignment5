
// Question 1: Create a function that will be able to convert figures from Fahrenheit to celsius
let FahrToCel = (fahr) => {
    return (fahr - 32) * (5/9)
}

// Question 1: Test Cases 
// console.log(FahrToCel(32) + "°C")  //0
// console.log(FahrToCel(113) + "°C") //45

//  2. Create a funtion that will calculate the average of numbers in an array.
let arrAvg = (arr) => {
    let arrSum = 0;
    for(let i = 0; i < arr.length; i++) {
        arrSum = arrSum + arr(i)
    }
    return (arrSum/arr.length)
}
 
// Question 2: Test Cases
console.log(arrAvg((2, 4, 6)))   //4
console.log(arrAvg((8, 16, 24))) //16

// 3. Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits
let duoDiviChecker = (n, x, y) => {
    if(n % x === 0 && n % y === 0) {
        return true
    }else{
        return false
    }
}

// Question 3: Test Cases
console.log(duoDiviChecker(45, 3, 15))  //true
console.log(duoDiviChecker(200,10, 17)) //false 
    
    

// Question 4. Create a function that will output the first 100 prime numbers.
  function PrimeNumber(num){
    let i = 2, squareRoot = Math.sqrt(num)
    while(i <= squareRoot) {
      if(num % 1 === 0){
              i++
              return false
        }
      i++
    }
        return num > 1
  }
  function outputPrimeNumbers (){
      for(let number = 0; number <= 100; number++) {
        if('PrimeNumber'(number)) {
            console.log('${number} is a prime number')
        }
    }
//   }   

// Question 4: Test Case
//  'outputPrimeNumbers'(number);
// '2 is a prime number'
// '3 is a prime number' 


// Question 5. Create a function that will return a boolean specifying if a number is a prime number
 function isPrimeNumber (number) {
    if(PrimeNumber(number)) {
       return true;
    }else{
        return false;
    }     
 }

 // Question 5: Test Cases
//  console.log(isPrimeNumber(5)); // Output: true
//  console.log(isPrimeNumber(12)); // Output: false


// Question 6. Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
   function getPositiveNumbers(numbers) {
    return numbers.filter(number => number > 0);
   }  

   // Question 6: Test Cases
//    console.log(getPositiveNumbers(1, 2, 3, -4, 7, -12)) // Outout: (1, 2, 3, 7)
//    console.log(getPositiveNumbers(6, 12, -3, -14, 7, -12)) // Output: (6, 12, 7)

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











                      
      
