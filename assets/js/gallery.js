let slideImages = document.querySelectorAll('.images img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');

var counter = 0;


function positionArrows() {
    let activeImage = document.querySelector('.images img');
    let imageWidth = activeImage.clientWidth;
    let imageHeight = activeImage.clientHeight;
  
    next.style.right = `${(imageWidth / 2) - 500}px`;
    prev.style.left = `${(imageWidth / 2) - 500}px`;
    next.style.top = prev.style.top = `${(imageHeight / 2)}px`;
    
}
  
window.addEventListener('load', positionArrows);
  
slideImages.forEach(function(image) {
    image.addEventListener('transitionend', positionArrows);
});

next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next1 1.0s ease-in forwards';
    counter = counter >= slideImages.length - 1 ? 0 : counter + 1;
    slideImages[counter].style.animation = 'next2 1.0s ease-in forwards';
    indicators();
}

prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 1.0s ease-in forwards';
    counter = counter <= 0 ? slideImages.length - 1 : counter - 1;
    slideImages[counter].style.animation = 'prev2 1.0s ease-in forwards';
    indicators();
}


function autoSliding() {
    deletInterval = setInterval(() => {
        slideNext();
        indicators();
    }, 2500);
}
autoSliding();

const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', () => {
    clearInterval(deletInterval);
})
container.addEventListener('mouseout', autoSliding);


function indicators() {
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

function switchImage(currentImage) {
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if (imageId > counter) {
        slideImages[counter].style.animation = 'next1 1.0s ease-in forwards';
        counter = imageId; 
        slideImages[counter].style.animation = 'next2 1.0s ease-in forwards';
    } 
    if (imageId < counter) {
        slideImages[counter].style.animation = 'prev1 1.0s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 1.0s ease-in forwards';
    }
    indicators();
}

