var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Noticing numbers in the images we isolate it to use random

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; // Here we concatenated the image folder, names, number and extention ( clever )

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage); // Now we tap into the tag, then set the attribute randomly from our array.


var ramdomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + ramdomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// Note the document. notation is how we gain access and tap into the website to connect it and dynamically add behavior to it by changing the images randomly.

var myMessages = ["Awesome!", "Nice!", "Sweet!", "Great!", "Good job!"];

var messagesTotal = myMessages.length;

var randomMessage = Math.floor(Math.random() * messagesTotal);

var choice = myMessages[randomMessage];

if (randomNumber1 > ramdomNumber2) {

  document.querySelector("h1").innerHTML = "Player 1 wins, " + choice; // bridge to website

} else if (ramdomNumber2 > randomNumber1) {

  document.querySelector("h1").innerHTML = "Player 2 wins, " + choice; // bridge to website
} else {

  document.querySelector("h1").innerHTML = "DRAW!";

}
