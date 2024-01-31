 // locomotive js
//  const scroll = new LocomotiveScroll({
//     el: document.querySelector('#all'),
//     smooth: true
    
// });
//gsap js
function gsapanimation(){
    gsap.from(".main h1", {
        y: -150,
        scale: 1,
        opacity: 0,
        duration:0.5
    })
    gsap.from(".main h2", {
        y: 250,
        scale: 1,
        opacity: 0,
        duration:1
        
    })
    gsap.from(".my_photo", {
        y: 150,
        scale: 1,
        opacity: 0,
        duration:2,
        dilay:2
    })
    gsap.from(".navbar",{
        y:-50,
        scale:1,
        opacity:0,
        duration:1
    })
    gsap.from(".image",{
        x:-50,
        scale:1,
        opacity:0,
        duration:1
    })
   

   
}
// call gasp animation
gsapanimation()
//  scroling animation
function navbarscroler(){
    
let tabhome = document.getElementById('home');
tabhome.addEventListener('click', (e) => {
    window.scrollTo(0, 0);
})

let tababout = document.getElementById('about');
tababout.addEventListener('click', (e) => {
    window.scrollTo(500, 800);
})

let tabskill = document.getElementById('skill');
tabskill.addEventListener('click', (e) => {
    window.scrollTo(1000, 1650);
})

let tabproject = document.getElementById('project');
tabproject.addEventListener('click', (e) => {
    window.scrollTo(0, 2400);
})

let tabcontact = document.getElementById('contact');
tabcontact.addEventListener('click', (e) => {
    window.scrollTo(0, 3350);
    console.log("hello")
})
}
// call scroling animation
navbarscroler()

let about = document.getElementById('aboutt');
about.addEventListener('mouseenter', (e) => {
    gsap.from(".coding-image",{
        x:450,
        scale:1,
        opacity:0,
        duration:1
    })
    gsap.from(".about-text",{
        x:-450,
        scale:1,
        opacity:0,
        duration:1
    })

})