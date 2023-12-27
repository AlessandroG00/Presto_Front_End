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




fetch('./annunci2.json')
.then((response) => response.json())
.then((data) => {
    
    let cardsWrapper = document.querySelector('#cardsWrapper');
    
    function showCards(array){
        array.forEach((element) => {
            let div = document.createElement('div');
            div.classList.add('col-12', 'col-md-6', 'd-flex', 'justify-content-center');
            div.innerHTML = `
            <div class="product-card-custom shadow p-3 mb-5 bg-white rounded">
                <div class="icon-container">
                    <i class="fa-regular fa-heart fs-3"></i>
                </div>
                <img src="media/ImgPlaceholder.png" alt="" class="img-fluid mb-3 card-img">
                <div class="d-flex justify-content-between align-items-start">
                <div>
                    <p class="fw-bold mb-0">${element.name}</p>
                    <p class="fst-italic">${element.category}</p>
                </div>
                <p class="price-tag">$ ${element.price}</p>
                </div>
            </div>
            `
            cardsWrapper.appendChild(div)
        })
    }

    showCards(data)
    
})