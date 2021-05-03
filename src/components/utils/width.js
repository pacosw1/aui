export const width = (sizeAsWord) => {
  switch (sizeAsWord) {
    case SizeKeys.Small:
      return "10rem";
    case SizeKeys.Medium:
      return "15rem";
    case SizeKeys.Large:
      return "20rem";
    case SizeKeys.ExtraLarge:
      return "25rem";
    default:
      return "10rem";
  }
};

const SizeKeys = {
  Small: "small",
  Medium: "medium",
  Large: "large",
  ExtraLarge: "extra-large",
};
