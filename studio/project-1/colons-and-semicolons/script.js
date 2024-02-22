  // replacement of phrase again 
  const commadefinition = document.getElementById("commadefinition");
  const commadefinitionrevealed = document.getElementById("commadefinitionrevealed");
  const colondefinition = document.getElementById("colondefinition");
  
  
  commadefinition.onmouseover = function() {
    commadefinition.style.display = "none";
    commadefinitionrevealed.style.display = "inline";
    colondefinition.style.display = "block";
    document.getElementById('colondefinition').scrollIntoView({behavior: "smooth"});
    }
  
  //when mouse leaves, hide the list
  commadefinition.onmouseleave = function() {
      commadefinition.style.display = "inline";
      commadefinitionrevealed.style.display = "none";  
  }

const commas = document.getElementById("commas");
const explanation = document.getElementById("explanation");

commas.onclick = function(){
  explanation.style.display ="block";
  document.getElementById('explanation').scrollIntoView({behavior: "smooth"});
}

//when mouse hovers over error, it is corrected 
const error = document.getElementById("error");
const correction = document.getElementById("correction");

error.onmouseover = function() {
    error.style.display = "none";
    correction.style.display = "inline";
}

  // replacement of phrase again 
  const contradictions = document.getElementById("contradictions");
  const replacementcontradiction = document.getElementById("replacementcontradiction");
  const reasons = document.getElementById("reasons");
  
  
  contradictions.onmouseover = function() {
    contradictions.style.display = "none";
    replacementcontradiction.style.display = "inline";
    reasons.style.display = "block";
    document.getElementById('reasons').scrollIntoView({behavior: "smooth"});
    }
  
  //when mouse leaves, hide the list
  contradictions.onmouseleave = function() {
      contradictions.style.display = "inline";
      replacementcontradiction.style.display = "none";  
  }

  const repetition = document.getElementById("repetition");
  
  
  repetition.onmouseover = function() {
    repetition.style.display = "none";
    }

    const comma2 = document.getElementById("comma2");
    const conclusion = document.getElementById("conclusion");
    
    comma2.onclick = function(){
      conclusion.style.display ="block";
      document.getElementById('conclusion').scrollIntoView({behavior: "smooth"});
    }