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

