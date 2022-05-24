export const color = {
  main:"#F8A09C"
};

const HTML_FONT_SIZE = 16;

export const pxToRem = (px: number): number => {
  return px / HTML_FONT_SIZE;
};

export const pageSize = "calc(100vh - 60px)"