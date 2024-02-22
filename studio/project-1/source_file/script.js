// to create the replaced underlined phrases 

// Get the list that pops up
var list = document.getElementById("replace");
// Get the button that opens the modal
var btn = document.getElementById("replaced");
// When the user hovers on the button, open the list
btn.onmouseover = function() {
    list.style.display = "block";
    btn.style.display = "none";
  }

//when mouse leaves, hide the list
btn.onmouseout = function() {
    list.style.display = "none";
    btn.style.display = "inline";  
}
//to create "buttons" that help jump from one place to another 

//when "again" is pressed, the repetition is revealed 

const repetition = document.getElementById("repetition")

again.onclick = function (){
    repetition.style.display = "block";
    document.getElementById('repetition').scrollIntoView();
} 

//spelling error commands 

var correction_1 = document.getElementById("correction-1")
var error_1 = document.getElementById("spell-error-1");
error_1.onmouseover = function(){
    correction_1.style.display = "inline";
    error_1.style.display = "none";