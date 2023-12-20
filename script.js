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






AOS.init();