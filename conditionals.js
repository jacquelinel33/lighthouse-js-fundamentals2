// const raining = true;
// const cold = false;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// }

// console.log("Now you're ready to go outside!");

// const temperature = 12;

// if (temperature < 0) {
//   console.log("Make sure you pick out a scarf!");
// } else if (temperature < 15) {
//   console.log("Short sleeves won't cut it!");
// } else {
//   console.log("Short sleeves are fine.");
// }

// console.log("Now you're ready to go outside!");

// const isCitizen = true;
// const age = 26;

// if (isCitizen && age > 18) {
//   console.log("You are eligible to vote.");
// }




let school = ""
let whichSchool = age => {
  if (age < 13) {
    school = "Elementary School";
    return school;
  } else if (age >= 13 && age <= 18) {
    school = "Secondary School";
    return school;
  } else if (age > 18) {
    school = "Lighthouse Labs";
    return school;
  }
};

console.log("I am 20. Which school should I go to?");
console.log(whichSchool(20));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
