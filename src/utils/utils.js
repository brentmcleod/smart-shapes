export const plotTransform = (transform, width, height, length, margin) => {
  const values = [];
  switch (transform.type) {
    case "translate":
      transform.scalars
        .split(" ")
        .map(x =>
          x
            .split(",")
            .map((coord, index) =>
              index === 0 ? coord * (width + margin) : coord * (height + margin)
            )
        )
        .reduce(
          (prev, curr, index) =>
            (values[index] = curr.map((coord, index) => coord + prev[index])),
          [0, 0]
        );
      break;
    case "rotate":
      const degrees = transform.total_degrees / length;
      transform.scalars
        .split(" ")
        .map(
          (coord, index) =>
            (index === 0 && transform.offset > 0
              ? transform.offset -
                Math.floor(length / 2) * degrees +
                (length % 2 === 0 ? degrees / 2 : 0)
              : 0) +
            coord * degrees
        )
        .reduce((prev, curr, index) => (values[index] = prev + curr), 0);
      break;
    default:
    // no default
  }
  return { ...transform, values };
};
