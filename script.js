const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

function atualizar(){
    slides.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click',()=>{
    index = (index + 1) % totalSlides;
    atualizar();
});

prev.addEventListener('click',()=>{
    index = (index - 1 + totalSlides) % totalSlides;
    atualizar();
});