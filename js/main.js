document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

    const vrSections = gsap.utils.toArray('.section');
    gsap.from(vrSections, {
        yPercent: -100 * (vrSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".verticalReverse",
          pin: true,
          scrub: 1,
          start: "top top",
          end: "bottom top",
          markers: true
        }
    });
});