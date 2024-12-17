document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  // Scroll dans le sens inverse
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

  // Lance le décompte et affiche la fusée annimée
  const launchButton = document.getElementById('launchButton');
  launchButton.addEventListener("click", (evt) => {
    gsap.to("#launchButton", { opacity: 0, ease: "sine" });
    const countdownTl = gsap.timeline();

    countdownTl.to("#nb3", { delay: 1, display: "none" })
      .set("#smoke", { attr: { src: "./src/img/smoke1.svg" } })
      .to("#nb2", { display: "block" })
      .to("#nb2", { delay: 1, display: "none" })
      .set("#smoke", { attr: { src: "./src/img/smoke2.svg" } })
      .to("#nb1", { display: "block" })
      .to("#nb1", { delay: 1, display: "none" })
      .set("#smoke", { attr: { src: "./src/img/smoke3.svg" } })
      .to("#nb0", { display: "block" })
      .to("#fuseeFeu", { opacity: 1 })
      .to("#fusee", { opacity: 0 })
  })

  // Déplace les nuages
  const nuageTl1 = gsap.timeline({
    scrollTrigger: {
      trigger: '#ciel',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 1.2;
        return `${screenHeightTimesThree}px top`;
      }
    }
  });

  nuageTl1.fromTo('#nuageLeft', { x: 0 }, { x: -200 })

  // Nuage Gauche quand on arrive au ciel
  const nuageTl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#ciel',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 1.2;
        return `${screenHeightTimesThree}px top`;
      }
    }
  });

  nuageTl2.fromTo('#nuageRight', { x: 0 }, { x: 200 })

  // Oiseaux quand on arrive au ciel

  const oiseauxTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#ciel',
      markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 1.2;
        return `${screenHeightTimesThree}px top`;
      }
    }
  });

  oiseauxTl.fromTo('#oiseaux', {  x: -1200, y: 400 }, {duration: 2, x: 1500, y: -400 })

});