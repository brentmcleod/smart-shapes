export const shapes = {
  Arrow: {
    svg: {
      x: 0,
      y: 0,
      w: 212,
      h: 240
    },
    transform: { translate: 212 },
    atomicShape: {
      shape: "Arrow",
      x: 12,
      y: 100,
      shaftLength: 60,
      shaftWidth: 40,
      headLength: 40,
      headWidth: 70,
      scale: 2
    },
    icon: {
      x: 57,
      y: 0,
      w: 50,
      h: 50,
      scale: 1.5,
      iconImg: require("./icon.svg"),
      scaleIcon: 0.8,
      stemLength: 40,
      stemWidth: 1,
      background: "circle"
    },
    indicator: {
      x: 0,
      y: 118,
      indicator: require("./indicator.svg")
    },
    label: {
      x: 16,
      y: 175,
      textLength: 180
    }
  }
};
