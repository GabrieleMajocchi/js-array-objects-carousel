// ---Create the array---
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselGroup = document.querySelector('div.carousel');
let activeIndex = 0;
let i = 0;

// ---Adding various slide with elements---
images.forEach(element => {
    carouselGroup.innerHTML +=
    `<div class="carousel-item ${i}">
        <img src="./${element.image}" alt="Carousel slide image">
        <div>
            <h4>${element.title}</h4>
            <p>${element.text}</p>
        </div>
    </div>`;
    i++;
});

// ---Adding active based on current slide---
addactive(activeIndex);

// ---Adding function to go to the previous slide---
const prevButton = document.querySelector('div.previous-button');
prevButton.addEventListener('click', previous);
function previous(){
    removeactive();
    if (activeIndex == 0 ) {
        activeIndex = images.length - 1;
    } else {
        activeIndex = activeIndex - 1;
    }
    addactive(activeIndex);
};

// ---Adding function to go to the next slide---
const nextButton = document.querySelector('div.next-button');
nextButton.addEventListener('click', next);
function next(){
    removeactive();
    if (activeIndex == images.length - 1 ) {
        activeIndex = 0;
    } else {
        activeIndex = activeIndex + 1;
    }
    addactive(activeIndex);
};

// ---Adding function to select slide clicking dots---
for(let b=0 ; b<images.length ;b++){
const dot = document.querySelector('#dot'+b);
dot.addEventListener('click', function(){
    addactive(b);
    removeactive();
})};

// ---Adding timed function---
const timer = setInterval (next, 3000);

// --------------
// ---Function---
// --------------

/**
 * Activate the selected index in the slider
 * @param {number} index number of current index to activate
 */
function addactive(index){
    document.querySelectorAll('div.carousel-item')[index].classList.add('active');
    document.querySelectorAll('div.dots')[index].classList.add('active');
}

/**
 * Remove active state from the slider
 */
function removeactive(){
    document.querySelector('div.carousel-item.active').classList.remove('active');
    document.querySelector('div.dots.active').classList.remove('active');
}
