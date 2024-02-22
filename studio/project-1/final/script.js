const container = document.querySelector(".js-container");

// put that circle in a random place within the container

setInterval(function() {
  // every second, make a circle
  const circle = document.createElement("div");
  circle.classList.add("circle");
  
  // get a random position relative to the container
  
  // random x
  const x = Math.floor(Math.random() * container.clientWidth);
  // random y
  const y = Math.floor(Math.random() * container.clientHeight);
  
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  container.appendChild(circle);
}, 125);