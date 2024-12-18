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
      snap: 1 / (vrSections.length - 1),
      scrub: 1.5,
      start: "top top",
      end: "bottom top"
    }
  });

  // Permet de ralentir le scroll
  window.addEventListener("wheel", function(event) {
    event.preventDefault();
    let scrollAmount = event.deltaY * 0.3; // Réduit la vitesse en multipliant par 0.3
    window.scrollBy(0, scrollAmount); // Scroll verticalement selon ce nouveau montant
  }, { passive: false });

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
        const screenHeightTimesThree = window.innerHeight * 1.7;
        return `${screenHeightTimesThree}px 65%`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 0.6;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1.5,
    }
  });

  nuageTl1.fromTo('#nuageLeft', { x: 0 }, { x: -200 })

  // Nuage Gauche quand on arrive au ciel
  const nuageTl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#ciel',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 1.7;
        return `${screenHeightTimesThree}px 65%`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 0.6;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1.5,
    }
  });

  nuageTl2.fromTo('#nuageRight', { x: 0 }, { x: 200 })

  // Oiseaux quand on arrive au ciel

  const oiseauxTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#ciel',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 1.7;
        return `${screenHeightTimesThree}px 65%`;
      }
    }
  });

  oiseauxTl.fromTo('#oiseaux', {  x: -1200, y: 400 }, {duration: 2, x: 1500, y: -400 })

  // Tesla quand on arrive dans l'atmosphere

  const teslaTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#tesla',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 2.15;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 1.275;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1.5,
    }
  });

  teslaTl.fromTo('#teslavoiture', {  x: 0, y: 0, rotation: 0 }, {duration: 5, x: -1000, y: 0, rotation: 360 })

  // Animation planète1
  const planet1Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#soleil',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 3.225;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 1.825;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  planet1Tl.fromTo('.planet1', {  x: -50, y: 0, rotation: 0 }, {duration: 5, x: 50, y: 0, rotation: 45 })

  // Animation bstars1
  const bgstars1Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#soleil',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 3.225;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 1.825;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  bgstars1Tl.fromTo('.bgStars1', {  x: 0, y: 0}, {duration: 5, x: -50, y: 0})

  // Animation planète2
  const planet2Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#mercure',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 4.31;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 2.35;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  planet2Tl.fromTo('.planet2', {  x: 50, y: 0, rotation: 0 }, {duration: 5, x: -50, y: 0, rotation: 45 })

  // Animation bstars2
  const bgstars2Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#mercure',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 4.31;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 2.35;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  bgstars2Tl.fromTo('.bgStars2', {  x: 0, y: 0}, {duration: 5, x: 50, y: 0})

  // Animation planète3
  const planet3Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#venus',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 5.395;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 2.875;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  planet3Tl.fromTo('.planet3', {  x: -50, y: 0, rotation: 0 }, {duration: 5, x: 50, y: 0, rotation: 45 })

  // Animation bstars3
  const bgstars3Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#venus',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 5.395;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 2.875;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  bgstars3Tl.fromTo('.bgStars3', {  x: 0, y: 0}, {duration: 5, x: -50, y: 0})

  // Animation planète4
  const planet4Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#terre',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 6.48;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 3.4125;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  planet4Tl.fromTo('.planet4', {  x: 50, y: 0, rotation: 0 }, {duration: 5, x: -50, y: 0, rotation: 45 })

  // Animation bstars4
  const bgstars4Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#terre',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 6.48;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 3.4125;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  bgstars4Tl.fromTo('.bgStars4', {  x: 0, y: 0}, {duration: 5, x: 50, y: 0})

  // Animation planète5
  const planet5Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#lune',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 7.565;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 3.95;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  planet5Tl.fromTo('.planet5', {  x: -50, y: 0, rotation: 0 }, {duration: 5, x: 50, y: 0, rotation: 45 })

  // Animation bstars5
  const bgstars5Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#lune',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 7.565;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 3.95;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  bgstars5Tl.fromTo('.bgStars5', {  x: 0, y: 0}, {duration: 5, x: -50, y: 0})

  // Animation planète6
  const planet6Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#mars',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 8.65;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 4.485;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  planet6Tl.fromTo('.planet6', {  x: 50, y: 0, rotation: 0 }, {duration: 5, x: -50, y: 0, rotation: 45 })

  // Animation bstars6
  const bgstars6Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#mars',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 8.65;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 4.485;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  bgstars6Tl.fromTo('.bgStars6', {  x: 0, y: 0}, {duration: 5, x: 50, y: 0})

  // Animation planète7
  const planet7Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#jupiter',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 9.735;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 5.01;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  planet7Tl.fromTo('.planet7', {  x: -50, y: 0, rotation: 0 }, {duration: 5, x: 50, y: 0, rotation: 45 })

  // Animation bstars7
  const bgstars7Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#jupiter',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 9.735;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 5.01;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  bgstars7Tl.fromTo('.bgStars7', {  x: 0, y: 0}, {duration: 5, x: -50, y: 0})

  // Animation planète8
  const planet8Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#saturne',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 10.82;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 5.55;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  planet8Tl.fromTo('.planet8', {  x: 50, y: 0, rotation: 0 }, {duration: 5, x: -50, y: 0, rotation: 45 })

  // Animation bstars8
  const bgstars8Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#saturne',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 10.82;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 5.55;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  bgstars8Tl.fromTo('.bgStars8', {  x: 0, y: 0}, {duration: 5, x: 50, y: 0})

  // Animation planète9
  const planet9Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#uranus',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 11.905;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 6.08;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  planet9Tl.fromTo('.planet9', {  x: -50, y: 0, rotation: 0 }, {duration: 5, x: 50, y: 0, rotation: 45 })

  // Animation bstars9
  const bgstars9Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#uranus',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 11.905;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 6.08;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  bgstars9Tl.fromTo('.bgStars9', {  x: 0, y: 0}, {duration: 5, x: -50, y: 0})

  // Animation planète10
  const planet10Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#neptune',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 12.99;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 6.595;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  planet10Tl.fromTo('.planet10', {  x: 0, y: 0, rotation: 0 }, {duration: 5, x: -50, y: 0, rotation: 45 })

  // Animation bstars10
  const bgstars10Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#neptune',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 12.99;
        return `${screenHeightTimesThree}px top`;
      },
      end: () => {
        const screenHeightTimesThree = window.innerWidth * 6.55;
        return `${screenHeightTimesThree}px 40%`;
      },
      toggleAction: "restart reverse play reverse",
      scrub: 1,
    }
  });

  bgstars10Tl.fromTo('.bgStars10', {  x: 0, y: 0}, {duration: 5, x: 50, y: 0})

  // Météorite
  const meteoriteTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#mercure',
      // markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 4.325;
        return `${screenHeightTimesThree}px top`;
      }
    }
  });

  meteoriteTl.fromTo('#meteorite', {  x: -1200, y: -400 }, {duration: 10, x: 300, y: 0 })

  // Ovni
  const ovniTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#mars',
      markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 8.65;
        return `${screenHeightTimesThree}px top`;
      }
    }
  });

  ovniTl.fromTo('#ovni', {  x: 0, y: 0 }, {duration: 10, x: -1500, y: -200 })

  // Astronaute
  const astronauteTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#saturne',
      markers: true,
      start: () => {
        const screenHeightTimesThree = window.innerHeight * 10.82;
        return `${screenHeightTimesThree}px top`;
      }
    }
  });

  astronauteTl.fromTo('#astronaute', {  x: 300, y: 200 }, {duration: 10, x: -2500, y: 0 })
});