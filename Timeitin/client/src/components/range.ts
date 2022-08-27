const range = (start: any, end: any) => {
  return Array(end - start + 1)
    .fill(null)
    .map((_, idx) => start + idx);
};

export default range;
