const navbar = document.querySelector('#navbar');
const navLinks = document.querySelectorAll('.nav-link')
const navBrand = document.querySelector('.navbar-brand');
const btnPrimary = document.querySelector('#btnPrimary');

window.addEventListener('scroll',() => {
    if(window.scrollY > 30){
        navbar.style.backgroundColor = '#2a2a2a'
        navLinks.forEach((link) => {
            link.style.color = 'white'
        })
        navBrand.style.color = 'white'
        btnPrimary.style.backgroundColor = 'white'
        btnPrimary.style.color= 'black'
    } else {
        navbar.style.backgroundColor = 'transparent'
        navLinks.forEach((link) => {
            link.style.color = 'black'
        })
        navBrand.style.color = 'black'
        btnPrimary.style.backgroundColor = '#2a2a2a'
        btnPrimary.style.color= 'white'
    }
})


//  Counter
document.querySelector('#number1');
document.querySelector('#number2');
document.querySelector('#number3');

function createInterval(finalN, element, frequency) {
    let counter = 0;
    
    let interval = setInterval(()=>{
        if(counter<finalN){
            counter++;
            element.innerHTML = counter;
        } else {
            clearInterval(interval);
        }
    }, frequency)
}

let confirm = false;
let observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting && confirm == false){
            createInterval(900, number1, 1);
            createInterval(1200, number2, 1);
            createInterval(1000, number3, 1);

            confirm = true;

            setTimeout(()=>{
                confirm = false;

            },8000)
        }
    })
})

observer.observe(number1);

//annunci
 
const cardsWrapper = document.querySelector('#cardsWrapper');


let announcements = [
    { 'title' : 'Play-station-5', 'category' : 'Elettronica', 'price' : 500, 'url' : './media/ps5.jpg' ,},
    { 'title' : 'Nike x Off-white', 'category' : 'Abbigliamento', 'price' : 500, 'url' : './media/shoes.jpg',},
    { 'title' : 'Call of duty mw3', 'category' : 'Elettronica', 'price' : 40, 'url' : './media/mw3.ico',},
    { 'title' : 'Orologio G-shock', 'category' : 'Orologi', 'price' : 300, 'url' : './media/g-shock-metal-covered-casioak-gm-2100-1aer-12957711.jpg',},
    { 'title' : 'Babolat Technical', 'category' : 'Sport', 'price' : 300, 'url' : './media/racchetta.jpg',},
]

announcements.forEach((annuncio, index) => {
    if(index >= announcements.length - 3){
    let div = document.createElement('div');
    div.classList.add('col-12','col-md-4', 'd-flex', 'justify-content-center');
    div.innerHTML = `
    <div class="product-card-custom shadow p-3 mb-5 bg-white rounded">
    <div class="icon-container">
    <i class="fa-regular fa-heart fs-3"></i>
    </div>
    <img src="${annuncio.url}" alt="" class="img-fluid mb-3 card-img">
    <div class="d-flex justify-content-between align-items-start">
    <div>
    <p class="fw-bold fs-4 mb-0">${annuncio.title}</p>
    <p class="fst-italic">${annuncio.category}</p>
    </div>
    <p class="price-tag">$ ${annuncio.price}</p>
    </div>
    </div>
    `
    cardsWrapper.appendChild(div)
    }
})

const iconHearts = document.querySelectorAll('.fa-heart');
const cardImgs = document.querySelectorAll('.card-img');

iconHearts.forEach((icon) => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('fa-solid');
        icon.classList.toggle('text-danger');  
    })
})

cardImgs.forEach((cardImg, i) => {
    cardImg.addEventListener('dblclick', () => {
        iconHearts[i].classList.add('fa-solid');
        iconHearts[i].classList.add('text-danger');
    })
})












AOS.init();