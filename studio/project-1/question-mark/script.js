// TO MAKE THE LIST POP UP AFTER HOVER
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
  

//repeat of the same, but with the "if"
var correction_1 = document.getElementById("correction-1")
var error_1 = document.getElementById("spell-error-1");
error_1.onmouseover = function(){
    correction_1.style.display = "inline";
    error_1.style.display = "none";

}

//repeat same, but with the second underlined sentence

// Get the item that pops up
var question = document.getElementById("question");
// Get the button that opens the modal
var question_replaced = document.getElementById("question-replaced");
// When the user hovers on the button, open the list
question.onmouseenter = function() {
    question_replaced.style.display = "inline";
    question.style.display = "none";
  }

//when mouse leaves, hide the list
question.onmouseleave = function() {
    question_replaced.style.display = "none";
    question.style.display = "block";  
}
  
//repeat of the same, but with the "therefore wherefore"
var correction_2 = document.getElementById("correction-2")
var error_2 = document.getElementById("spell-error-2");
error_2.onmouseover = function(){
    correction_2.style.display = "inline";
    error_2.style.display = "none";

}
//To scroll down to a different part of the page when "uninteresting" is clicked:

//get the term "uninteresting"

const down = document.getElementById("font-change")

//get the explanation 

const explanation = document.getElementById("explanation")

//get it to lead to a differnt part of screen 
//screen should scroll to the second part of text
//when "uninteresting" is clicked, it unveils the explanation part

down.onclick = function() { 
    explanation.style.display = "block"; 
    document.getElementById('explanation').scrollIntoView({behavior: "smooth"});
} 


//To scroll down to a different part of the page when "noun" is clicked:
//display #definition when clicked on

const right = document.getElementById("font-change-2")
const definition = document.getElementById("definition")
right.onclick = function() { 
    definition.style.display = "block";
    document.getElementById('definition').scrollIntoView({behavior: "smooth"});
} 

//To scroll back to page when "<<<" is clicked:
//display #down when # back is clicked
//get #down and #back
const back = document.getElementById("back")
const again = document.getElementById("down")
back.onclick = function() { 
    again.style.display ="block";
    document.getElementById('down').scrollIntoView({behavior: "smooth"});
} 


//repeat of spelling error 3
var correction_3 = document.getElementById("correction-3")
var error_3 = document.getElementById("spell-error-3");
error_3.onmouseover = function(){
    correction_3.style.display = "inline";
    error_3.style.display = "none";

}

//when "again" is pressed, the repetition is revealed 

const repetition = document.getElementById("repetition")
const connector = document.getElementById("other_punctuations")

again.onclick = function (){
    repetition.style.display = "block";
    document.getElementById('repetition').scrollIntoView({behavior: "smooth"});
} 

repetition.onmouseenter = function(){
    connector.style.display = "inline";
}
//replacement 
var exclamation = document.getElementById("exclamation_mark");
// Get the button that opens the modal
var quotation = document.getElementById("quotation_mark");
// When the user hovers on the button, open the list
exclamation.onmouseover = function() {
    quotation.style.display = "inline";
    exclamation.style.display = "none";
  }

//when mouse leaves, hide the list
exclamation.onmouseout = function() {
    quotation.style.display = "none";
    exclamation.style.display = "inline";  
}
  
//display punctuation_mark only when connector is pressed 

const punctuation = document.getElementById("punctuation_mark")

connector.onclick = function (){
    punctuation.style.display = "block";
    document.getElementById('punctuation_mark').scrollIntoView({behavior: "smooth"});
} 

// replace animation 
var diss = document.getElementById("diss");
// Get the button that opens the modal
var disslist = document.getElementById("disslist");
// When the user hovers on the button, open the list
var repetition_2 = document.getElementById("repetition-2")
diss.onmouseover = function() {
    disslist.style.display = "block";
    diss.style.display = "none";
    repetition_2.style.display = "block";
  }

//when mouse leaves, hide the list
diss.onmouseout = function() {
    disslist.style.display = "none";
    diss.style.display = "inline";  
}

//when difficulty is pressed, disstrack is revealed 

var disstrack = document.getElementById("disstrack");
var difficulty = document.getElementById("difficulty");

difficulty.onclick = function(){
    disstrack.style.display = "block";
}

// info is revealed when segue is clicked 

var segue = document.getElementById("segue");
var thoughts = document.getElementById("thoughts"); 

segue.onclick = function (){
    thoughts.style.display = "block";
    document.getElementById('thoughts').scrollIntoView({behavior: "smooth"});
} 

//replace text again 

var replace_2 = document.getElementById("replace-2");
// Get the button that opens the modal
var replaced_2 = document.getElementById("replaced-2");
// When the user hovers on the button, open the list
var uninteresting = document.getElementById("uninteresting");

replaced_2.onmouseover = function() {
    replace_2.style.display = "inline";
    replaced_2.style.display = "none";
    uninteresting.style.display ="block";
  }

//when mouse leaves, hide the list
replaced_2.onmouseout = function() {
    replace_2.style.display = "none";
    replaced_2.style.display = "inline";  
}

var highlight_again = document.getElementById("highlight_again");
var uninteresting_clarification = document.getElementById("uninteresting_clarification");

highlight_again.onclick = function(){
    uninteresting_clarification.style.display = "block";
    document.getElementById('uninteresting_clarification').scrollIntoView({behavior: "smooth"});
}

var hidden = document.getElementById("hidden");
// When the user hovers on the button, open the list
var present = document.getElementById("present");

present.onmouseover = function() {
    hidden.style.display = "inline";
    present.style.display = "none";
  }

//when mouse leaves, hide the list
present.onmouseout = function() {
    hidden.style.display = "none";
    present.style.display = "inline";  
}

var highlight_mark = document.getElementById("highlight_mark");
var apostrophe = document.getElementById("apostrophe");

highlight_mark.onclick = function(){
    apostrophe.style.display = "block";
    document.getElementById('apostrophe').scrollIntoView({behavior: "smooth"});
}