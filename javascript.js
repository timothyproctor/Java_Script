//purpose: take two integers and return greater integer.
//signature: (integer, integer) --> higher integer
//example:
// greaterNum(1, 2)
//     return --> 2

    //todo: write function.
    //todo: write an if statement that will return which argument is greater.
    //todo: retun the greater integer.


function greaterNum(num1, num2) {
  if(num1 < num2) {
    return num2
  } else {
    return num1
  }
};

// purpose: take one argument which is a language code, then returns 'hello world' for 3 languages and should defualt to english
// Signature: helloworld(String("es", "de", "en"))
// example:
//   helloworld("es");
//   return --> "hola mundo"
//
//   todo: write the function
//   todo: write if statement that will return hello world in the language of the corresponding language of code.
//   todo: write a else statement that defualts to english
//

function helloWorld(lang) {
  if (lang === "es") {
    return "Hola Mundo!"
  }
  if (lang === "de") {
     return "Hallo Welt!"
  }
  else {
    return "Hello World"
  }
};

//purpose: write a function that take an integer argument and returns a string.
//signature: assignGrade(integer score) --> return string.
//example: assignGrade(88);
  //  returns --> B

function assignGrade(grade) {
  if(grade <= 100 && grade >= 91) {
    return "A"
  }
  if(grade <= 90 && grade >= 81) {
    return "B"
  }
  if(grade <= 80 && grade >= 71) {
    return "C"
  }
  if(grade <= 70 && grade >= 61) {
    return "D"
  }
  if(grade <= 60 && grade >= 0) {
    return "F"
  }
};

// purpose: fucntion that takes two arguments, one noun and one number, and returns the pluralized version.
// Signature: pluralize (integer, string) ---> integer, string + "s"
// example: pluralize(3, "Dog");
// return "3 Dogs"
// todo: write function
// todo: take string and affix an "s"
// todo: take edited sting and affix the integer
// todo: return the conc phrase.

function pluralize(int, noun){
  if (int >= 2) {
    return (int + " " + noun + "s")
  }else {
    return (int + " " + noun)
  }

};

//purpose: write a funtion that tells the computer to pick a random integer between 1 and 100(both inclusive) and repeatedly asks the user for guesses. The computer must inform the user if their guess is too high or low. Once the user guesses the correct integer, create an alert that displays winning message.
//signature: prompt(guess a number)
    //alert that number is wrong(too high || too low)
    //repeat until correct guess
    //alert(winner winner chicken pasta)
//example: function guess(game)
  //prompts guess a number
  //alerts correct, high or low
  //alert winner winner chicken pasta



function guessNum() {
  var randNumber = Math.floor((Math.random() * 100) + 1);
  console.log(randNumber);

  //var randNumber tell computer to pick a random integer from 1-100 (both inclusive)

  var guess = prompt("Guess the number:");



  var wrongCount = 0;
  //var guess bring up prompt to the guessed string

  while(parseInt(guess) !== randNumber && wrongCount < 6) {

    wrongCount = wrongCount + 1;



    if (guess < randNumber) {
      var guess = prompt("Too low, guess again.");
    }
    //if statement determines if guessed string is too low

    if (guess > randNumber) {
      var guess = prompt("Too high, guess again.");
    }
    //if statement determines if guessed string is too high



    if  (parseInt(guess) != NaN) {
        var guess = prompt("you can only use numbers try again")

    }

};

  if (wrongCount === 6){
    alert("You Lose");
  }


  if (parseInt(guess) === randNumber) {
    alert("Winner winner chicken dinner!");
  };
  //if statement alerts "winner" when user guesses the right string
};
