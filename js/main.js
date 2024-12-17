document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray(".vr");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".wrapper",
      pin: true,
      scrub: 1,
      // snap: 1 / (sections.length - 1),
      end: () => "+=" + document.querySelector(".wrapper").offsetWidth
    }
  });

// Fusée touche ciel
  const rocketTl = gsap.timeline({scrollTrigger: {
    trigger: '.sol',
    markers: true,
    start: () => {
      const screenHeightTimesThree = window.innerWidth * 1;
      return `${screenHeightTimesThree}px top`;
    },
    end: ()=>{
      const screenHeightTimesThree = window.innerWidth * 2;
      return `${screenHeightTimesThree}px top`;
    },
    toggleAction: "restart reverse play reverse",
    scrub: true,

  }});
  rocketTl.fromTo('#fusee',
    {
      x: 0,
      transform: 'translateY(-50%) rotate(90deg)'
    }, 
    {
      x: 200,
      y: 300
  });

// Nuage quand on arrive au ciel
  const nuageTl = gsap.timeline({scrollTrigger: {
    trigger: '.ciel',
    markers: true,
    start: () => {
      const screenHeightTimesThree = window.innerWidth * 1;
      return `${screenHeightTimesThree}px top`;
    }
  }});

  nuageTl.fromTo('.nuage', {y:0}, {y:200})
});