import {randomInt} from './randomInt';

export const randomChoice = arr => {
  const length = arr.length;
  return arr[randomInt(length)];
};
