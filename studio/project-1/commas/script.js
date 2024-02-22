const comma = document.getElementById("comma");
const rant = document.getElementById("rant");

comma.onclick = function(){
    rant.style.display ="block";
    document.getElementById('rant').scrollIntoView({behavior: "smooth"});
  }

  // replacement of phrase again 
  const feel = document.getElementById("feel");
  const feelshort = document.getElementById("feelshort");
  const rant2 = document.getElementById("rant2");
  
  
  feel.onmouseover = function() {
      feel.style.display = "none";
      feelshort.style.display = "inline";
      document.getElementById('rant2').scrollIntoView({behavior: "smooth"});
      rant2.style.display ="block";
    }
  
  //when mouse leaves, hide the list
  feel.onmouseleave = function() {
      feel.style.display = "inline";
      feelshort.style.display = "none";  
  }

const adverbial_clauses = document.getElementById("adverbial_clauses");
const complications = document.getElementById("complications");
const complicated = document.getElementById("complicated");
const conclusion = document.getElementById("conclusion");

adverbial_clauses.onclick = function(){
    complications.style.display ="block";
    complicated.style.display = "block";
    conclusion.style.display="block";
    document.getElementById('complications').scrollIntoView({behavior: "smooth"});
  }

  const toclear = document.getElementById("toclear");
  const clarification = document.getElementById("clarification");
  
  
  toclear.onmouseover = function() {
      toclear.style.display = "none";
      clarification.style.display = "inline";
    }
  
  //when mouse leaves, hide the list
  toclear.onmouseleave = function() {
      toclear.style.display = "inline";
      clarification.style.display = "none";  
  }

  // for spelling mistakes 

const error = document.getElementById("error");
const error_correction = document.getElementById("error-correction")
error.onmouseover = function() {
    error_correction.style.display = "inline";
    error.style.display = "none";
  }
