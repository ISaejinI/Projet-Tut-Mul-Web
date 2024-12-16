document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

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

  const countdownTl = gsap.timeline();

  countdownTl.to("#nb3", {
    display: "none",
  })
  countdownTl.to("#nb2", {
    delay: 1,
    display: "block",
  })
  countdownTl.to("#nb2", {
    display: "none",
  })
  countdownTl.to("#nb1", {
    delay: 1,
    display: "block",
  })
  countdownTl.to("#nb1", {
    display: "none",
  })
  countdownTl.to("#nb0", {
    delay: 1,
    display: "block",
  })
});