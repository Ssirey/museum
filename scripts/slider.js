
document.addEventListener('contextmenu', event => event.preventDefault());

class Slide {
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
    getName() {return this.name};
    getDescription() {return this.description};
}

// let slides = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];

let slides = [
    new Slide("slide1", "Як-15 – первенец реактивной эры ОКБ"),
    new Slide("slide2", "Истребитель Як-15 из музея ОКБ А.С.Яковлева, 1989 год"),
    new Slide("slide3", "Истребитель Як-15 в полете"),
    new Slide("slide4", "Як-15, выставка ОКБ А.С.Яковлева на Ходынском поле, 1989 год"),
    new Slide("slide5", "Як-15 с раскапотированным двигателем")
];

let index = 0;

function updateCounter(){
    document.getElementById("counter").textContent = (index + 1) + "/" + slides.length;
}

function updateDescription(){
    document.getElementById("description").textContent = slides[index].getDescription();
}

updateCounter();
updateDescription();

function changeSlideRight(){
    document.getElementsByClassName(slides[index].getName())[0].style= 'z-index: 0';
    index = (index == slides.length - 1) ? 0 : index + 1;
    document.getElementsByClassName(slides[index].getName())[0].style= 'z-index: 1';
    updateDescription();
    updateCounter();
}

function changeSlideLeft(){
    document.getElementsByClassName(slides[index].getName())[0].style= 'z-index: 0';
    index = (index == 0) ? slides.length-1 : index - 1;  
    document.getElementsByClassName(slides[index].getName())[0].style= 'z-index: 1';
    updateDescription();
    updateCounter();
}

