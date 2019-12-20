export const plotTransform = (transform, width, height, length) => {
  const values = [];
  switch (transform.type) {
    case "translate":
      transform.scalars
        .split(" ")
        .map(x =>
          x
            .split(",")
            .map((coord, index) =>
              index === 0 ? coord * width : coord * height
            )
        )
        .reduce(
          (prev, curr, index) =>
            (values[index] = curr.map((coord, index) => coord + prev[index])),
          [0, 0]
        );
      break;
    case "rotate":
      transform.scalars
        .split(" ")
        .map(coord => coord * (360 / length))
        .reduce((prev, curr, index) => (values[index] = prev + curr), 0);
      break;
    default:
    // no default
  }
  return { ...transform, values };
};

export const resizeArray = (arr, maxLength) => {
  return arr.length > maxLength ? (arr.length = maxLength) : arr;
};
