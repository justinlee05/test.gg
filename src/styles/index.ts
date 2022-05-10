export const color = {};

const HTML_FONT_SIZE = 16;

export const pxToRem = (px: number): number => {
  return px / HTML_FONT_SIZE;
};
