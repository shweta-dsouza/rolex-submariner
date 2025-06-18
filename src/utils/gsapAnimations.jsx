export const animateWithScroll = (targetElement, animationProps, scrollProps) => {
  const loadAndAnimate = async () => {
    const { default: gsap } = await import('gsap');
    const pluginModule = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(pluginModule.default);

    gsap.to(targetElement, {
      ...animationProps,
      scrollTrigger: {
        trigger: targetElement,
        toggleActions: 'restart reverse restart reverse',
        start: 'top 90%',
        ...scrollProps,
      }
    })
  }
  loadAndAnimate()
}