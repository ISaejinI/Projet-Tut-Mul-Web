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
      end: "bottom top"
    }
  });

  const launchButton = document.getElementById('launchButton');
  launchButton.addEventListener("click", (evt) => {
    gsap.to("#launchButton", {opacity: 0, ease: "sine"});
    const countdownTl = gsap.timeline();

    countdownTl.to("#nb3", { delay: 1, display: "none" })
      .to("#nb2", { display: "block" })
      .to("#nb2", { delay: 1, display: "none" })
      .to("#nb1", { display: "block" })
      .to("#nb1", { delay: 1, display: "none" })
      .to("#nb0", { display: "block" })
  })


  // gsap.to("#fusee", {
  //   y: -50,
  //   x: 300,
  //   scrollTrigger: {
  //     trigger: '#soleil',
  //     start: 'top center', // Déclenche l'animation lorsque le haut de #soleil arrive au centre de l'écran
  //     end: 'bottom center',
  //     scrub: 1, // Animation fluide liée au scroll
  //     markers: true, // Garde pour tester, supprime en production
  //   }
  // });
});