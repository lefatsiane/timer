// Setting variables to hold the intervalID (initialising IntervalID)
// and also a counter the will begin at 0
let intervalID;
let counter = 0;

let startCounter = function () {
  // variable containing function that counts in intervals
  intervalID = setInterval(
    //logic for the function
    function () {
      //function inside setInterval method
      console.log(counter++); //display count
    },
    1000 // amount of time between intervals
  );
};

function stopCounter() {
  // function to stop intervalID from counting
  clearInterval(intervalID);
} // logic for this function

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

// this button should start the outputting of the counter to the console
startButton.addEventListener("click", startCounter); // clicking start button starts the count, it contains the "startCounter" function. as it has been called back

// this button should the counter from outputting to the console
stopButton.addEventListener("click", stopCounter); //stop button stops the count, it contains the "stopCounter" function. as it has been called back
