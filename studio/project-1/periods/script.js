// to replace the content with the new content 

const shortenthis = document.getElementById("shortenthis");
const replacewiththis = document.getElementById("replacewiththis");


shortenthis.onmouseover = function() {
    shortenthis.style.display = "none";
    replacewiththis.style.display = "inline";
  }

//when mouse leaves, hide the list
shortenthis.onmouseleave = function() {
    shortenthis.style.display = "inline";
    replacewiththis.style.display = "none";  
}

// to make the pros and cons scrollable - with the help fo chatgpt

const column1 = document.getElementById('pros');
const column2 = document.getElementById('cons');

column1.addEventListener('scroll', function () {
    column2.scrollTop = 0;
});

column2.addEventListener('scroll', function () {
    column1.scrollTop =  0;
});

//when mouse hovers over error 5, it disappears 
const error1 = document.getElementById("spell-error-1");
error1.onmouseover = function() {
    error1.style.display = "none";
}

const shortenthis2 = document.getElementById("shortenthis2");
const replacewiththis2 = document.getElementById("replacewiththis2");


shortenthis2.onmouseover = function() {
    shortenthis2.style.display = "none";
    replacewiththis2.style.display = "inline";
  }

//when mouse leaves, hide the list
shortenthis2.onmouseleave = function() {
    shortenthis2.style.display = "inline";
    replacewiththis2.style.display = "none";  
}

const pros = document.getElementById("pros");
const cons = document.getElementById("cons");
const intro = document.getElementById("intro");

intro.onmouseenter = function(){
  pros.style.display ="block";
  cons.style.display ="block";
  ending.style.display ="block";
  document.getElementById('pros').scrollIntoView({behavior: "smooth"});
}

const shortenthis3 = document.getElementById("shortenthis3");
const replacewiththis3 = document.getElementById("replacewiththis3");


shortenthis3.onmouseover = function() {
    shortenthis3.style.display = "none";
    replacewiththis3.style.display = "inline";
  }

//when mouse leaves, hide the list
shortenthis3.onmouseleave = function() {
    shortenthis3.style.display = "inline";
    replacewiththis3.style.display = "none";  
}

//when mouse hovers over error 5, it disappears 
const outro = document.getElementById("outro");
const ending = document.getElementById("ending");
ending.onmouseover = function() {
    outro.style.display = "block";
}
