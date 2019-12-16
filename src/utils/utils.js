export const plotTranslate = (w, h, coords) => {
  const plotPoints = [];
  coords
    .split(" ")
    .map(x =>
      x.split(",").map((coord, index) => (index === 0 ? coord * w : coord * h))
    )
    .reduce(
      (prev, curr, index) =>
        (plotPoints[index] = curr.map((coord, index) => coord + prev[index])),
      [0, 0]
    );
  return plotPoints;
};

export const plotRotate = (deg, offset, coords) => {
  const rotations = [];
  coords
    .split(" ")
    .map((coord, index) => (index === 0 ? coord * deg + offset : coord * deg))
    .reduce((prev, curr, index) => (rotations[index] = prev + curr), 0);
  return rotations;
};
