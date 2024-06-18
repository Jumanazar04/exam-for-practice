const hamburger = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".hamburgerr");
const nav = document.querySelector('nav')

hamburger.addEventListener('click', (e)=>{
    e.preventDefault();

    nav.classList.toggle('hamburgerClick')
})

hamburgerClose.addEventListener('click', (e)=>{
    e.preventDefault();

    nav.classList.toggle('hamburgerClick')
})
