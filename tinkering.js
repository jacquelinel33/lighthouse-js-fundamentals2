// let balance = 0;
// let checkBalance = true;
// let isActive = true;

// if (checkBalance === true) {
//   if (isActive === true && balance > 0) {
//     console.log(`Your balance is ${balance.toFixed(2)}`);
//   } else if (isActive === false) {
//     console.log("You account is no longer active.");
//   } else if (isActive === true && balance === 0) {
//     console.log("Your account is empty.");
//   }else if (isActive === true && balance < 0) {
//     console.log("Your balance is negative. Please contact bank.");
//   }
// } else {
//   console.log("Thank you. Have a nice day!");
// }



// let flavor = "chocolate";
// let vessel = "bowl";
// let toppings = "sprinkles";
//  if((flavor == "chocolate" || flavor == "vanilla") && (vessel == "cone" || vessel == "bowl") && (toppings == "sprinkles" || toppings == "peanuts")) {
//    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
// //  }

// let eatsPlants = true;
// let eatsAnimals = false;

// let category = eatsPlants ? ( eatsAnimals ? "omnivore" : "herbivore" ) : (eatsAnimals ? "carnivore" : "undefined"); 
// console.log(category);


// let education = 'no high school diploma'
// let salary = 0

// switch (education) {
//   case "no high school diploma":
//     salary = 25636;
//     break;
//   case "a high school dimploma":
//     salary = 35256;
//     break;
//   case "an Associate's degree":
//     salary = 41496;
//     break;
//   case "a Bacelor's degree":
//     salary = 59124;
//     break;
//   case "a Master's degree":
//     salary = 697732;
//     break;
//   case "a Professional dregree":
//     salary = 89960;
//     break;
//   case "a Doctoral degree":
//     salary = 84396;
//     break;
// }

// console.log(`In 2015, a person with ${education} earned an average of $${salary.toLocaleString("en-US")}/year.`)

// var x = 1;
// while (x <= 20) {
//   if (x % 3 === 0 && x%5 != 0) {
//     console.log("Julia");
//   } else if (x % 5 === 0 && x%3 != 0) {
//     console.log("James")
//   } else if (x%5===0 && x%3===0) {
//     console.log("JuliaJames")
//   } else {
//     console.log(x);
//   }
//   x = x +1
// }


// let num = 99
// while (num >= 1) {
//   if (num === 1) { 
//     console.log(`${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass is around... ${num -1} bottles of juice on the wall!`);
//   num = num -1
//   } else if (num === 2) {
//     console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass is around... ${num -1} bottle of juice on the wall!`);
//   num = num -1
//   } else {
//     console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass is around... ${num -1} bottles of juice on the wall!`);
//   num = num -1 ;
//   }
// }


// let sec = 60
// while (sec >= 0) {
//   if (sec === 50 || sec === 31 || sec === 16 || sec === 10 || sec ===6 || sec === 0) {
//     switch (sec) {
//     case 50:
//       console.log("Orbiter transfers from ground to internal power ");
//       break;
//     case 31:
//       console.log("Ground launch sequencer is go for auto sequence start");
//       break;
//     case 16:
//       console.log("Activate launch pad sound suppression system");
//       break;
//     case 10:
//       console.log("Activate main engine hydrogen burnoff system ");
//       break;
//     case 6:
//       console.log("Main engine start ");
//       break;
//     case 0:
//       console.log("Solid rocket booster ignition and liftoff! ");
//       break;
//   }} else {
//     console.log(`T-${sec} seconds`);
//   }
//  sec = sec -1;
//   }

// let solution = 12
// for(x=11; x>=1; x--) {
//     solution *= x;
// }
// console.log(solution);


// let row = ""
// let  seat = ""

// for (x=0; x<=25; x++) {
//     row = x 
//     for (i=0; i<=99;i++) {
//         seat =  i
//         console.log(row + "-" + seat)
//     }
// }

// function laugh () {
//     console.log("\"hahahahahahahahahaha!\"")
// }

// laugh();


// function laugh () {
//   return "\"hahahahahahahahahaha!\"";
// }

// console.log(laugh());

// let laughs = ""
// function laugh (num) {
//   for (x=0;x<num;x++) {
//     laughs = laughs + "ha"
//   }
//   laughs = laughs + "!";
//   return laughs
// };

// console.log(laugh(5));


// function isThisWorking(input) {
//   console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
// }

// isThisWorking(3);

// function expression catSays
// var catSays = function(max) {
//   var catMessage = "";
//   for (var i = 0; i < max; i++) {
//     catMessage += "meow ";
//   }
//   return catMessage;
// };

// // function declaration helloCat accepting a callback
// function helloCat(callbackFunc) {
//   return "Hello " + callbackFunc(3);
// }

// // pass in catSays as a callback function
// console.log(helloCat(catSays));


// // Function expression that assigns the function displayFavorite 
// // to the variable favoriteMovie
// var favoriteMovie = function displayFavorite(movieName) {
//   console.log("My favorite movie is " + movieName);
// };

// // Function declaration that has two parameters: a function for displaying
// // a message, along with a name of a movie
// function movies(messageFunction, name) {
//   messageFunction(name);
// }

// // Call the movies function, pass in the favoriteMovie function and name of movie
// movies(favoriteMovie, "Finding Nemo");


// var laugh = function(num) {
//   let ha = "";
//   for (x = 0; x < num; x++){
//     ha = ha + "ha"  
//   } return ha;
// };

// console.log(laugh(10));

// let cry = function myFunction() {
//   let crying = "boohoo!";
//   return crying;
// };

// console.log(cry);


function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}




emotions("happy",function laughs(num) {
  let ha ="";
  for(x=0; x<num; x++) {
      ha = ha + "ha";
  }return ha + "!";
} );