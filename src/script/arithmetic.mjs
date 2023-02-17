const add = (a, b) => {
  const valFromA = parseInt(a);
  const valFromB = parseInt(b);
  return valFromA + valFromB;
};

const substract = (a, b) => {
  return a - b;
};

export default {
  add,
  substract,
};
