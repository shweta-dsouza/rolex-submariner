import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

export const animateWithScroll = (targetElement, animationProps, scrollProps) => {
  gsap.to(targetElement, {
    ...animationProps,
    scrollTrigger: {
      trigger: targetElement,
      toggleActions: 'restart reverse restart reverse',
      // start: 'top 85%',
      ...scrollProps,
    }
  })
}