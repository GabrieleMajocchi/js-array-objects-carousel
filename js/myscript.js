// ---Create the array---
const images = [
    {
        image: 'img/01.jpg',
        title: 'Monte Everest',
        text: "L'Everest è la montagna più alta del mondo, situata nella catena dell'Himalaya, al confine tra il Nepal e il Tibet. Con un'altitudine di 8.848 metri, è una delle sfide più ambite per gli alpinisti di tutto il mondo. La sua maestosità e la sua bellezza lo rendono un'icona dell'avventura e della conquista umana.",
    }, {
        image: 'img/02.jpg',
        title: 'Monte Kilimanjaro',
        text: "Il Kilimanjaro è il punto più elevato dell'Africa, situato in Tanzania. Nonostante la sua altitudine relativamente modesta di 5.895 metri, il Kilimanjaro è famoso per la sua imponente sagoma solitaria che emerge dalle pianure circostanti. È anche uno dei pochi luoghi al mondo dove è possibile trovare neve e ghiaccio vicino all'equatore.",
    }, {
        image: 'img/03.jpg',
        title: 'Monte McKinley (Denali)',
        text: "Il Monte McKinley, noto anche come Denali, si trova in Alaska, negli Stati Uniti. Con i suoi 6.190 metri, è la montagna più alta del Nord America. Il Denali è caratterizzato da pareti rocciose verticali e da enormi ghiacciai, che rappresentano una sfida formidabile per gli scalatori. La sua bellezza selvaggia e remota attira numerosi avventurieri da tutto il mondo.",
    }, {
        image: 'img/04.jpg',
        title: 'Mont Blanc',
        text: "Il Mont Blanc è la montagna più alta delle Alpi, con un'altitudine di 4.809 metri. Situato al confine tra Francia e Italia, offre panorami spettacolari e una grande varietà di percorsi per gli appassionati di escursionismo e scalata. La sua fama e l'accessibilità relativa lo rendono una delle mete più popolari per gli amanti della montagna in Europa.",
    }, {
        image: 'img/05.jpg',
        title: "Monte Fuji",
        text: "Il Monte Fuji è un'icona nazionale del Giappone e uno dei vulcani più famosi al mondo. Situato a circa 100 chilometri a sud-ovest di Tokyo, il Fuji si innalza fino a un'altitudine di 3.776 metri. La sua forma conica perfetta, le foreste rigogliose e i laghi pittoreschi attirano visitatori e artisti da secoli. È anche una meta molto popolare per gli escursionisti che vogliono raggiungere la sua cima e ammirare l'alba spettacolare.",
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
    removeactive();
    addactive(b);
})};

// ---Adding timed function---
let timer = setInterval (next, 3000);

// ---Adding stop to timed function---
const stop = document.querySelector('.fa-stop');
stop.addEventListener('click', function(){
    clearInterval(timer);
});

// ---Adding play to timed function---
const play = document.querySelector('.fa-play');
play.addEventListener('click', function(){
    clearInterval(timer);
    timer = setInterval (next, 3000);
});

// ---Adding reverse timed function---
let rev = true;
const reverse = document.querySelector('.fa-rotate-left');
reverse.addEventListener('click', function(){
    if (rev === true){
        clearInterval(timer);
        timer = setInterval (previous, 3000);
        rev = false;
    }else{
        clearInterval(timer);
        timer = setInterval (next, 3000);
    }
});

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
