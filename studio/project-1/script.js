// TO MAKE THE DIALOGUE POP UP AFTER CLICK

// Get the dialogue that pops up
var dialogue = document.getElementById("question");

// Get the button that opens the modal
var btn = document.getElementById("container");


// When the user clicks on the button, open the prompt generator
btn.onclick = function() {
  question.style.display = "block";
}
