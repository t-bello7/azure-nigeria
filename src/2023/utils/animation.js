const easingOne = [0.6, -0.05, 0.01, 0.99];
const easingTwo = [0.6, 0.01, -0.05, 0.9];
const transition = {
  duration: 1.4,
  ease: easingTwo,
};

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.05,
      ease: easingOne,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easingOne,
    },
  },
};

const mobileLinks = {
  initial: {
    x: "30vw",
    transition: {
      duration: 0.5,
      ease: easingTwo,
    },
  },
  animate: {
    x: 0,
    transition: {
      ease: easingTwo,
      duration: 0.7,
    },
  },
};

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easingOne,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: easingOne,
    },
  },
};

const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easingOne,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {},
  },
};

export {
  stagger,
  fadeInUp,
  firstName,
  lastName,
  letter,
  btnGroup,
  header,
  mobileLinks,
};
