// UNIT 2 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// describe("functionName", () => {
//   it("short descripton of what the function does", () => {
//     expect(functionName(input)).toEqual(output)
//   })
// })

// a) Create a test with expect statements for each of the variables provided.

describe("multiplyByThree", () => {
  it("multiplies each element in array by 3 and returns products in array", () => {
    const numbersArray1 = [6, 7, 8, 9, 10]
    // Expected output: [18, 21, 24, 27, 30]
    const numbersArray2 = [24, 27, 30, 33, 36]
    // Expected output: [72, 81, 90, 99, 108]
    expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
    expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
  })
})
//  ReferenceError: multiplyByThree is not defined

// b) Create the function that makes the test pass.

const multiplyByThree = (arrayOfNums) => {
  return arrayOfNums.map((value) => {
    return value * 3
  })
}

// Explain your code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisibleByThree", () => {
  it("takes the obj as arg and describes if number is evenly divisble by 3", () => {
    const object1 = { number: 15 }
    // Expected output: "15 is divisible by three"
    const object2 = { number: 0 }
    // Expected output: "0 is divisible by three"
    const object3 = { number: -7 }
    // Expected output: "-7 is not divisible by three"

    expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
    expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
    expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
  })
})

// b) Create the function that makes the test pass.
const divisibleByThree = (object) => {
  if (object.number % 3 === 0) {
    return `${object.number} is divisible by three`
  } else {
    return `${object.number} is not divisible by three`
  }
}

// Explain your code:

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capitalizer", () => {

  it("returns an array with all first letter capped", () => {
    expect(capitalizer(randomNouns1)).toEqual([
      "Streetlamp",
      "Potato",
      "Teeth",
      "Conclusion",
      "Nephew",
    ])
    expect(capitalizer(randomNouns2)).toEqual([
      "Temperature",
      "Database",
      "Chopsticks",
      "Mango",
    ])
  })
})

// b) Create the function that makes the test pass.
// Matt
// const capitalizer = (arrayOfWords) => {
//   return arrayOfWords.map((value) => value[0].toUpperCase() + value.slice(1))
// }

// Explain your code:
// mapping thru array
// grabbed first letter and capitalized  => returns array of just the capped letters
// slice with 1 argument, cuts off the the word at that index and leaves the rest of the word
//  concatenates the two parts

// Mark
const capitalizer = (arrayOfWords) => {
  let capitalizedArray = []
  for (let i = 0; i < arrayOfWords.length; i++) {
    let word = arrayOfWords[i]
    let capitalizedFirstLetter = word[0].toUpperCase()
    capitalizedFirstLetter += word.slice(1)
    capitalizedArray.push(capitalizedFirstLetter)
  }
  return capitalizedArray
}

capitalizer(randomNouns1)


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]