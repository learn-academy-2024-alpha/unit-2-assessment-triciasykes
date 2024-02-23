// UNIT 2 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Alpha 2024"
// console.log(cohort.split(" "))

// a) Your answer: "Alpha" "2024"
// b) Verify and explain: ["Alpha", "2024"] - .split() splits string into substrings in an array

// --------------------2) What will this log?

const greeter = (name) => {
  ;`Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: "Hello LEARN Student"
// b) Verify and explain: functions need return statements; this is undefined

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: array is filtered - if number is not even (doesn't divide evenly by 0)

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub",
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: calls on object uses dot notation to pull out languages then bracket notation to get value at 0 index

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Alpha"
    this.year = 2024
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: Learn { student: "George", cohort: "Alpha", year: 2024}
// b) Verify and explain:
