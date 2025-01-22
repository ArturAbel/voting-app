export const SETTINGS_CONFIG = {
  hidden: { opacity: 0, y: -10, transition: { type: "spring", mass: 1 } },
  visible: {
    opacity: 1,
    scale: 1,
    y: 5,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};
