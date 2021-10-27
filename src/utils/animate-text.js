import { gsap } from "gsap";

// export const animateEntry = (element, delay) => {
//   const from = { y: 150, opacity: 0, rotation: 13 };
//   const to = {
//     duration: 0.3,
//     y: 0,
//     opacity: 1,
//     rotation: 0,
//     ease: "circ.out",
//   };
//   const tl = gsap.timeline();
//   return tl.fromTo(element, from, to, delay);
// };

export const animateEntry = (element, delay) => {
  const from = { y: 150 };
  const to = {
    duration: 0.3,
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: "power2",
  };
  const tl = gsap.timeline();
  return tl.fromTo(element, from, to, delay);
};

export const animateParagraph = (element, delay) => {
  const to = {
    duration: 1,
    y: -20,
    opacity: 1,
    stagger: 0.1,
    ease: "power4.out",
  };
  const tl = gsap.timeline();
  return tl.to(element, to, delay);
};


export const growAnimation = (element, delay) => {
  const from = {  opacity: 0, fontSize: "16px" };
  const to = {
    duration: 0.3,
    // y: 0,
    opacity: 1,
    fontSize: "40px"
  }
  const tl = gsap.timeline();
  return tl.fromTo(element, from, to, delay);
};
