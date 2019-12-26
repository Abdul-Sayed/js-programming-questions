// ---------------------------------------------------------------
// Check if the array [1, ..., n] contains all integers 1,2,..., K-1, K

// function doesArrContain(array, K) {
//   for (let i = 1; i <= K; i++) {
//     if (!array.includes(i)) {
//       return false
//     }
//   }
//   return true
// }

// ----------------------------------------------------------------

// Find the letter that appears most often in a string S
/*
function mostFrequentCharacter(S) {
  const lettersObj = {};
  for (letter of S) {
    lettersObj[letter] = 0;
  }
  for (letter of S) {
    lettersObj[letter] += 1;
  }
  const lettersArr = [];
  for (letter in lettersObj) {
    if (lettersObj[letter] === Math.max(...Object.values(lettersObj))) {
      lettersArr.push(letter)
    }
  }
  return lettersArr.sort()[0]
}
*/

// ---------------------------------------------------------
// Find the unpaired element in the array

/*
function findUnpairedNumber(arr) {
  const numObj = {};

  for (const num of arr) {
    numObj[num] ? numObj[num] += 1 : numObj[num] = 1;
  }

  for (const property in numObj) {
    if (numObj[property] % 2 === 1) return property;
  }
}

const arr = [9, 3, 9, 3, 9, 7, 9];
console.log(findUnpairedNumber(arr));
*/


// --------------------------------------------------------
// Find max binary gap; count of largest sequence of zeros between ones for given binary number N
/*
function binaryGap(N) {
	const regEx1 = /^[0]+/;
	const regEx2 = /[0]+$/;

	const numString = N.toString(2).replace(regEx1,'').replace(regEx2,'').toString();

	const countsObj = {};
	let counter = 0;

	for (i in numString) {
		if (numString[i] == 0) {
			counter += 1;
		} else {
			countsObj[i] = counter;
			counter = 0;
		}
	}

	return (Math.max(...Object.values(countsObj)));
}
*/

// --------------------------------------------------------
// Rearrange a string of S, M, L characters so that S<M<L
/*
function rearrangeSizes(T) {
	const S = [];
	const M = [];
	const L = [];

	for (let i = 0; i < T.length; i++) {
		if (T[i] === 'S') {
			S.push(T[i])
		} else if (T[i] === 'M') {
			M.push(T[i])
		} else {
			L.push(T[i])
		}
	}
	return (S.concat(M).concat(L)).join('')
}
*/

// ---------------------------------------------------------
// Make a general case isPalindrome ? function

// aabb => abba => true
// asdf => false
// asdfasdf => asdffffdsa => true
// aaab => false
// aaabb => baaab => true

/*
function canBePalindrome(str) {
    const charCount = {}
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]]) {
            charCount[str[i]] += 1
        } else {
            charCount[str[i]] = 1
        }
    }
    const counts = Object.values(charCount)
    let oddCount = 0
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] % 2 === 1) {
            oddCount++;    
        }
        if (oddCount > 1) {
            return false
        }
    }
    return true
}
*/

/*
// Other ways for when intput string is not shuffled

function isPalindrome1(str) {
  return str.toLowerCase() === [...str.toLowerCase()].reverse().join('')
}

// console.log(isPalindrome1('abbaa'))


function isPalindrome2(str) {
  let charArr = [...str.toLowerCase()];
  for (char of charArr) {
    if (char !== charArr.pop()) return false
  }
  return true
}

Clean special characters and spaces from strings;

  .replace(/ +/g, " ")
  .replace(/[&\\/#!,+()|@^`_$=;~%.'":*?<>{}[\-[\]']+/g, "")
  .trim()

*/


// --------------------------------------------------------------------

// Find the max possible product of a pair in an array of numbers 
/*
const maxProduct = (arr) => {
  // Initially sort the array numerically
  arr.sort((a,b) => a > b);

  // Constant declarations
  const first = arr.slice(0,1);
  const second = arr.slice(1,2);
  const secondLast = arr.slice(arr.length - 2, arr.length - 1);
  const last = arr.slice(arr.length - 1, arr.length);

  // Take product of last two numbers of the sorted array;
  const lastProduct = secondLast * last;
  console.log(lastProduct);

  // Take product of first two numbers if their product is positive
  if (first < 0 && second < 0) {
    const firstProduct = first * second;
    if (firstProduct > lastProduct) return firstProduct;
  } else {
    return lastProduct
  }

}

let numbersArray = [-1, 3, 4, 2, 0, 5]; //sorted //=> [-1, 0, 2, 3, 4, 5]
console.log(maxProduct(numbersArray))
*/

//--------------------------------------------------------------

/*

// Write a function that will return the count of duplicates that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function distincCharCount(str) {
	const originalStr = str;
	str = str.toLowerCase();
	str = [...str].sort() // I expect this to sort the alphabets AND the numbers in order
	for (let i = 0; i < str.length; i++) {

		if (str[i] === str[i + 1]) {
			// I have a duplicate, must remove str[i] it from the str array
			str.splice(i, 1)
		}
	}
	// return str
	return originalStr.length - str.length
}

const str = 'indivisibility'
console.log(distincCharCount(str))


function duplicateCount2(text){
  let obj = {}
  let total=0
  for(let i of text.toLowerCase()){
    obj[i] = (obj[i] || 0) + 1
  }
	for(let i in obj){
	  if(obj[i] >= 2){
      total++
    }
  }
 return total 
}

*/


// ------------------------------------

// Brackets Question

/*

function isValid(str) {
  const stack = [];
  let charCount={}

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1

    if (char === '(' || char === '[' || char === '{') {
      stack.push(char)
    } else if (char === ')') {
      if (stack.pop() !== '(') return false;
    } else if (char === ']') {
      if (stack.pop() !== '[') return false;
    } else if (char === '}') {
      if (stack.pop() !== '{') return false;
    }
  }
	console.log(charCount)

// To account for case where str = '(){'
  if(charCount["("] !== charCount[")"]){
    return false
  }
  if(charCount["{"] !== charCount["}"]){
    return false
  }
  if(charCount["["] !== charCount["]"]){
    return false
  }
  return true
}

// ()[]{}   //=> true
// ({[]})   // => true
// ([)]     // => false
// ]([)]     // => false
// [(])     //=> false
// (){      //=> false

const str = '(){{[[]]}]}';
console.log(isValid(str))
*/


// --------------------------------------------

// Format a string of names like 'Bart, Lisa & Maggie'.

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

/*
function list(names) {
  let namesList = []
  names.map(nameObj => namesList.push(nameObj.name))

  if (namesList.length > 1) {
    namesList.splice(-1, 1, `& ${namesList[namesList.length - 1]}`)
  }

  if (namesList.length > 2) {
    namesList = `${namesList.slice(0, -2).join(', ').trim()}, ${namesList.slice(-2).join(' ').trim()}`
  } else if (namesList.length === 2) {
    namesList = `${namesList.slice(0, -1).join().trim()} ${namesList.slice(-1).join(' ').trim()}`
  } else if (namesList.length === 1) {
    namesList = namesList.toString();
  } else {
    namesList = ''
  }

  return namesList
}

*/


// --------------------------------------------------------

/*
function likes(namesArr) {
  switch (namesArr.length) {
    case 0:
      return "no one likes this"
      break;
    case 1:
      return `${namesArr[0]} likes this`
      break;
    case 2:
      return `${namesArr[0]} and ${namesArr[1]} like this`
      break;
    case 3:
      return `${namesArr[0]}, ${namesArr[1]} and ${namesArr[2]} like this`
      break;
    default:
      return `${namesArr[0]}, ${namesArr[1]} and ${namesArr.length - 2} others like this`
  }
}



// likes[] // must be "no one likes this"
// likes["Peter"] // must be "Peter likes this"
// likes["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

const namesArr = ["Alex", "Jacob", "Mark", "Max"]
console.log(likes(namesArr))
*/


// --------------------------------------------------------------

// BlueCore technical assessment

/*
// convert input string into an array of two strings, split at the 'C'
// in the left string, for every 2 characters, count all the M~
// in the right string, for every 2 characters, count all the ~M
function blindMice(string) {

  let leftCount = 0; let rightCount = 0;

  leftString = string.split("C")[0].trim().replace(/ /g, '');
  rightString = string.split("C")[1].trim().replace(/ /g, '');

  for (let i = 0; i < leftString.length; i += 2) {
    if (`${leftString[i]}${leftString[i + 1]}` === 'M~') leftCount++
  }

  for (let i = 0; i < rightString.length; i += 2) {
    if (`${rightString[i]}${rightString[i + 1]}` === '~M') rightCount++
  }

  return leftCount + rightCount
}

console.log(blindMice("~M CM~~M~M"))

*/


// ------

/*
// Sort a nested array by the medians of its sub arrays

// Helper function
function median(values) {
  values.sort(function (a, b) { return a - b; });
  var half = Math.floor(values.length / 2);
  if (values.length % 2)
    return values[half];
  else
    return (values[half - 1] + values[half]) / 2.0;
}

function medianSort(array) {
  const mediansObj = {};

  // For each elem of input array, insert into mediansObj elem: elem (or median(elem): elem if the element is a sub-array)
  for (elem of array) {
    if (elem.length) {
      mediansObj[median(elem)] = elem
    } else {
      mediansObj[elem] = elem
    }
  }

  // Sort the keys of mediansObj and populate sortedArray with mediansObj[key], in the order of sortedKeys
  const sortedKeys = Object.keys(mediansObj).sort((a, b) => a - b);
  const sortedArray = []
  for (key of sortedKeys) {
    sortedArray.push(mediansObj[key])
  }

  return sortedArray
}

// medianSort([3, [-2, 4, 9]])
// medianSort([[12, 9, 1, 25], 4])
medianSort([[2.4, 0.2, 9.8], 0, [-1], [-9, -4]])
*/


// --------

// potion: {
//   volume: x,
//     ingredients: { ingredient1: a, ingredient2: b, ingredientA: c }
// }

// For an array of potions, return the total volume and an ingredients object listing the volume weighted average of each ingredient from all the potions

/*
function mixPotions(potionsArr) {
  let totalVol = 0;
  const ingObj = {};
  for (potion of potionsArr) {
    totalVol += potion.volume
    for (ingredient in potion.ingredients) {
      ingObj[ingredient] = (ingObj[ingredient] || 0) + potion.volume * potion.ingredients[ingredient]
    }
  }
  Object.keys(ingObj).map(key => ingObj[key] /= totalVol);

  return {
    volume: totalVol,
    ingredients: ingObj
  }
}


console.log(mixPotions([
  {
    volume: 100,
    ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 }
  },
  {
    volume: 300,
    ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 }
  },
]))
*/

// -------------------------------------------------

// count the valleys in a 1-d 
/*

function countingValleys(n, s) {
  // your in a valley if (#D - #U) > 0
  // count hte # of times (#D - #U) > 0 transitions to (#D - #U) = 0
  let numU = 0;
  let numD = 0;
  let valleyMap = [];
  let valleyCount = 0;

  for (let char of s) {
    if (char === 'U') numU++;
    if (char === 'D') numD++;
    if ((numD - numU) === 0) {
      valleyMap.push('on even ground')
    } else if ((numD - numU) > 0) {
      valleyMap.push('in valley')
    } else { valleyMap.push('up high') }
  }

  for (let i = 0; i < valleyMap.length; i++) {
    if (valleyMap[i] === "on even ground" && valleyMap[i - 1] === "in valley") {
      valleyCount += 1;
    }
  }

  return valleyCount

}

let s = 'UDDDUDUU'
countingValleys(s.length, s)

*/

//-----------------------------------------------------------------------

// Fibonacci

// Fibonacci Generator 
/*
function fibonacci(n) {
  if (n <= 0) {
    return []
  } else {
    let fibNum = [0, 1];
    for (let i = 2; i < n; i++) {
      let j = fibNum[i - 2] + fibNum[i - 1]
      fibNum.push(j)
    }
    return fibNum;
  }
}
// fibonacci(4); // should return [0,1,1,2]
// fibonacci(-1); // should return []
*/


// Fibonacci number at step

/*
var fib = function (steps) {
  let fibNum = [0, 1];

  for (let i = 2; i <= steps; i++) {
    let j = fibNum[i - 2] + fibNum[i - 1]
    fibNum.push(j)
  }

  return fibNum[steps]
}


// fib(0) returns 0, fib(4) returns 3, fib(15) returns 610
let steps = 15
console.log(fib(steps))
*/

// generate size n fibonacci sequence from a pattern of the first three
/*
function tribonacci(signature, n) {
  if (n === 0) return [];
  if (n === 1) return [signature[0]];
  if (n === 2) return [signature[0], signature[1]];
  if (n === 3) return signature;
  for (let i = 0; i < (n - 3); i++) {
    signature.push((signature[i] + signature[i + 1] + signature[i + 2]))
  }
  return signature
}
*/

// ----------------------------------------

// General Fibonacci; generate n-sized sequence from a variable size signature pattern

/*
function Xbonacci(signature, n) {
  const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);

  // for (let i = 0; i < (n + originalLength - (signature.length)); i++) {
  for (let i = 0; i < n; i++) {
    signature.push(arrSum(signature.slice(i, signature.length + i)))
  }

  console.log(util.inspect(signature.slice(0, n), false, null));
  return signature.slice(0, n)
}
*/

// ------------------------------------------
// Count the number of steps to the end while landing only on 0's and jumping 1 or 2 spaces

/*
function jumpingOnClouds(c) {
  let numSteps = 0;

  let i = 0;
  while (i < c.length) {
    if (c[i + 2] === 0) {
      numSteps += 1;
      i = i + 2;
    } else if (c[i + 1] === 0) {
      numSteps += 1;
      i = i + 1;
    } else if (i === (c.length - 1)) break
  }

  return (numSteps)
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))

*/

// -----------------------------------------------
// Find the number of 'a' characters in the first n characters of the repeated pattern 's'

/*
function repeatedString(s, n) {
  let repeatedString = ""
  let aCounter = 0;
  for (let i = 0; i < Math.floor(n / s.length); i++) {
    repeatedString += s
  }
  for (let i = 0; i < (n % s.length); i++) {
    repeatedString += s[i]
  }
  for (let i = 0; i < repeatedString.length; i++) {
    if (repeatedString[i] === 'a') aCounter++;
  }
  return aCounter
}

console.log(repeatedString('abc', 100))
*/