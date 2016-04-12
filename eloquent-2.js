// EXERCISES //

// Looping a triangle //

var hash = "#"
for (var i = 0; i <= 7; i++) {
  console.log(hash);
  hash += "#";
}


// FizzBuzz //


for (var i = 0; i < 100; i++) {
  if ((i+1) % 3 == 0 && (i+1) % 5 == 0){
    console.log("Fizz Buzz");
  }
  else if ((i+1) % 5 ==0){
    console.log("Buzz");
  }

  else if ((i+1) % 3 == 0){
    console.log("Fizz");
  }

  else {
      console.log(i +1);
  }
}


// Chessboard //

// Change the parameter boardSize for different sizes of board //

var boardSize = 8;
var hash = "#";
var blank =" ";
var sequence = "";


for (var row = 0; row < boardSize; row++){
  sequence = "";
  if ((row + 1) % 2 != 0){
    for (var column =0; column < boardSize; column++){
      if ((column + 1) % 2 != 0){
        sequence = sequence + blank;
      }
      else {
        sequence = sequence + hash;
      }
    }
  }

  else {
    for (var column = 0; column < boardSize; column++){
      if ((column + 1) % 2 != 0) {
        sequence = sequence + hash;
      }
      else{
        sequence = sequence + blank;
      }
    }
  }
console.log(sequence);
}

