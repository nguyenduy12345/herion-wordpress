import { scale } from "motion/react";

export const slideDown = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
export const slideUp = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
export const slideLeft = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};
export const slideRight = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};
export const scaleOut = {
  initial: {
    opacity: 0,
    scale: 0
  },
  animate: {
    opacity: 1,
    scale: 1
  },
};
export const scaleDown = {
  initial: {
    opacity: 0,
    scale: 1.2
  },
  animate: {
    opacity: 1,
    scale: 1
  },
};
export const showOut = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const aniItemByItem = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  },
};
