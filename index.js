// Iteration 1: Names and Input

let hacker1 = "Michael";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Nikki";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else {
  console.log(`I'm not sure if these are names!`);
}

// Iteration 3: Loops

// 3.1

let nameFormated = "";
for (let i = 0; i < hacker1.length; i++) {
  nameFormated += hacker1[i] + " ";
}
console.log(nameFormated.trim().toUpperCase());

// 3.2

let nameFormatedReverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  nameFormatedReverse += hacker1[i];
}
console.log(nameFormatedReverse);

// 3.3

// Version 1

let teamNames = [];
teamNames.push(hacker1, hacker2);
teamNames.sort();

if (teamNames[0] === teamNames[1]) {
  console.log("What?! You both have the same name?");
} else if (teamNames[0] === hacker1) {
  console.log("The driver's name goes first.");
} else if (teamNames[0] === hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
}

// Version 2

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
}

// Bonus
