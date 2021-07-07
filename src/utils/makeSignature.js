import md5 from 'md5';

export const makeSignature = o => {
  return md5(JSON.stringify(o));
};
