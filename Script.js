const sr = ScrollReveal({
    origin:'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

//Scroll Effects

sr.reveal('.header__name')
sr.reveal('.header__title',{delay:200})
sr.reveal('.header__location',{delay:500})

sr.reveal('#about-me')
sr.reveal('.about__avatar',{delay:200})
sr.reveal('.about__blurb',{delay:500})
sr.reveal('.about__item', {interval:400})

sr.reveal('.skills__header')
sr.reveal('.skills__icon', {interval:100})

sr.reveal('.portfolio__item', {interval:200})