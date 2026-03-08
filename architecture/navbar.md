# Navbar Architecture

## Goal
A floating, responsive navigation bar that morphs from transparent to a frosted pill shape upon scrolling past the hero.

## Interaction Logic (GSAP/React)
- **Watch**: The `#hero` section via IntersectionObserver or ScrollTrigger.
- **State**: `isScrolled` boolean.
- **True**: apply `bg-background/60 backdrop-blur-xl border-accent` 
- **False**: apply `bg-transparent border-transparent text-primary`

## Responsive
- Mobile: Hamburger menu opening a full-screen overlay with staggered GSAP link reveals.
