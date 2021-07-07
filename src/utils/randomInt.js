const UPPER_LIMIT = Math.pow(10, 9);
export const randomInt = (upper = UPPER_LIMIT, lower = 0) => {
  return Math.floor(Math.random() * (upper - lower)) + lower;
};
