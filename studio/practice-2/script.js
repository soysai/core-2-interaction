
//call the elements - container 

const container = document.getElementById("container");
// reveal container only when button is clicked

//call the button 

const btn = document.getElementById("reveal");

btn.onclick = function(){
    container.style.display = "flex";
}

// when the container is hovered on, it stops moving. 

//when mouse enters, animation stops
container.onmouseenter = function(){
    container.style.animationPlayState = "paused";
}

// when mouse leaves, animation stops
container.onmouseleave = function(){
    container.style.animationPlayState = "running";
}
