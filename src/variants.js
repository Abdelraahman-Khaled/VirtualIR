export const fadeRight = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};
export const fadeRightIndex = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5 * index,
    },
  }),
};

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const normalFadeIn = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5 * index,
    },
  }),
};

export const fadedown = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5 * index,
    },
  }),
};
