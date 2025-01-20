export const POPUP_CONFIG = {
  rest: {
    transition: { type: "spring", mass: 0.5 },
    pointerEvents: "none",
    opacity: 0,
    scale: 0.4,
    x: -300,
    y: 0,
  },
  active: {
    transition: { type: "spring", mass: 1 },
    pointerEvents: "auto",
    opacity: 1,
    scale: 1,
    x: -400,
    y: 0,
  },
};

export const SPAN_CONFIG = {
  rest: { background: "inherit", color: "inherit" },
  active: { background: "#191919", color: "#ffff" },
};
