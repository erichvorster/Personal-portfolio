

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        console.log('click')

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation ='';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 1.5}s`;
            }
            console.log(index / 7);
        })


        //Burger Animation
        burger.classList.toggle('toggle');
    })
    //Animate Links 
   
}

navSlide()


//TEXT ANIMATION



gsap.from('.hero__content--firstname',{
    duration:1,
    y:50,
    opacity:0,
    ease:'power4',
    x:50
})
gsap.from('.hero__content--surname',{
    duration:1,
    y:50,
    opacity:0,
    delay:1,
    ease:'power4',
    delay:0.2,
    x:-50
})
gsap.from('.hero__content--paragraph',{
    duration:1,
    y:50,
    opacity:0,
    delay:1,
    ease:'power4',
    delay:0.4
})
