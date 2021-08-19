import { gsap } from "gsap";

export const animateEntry = (element, delay) => {
  const from = { y: 150, opacity: 0, rotation: 13 };
  const to = {
    duration: 0.3,
    y: 0,
    opacity: 1,
    rotation: 0,
    ease: "circ.out",
  };
  const tl = gsap.timeline();
  return tl.fromTo(element, from, to, delay);
};
