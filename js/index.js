gsap.registerPlugin(ScrollTrigger);

gsap.from('.header',{
    x: -600,
    duration: 3,
    ease: "power4.out",
 })
 gsap.from('#about',{
    x: 600,
    duration: 3,
    ease: "power4.out",
 })