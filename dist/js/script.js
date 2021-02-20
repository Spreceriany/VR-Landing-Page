const t1 = gsap.timeline({
  defaults: { duration: 1, ease: Back.easeOut.config(2) },
});
const t2 = gsap.timeline({
  defaults: { duration: 1, ease: Back.easeOut.config(1) },
});
const logo = document.querySelector(".header-logo");
const headerLinks = document.querySelectorAll("nav ul a li");
const introDesc = document.querySelectorAll(".container__intro__desc p ");
const introDescBorder = document.querySelectorAll(".container__intro__desc ");
const burger = document.querySelector(".burger");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const overlayLinks = document.querySelectorAll(".overlay ul a li");

const body = document.querySelector("body");

window.addEventListener("load",(event) =>{
  /* Header and hero section*/
t1.from(logo, { autoAlpha: 0, y: "-100%", duration: 2 })

  .from(
    burger,
    {
      autoAlpha: 0,
    },
    "-=1"
  )
  .from(
    headerLinks,
    {
      x: "-100%",
      stagger: 0.3,
      autoAlpha: 0,
    },
    "-=1"
  )

  .from(
    introDesc,
    {
      autoAlpha: 0,
      stagger: 0.3,
      y: "-100%",
    },
    "-=2"
  );

t2.paused(true);

t2.to(overlay, {
  x: 0,
}).from(
  overlayLinks,
  {
    x: "100%",
    stagger: 0.2,
    autoAlpha: 0,
  },
  "-=1"
);

burger.addEventListener("click", () => {
  t2.play();
  body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  t2.reverse(0.8);
  body.style.overflow = "auto";
});

const t3 = gsap.timeline();

gsap.from(".img-container", {
  scrollTrigger: {
    trigger: ".img-container",
    scrub: 1,
    start: "top 70%",
    end: "bottom bottom",
  },
  ease: "power1.inOut",
  autoAlpha: 0,
  duration: 1.5,
  x: -100,
});

gsap.from(".__desc", {
  y: 100,
  autoAlpha: 0,

  duration: 2,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".__desc",
    start: "top top%",
    end: "80% 90%",
    scrub: 1,
  },
});

gsap.from(".top-section", {
  opacity:0,
  y:20,
  duration:1.2,
  ease:"power3.out",
  scrollTrigger: {
    trigger: ".top-section",
    start:"top bottom",
    end:"bottom 80%",
    scrub: 1
  },
});

const linksSection = gsap.utils.toArray('.item')

linksSection.forEach(item =>{
  gsap.from(item,{
    scrollTrigger:{
      trigger:item,
      scrub:1
    },

    stagger:.4,
  duration:2,
  autoAlpha:0,
  ease: "expo.out"
  })
})

const mediaQuery = window.matchMedia('(min-width:801px)')
const firstCol = document.querySelector(".first-column a")
const footerLinks = document.querySelectorAll(".first-column ul a")
const footerIcons = document.querySelectorAll(".second-column ul li")
if(mediaQuery.matches){
  gsap.from(firstCol,{
   
    opacity:0,
    ease: "back.out(1.7)",
    duration:1.5,
    scrollTrigger:{
      trigger:firstCol,
     
    },
  })
  gsap.from(footerLinks,{
    x: "-100%",
    stagger: 0.2,
    autoAlpha: 0,
    duration:1.5,
    ease: "back.out(1.7)",
    scrollTrigger:{
      trigger:footerLinks
    }
  })

  gsap.from(footerIcons,{
    x:"100%",
    stagger: 0.2,
    autoAlpha: 0,
    duration:1.5,
    ease: "back.out(1.7)",
    scrollTrigger:{
      trigger:footerIcons
    }
  })

  gsap.from(".second-column p",{
    scrollTrigger:{
      trigger:".second-column p"
    },
    x:"100%",
    ease: "back.out(1.7)",
    autoAlpha: 0,
    duration:1.5,


  })
}

gsap.fromTo(".l1", 2.5, {height:0}, {height:"100%",ease: "power4.out"})
gsap.fromTo(".l2", 3, {width:0,}, {width:"100%",ease: "power4.out"})
gsap.fromTo(".l3", 3.5, {height:0}, {height:"100%",ease: "power4.out"})
gsap.fromTo(".l4", 4, {width:0}, {width:"100%",ease: "power4.out"})

}



