import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const heroHeadline = document.querySelector('[data-animate="headline"]');
  const heroBadge = document.querySelector('[data-animate="badge"]');
  const heroAvatar = document.querySelector('[data-animate="avatar"]');

  if (heroHeadline) {
    gsap.fromTo(
      heroHeadline.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out'
      }
    );
  }

  if (heroBadge) {
    gsap.fromTo(
      heroBadge,
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.5
      }
    );
  }

  if (heroAvatar) {
    gsap.fromTo(
      heroAvatar,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
      }
    );
  }

  document.querySelectorAll('[data-animate="fade-up"]').forEach((element) => {
    gsap.from(element, {
      y: 60,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%'
      }
    });
  });

  document.querySelectorAll('[data-animate="scale-in"]').forEach((element) => {
    gsap.from(element, {
      scale: 0.85,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%'
      }
    });
  });
}
