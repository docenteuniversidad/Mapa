$(window).load(function () {

    $(".loader").fadeOut()

    gsap.from('.titulos', { opacity: 0, duration: 1, delay: 0.1, ease: "sine.inOut()" })
    gsap.from('.titulo', { y: 50, opacity: 0, duration: 0.5, delay: 0.2, ease: "sine.inOut()" })
    gsap.from('.subtitulo', { y: 50, opacity: 0, duration: 0.5, delay: 0.3, ease: "sine.inOut()" })
    gsap.from('.texto', { y: 50, opacity: 0, duration: 0.5, delay: 0.4, ease: "sine.inOut()" })
    gsap.from('.boton', { x: 50, opacity: 0, duration: 0.5, delay: 0.4, stagger: 0.1, ease: "sine.inOut()" })

    gsap.from('.mapas', { opacity: 0, duration: 0.5, delay: 0.1, ease: "sine.inOut()" })
    gsap.from('.pin', { y: -50, opacity: 0, duration: 0.6, delay: 0.5, stagger: 0.15, ease: "elastic.out(1,0.6)" })


    //BUCARAMANGA
    $(".b1").hover(function () {
        gsap.to(this, { scale: 1.1, "background": "#b41342", duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".p1", { scale: 1.2, duration: 1, ease: "elastic.out(1,0.5)" })
    }, function () {
        gsap.to(this, { scale: 1, "background": "#151921", duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".p1", { scale: 1, duration: 1, ease: "elastic.out(1,0.5)" })
    });

    $(".p1").hover(function () {
        gsap.to(this, { scale: 1.2, duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".b1", { scale: 1.1, "background": "#b41342", duration: 1, ease: "elastic.out(1,0.5)" })
    }, function () {
        gsap.to(this, { scale: 1, duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".b1", { scale: 1, "background": "#151921", duration: 1, ease: "elastic.out(1,0.5)" })
    });

    //FLORIDABLANCA
    $(".b2").hover(function () {
        gsap.to(this, { scale: 1.1, "background": "#b41342", duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".p2", { scale: 1.2, duration: 1, ease: "elastic.out(1,0.5)" })
    }, function () {
        gsap.to(this, { scale: 1, "background": "#151921", duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".p2", { scale: 1, duration: 1, ease: "elastic.out(1,0.5)" })
    });

    $(".p2").hover(function () {
        gsap.to(this, { scale: 1.3, duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".b2", { scale: 1.1, "background": "#b41342", duration: 1, ease: "elastic.out(1,0.5)" })
    }, function () {
        gsap.to(this, { scale: 1, duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".b2", { scale: 1, "background": "#151921", duration: 1, ease: "elastic.out(1,0.5)" })
    });

    //PIEDECUESTA
    $(".b3").hover(function () {
        gsap.to(this, { scale: 1.1, "background": "#b41342", duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".p3", { scale: 1.3, duration: 1, ease: "elastic.out(1,0.5)" })
    }, function () {
        gsap.to(this, { scale: 1, "background": "#151921", duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".p3", { scale: 1, duration: 1, ease: "elastic.out(1,0.5)" })
    });

    $(".p3").hover(function () {
        gsap.to(this, { scale: 1.3, duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".b3", { scale: 1.1, "background": "#b41342", duration: 1, ease: "elastic.out(1,0.5)" })
    }, function () {
        gsap.to(this, { scale: 1, duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".b3", { scale: 1, "background": "#151921", duration: 1, ease: "elastic.out(1,0.5)" })
    });

    //GIRON
    $(".b4").hover(function () {
        gsap.to(this, { scale: 1.1, "background": "#b41342", duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".p4", { scale: 1.3, duration: 1, ease: "elastic.out(1,0.5)" })
    }, function () {
        gsap.to(this, { scale: 1, "background": "#151921", duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".p4", { scale: 1, duration: 1, ease: "elastic.out(1,0.5)" })
    });

    $(".p4").hover(function () {
        gsap.to(this, { scale: 1.3, duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".b4", { scale: 1.1, "background": "#b41342", duration: 1, ease: "elastic.out(1,0.5)" })
    }, function () {
        gsap.to(this, { scale: 1, duration: 1, ease: "elastic.out(1,0.5)" })
        gsap.to(".b4", { scale: 1, "background": "#151921", duration: 1, ease: "elastic.out(1,0.5)" })
    });




















});