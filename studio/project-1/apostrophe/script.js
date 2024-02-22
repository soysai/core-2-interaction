// replacement of phrase 
const replacement1 = document.getElementById("replacement1");
const shorten1 = document.getElementById("shorten1");


shorten1.onmouseover = function() {
    replacement1.style.display = "inline";
    shorten1.style.display = "none";
  }

//when mouse leaves, hide the list
shorten1.onmouseout = function() {
    replacement1.style.display = "none";
    shorten1.style.display = "inline";  
}

// for spelling mistakes 

const error = document.getElementById("error");
const error_correction = document.getElementById("error-correction")
error.onmouseover = function() {
    error_correction.style.display = "inline";
    error.style.display = "none";
  }

const error2 = document.getElementById("error-2");
const error_correction2 = document.getElementById("error-correction-2")
error2.onmouseover = function() {
    error_correction2.style.display = "inline";
    error2.style.display = "none";
}

// replacement of phrase again 
const replacement2 = document.getElementById("replacement2");
const shorten2 = document.getElementById("shorten2");
const contradiction = document.getElementById("contradiction");


replacement2.onmouseover = function() {
    replacement2.style.display = "none";
    shorten2.style.display = "inline";
    contradiction.style.display = "block";
  }
// when contradiction is pressed, it leads to another sentence 

const feel = document.getElementById("feel");

contradiction. onclick = function(){
  feel.style.display = "block";
  document.getElementById('feel').scrollIntoView({behavior: "smooth"});
}
//when mouse leaves, hide the list
replacement2.onmouseleave = function() {
    replacement2.style.display = "inline";
    shorten2.style.display = "none";  
}

//when mouse hovers over error 3, it disappears 
const error3 = document.getElementById("error-3");
error3.onmouseover = function() {
    error3.style.display = "none";
}

const error4 = document.getElementById("error-4");
const error_correction4 = document.getElementById("error-correction-4")
error4.onmouseover = function() {
    error_correction4.style.display = "inline";
    error4.style.display = "none";
  }

  // replacement of phrase again 
const replacement3 = document.getElementById("replacement3");
const shorten3 = document.getElementById("shorten3");


shorten3.onmouseover = function() {
    shorten3.style.display = "none";
    replacement3.style.display = "inline";
  }

//when mouse leaves, hide the list
shorten3.onmouseleave = function() {
    shorten3.style.display = "inline";
    replacement3.style.display = "none";  
}

//when mouse hovers over error 5, it disappears 
const error5 = document.getElementById("error-5");
error5.onmouseover = function() {
    error5.style.display = "none";
}

//when "font-change" is clicked, without is displayed 

const font_change = document.getElementById("font-change");
const without = document.getElementById("without");

font_change.onclick = function(){
  without.style.display ="block";
  document.getElementById('without').scrollIntoView({behavior: "smooth"});
}

//when font-change-3 is clicked, clarification is displayed 

const font_change_1 = document.getElementById("font-change-3");
const clarification = document.getElementById("clarification");
font_change_1.onclick = function(){
  clarification.style.display ="block";
  document.getElementById('clarification').scrollIntoView({behavior: "smooth"});
}

const font_change_2 = document.getElementById("font-change-4");
const ending = document.getElementById("ending");
const last = document.getElementById("last");
const menu = document.getElementById("menu");
font_change_2.onclick = function(){
  ending.style.display ="block";
  last.style.display = "block";
  menu.style.display = "block";
  document.getElementById('ending').scrollIntoView({behavior: "smooth"});
}