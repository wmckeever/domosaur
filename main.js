//<----------- Warm Up Challenges ----------->//

let spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = "40px";

let pMess = document.querySelector('p.mess-with-me');
pMess.style.background = "green";

let secondDino = document.querySelector('#hide-me');
secondDino.style.opacity = "0";
secondDino.style.display = "none";

let firstImage = document.querySelector('#triceratops')
firstImage.style.width = "324px";

//<----------- Event Listeners Challenges ----------->//

spanMess.addEventListener('click', function(){
  spanMess.style.color = "orange";
})

////////////////////////////////////////////////////////

firstImage.addEventListener('click', function(){
  firstImage.style.border = "3px solid red";
})

////////////////////////////////////////////////////////

let feathered = document.querySelector('#feathers');

feathered.addEventListener('click', function(){
  feathered.style.opacity = "0.5";
})

////////////////////////////////////////////////////////

let dinoButton = document.querySelector('#toggle');
let dinoRow = document.querySelector('#row');

dinoButton.addEventListener('click', function(){
  if (dinoRow.style.backgroundColor === "white"){
    dinoRow.style.backgroundColor = "yellow";
  }else {
    dinoRow.style.backgroundColor = "white";
  }
})



////////////////////////////////////////////////////////

let grow = document.querySelector('#biggify');

grow.addEventListener('mouseenter', function(){
    grow.style.width = "200px"
})
grow.addEventListener('mouseout', function(){
    grow.style.width = "162px"
})