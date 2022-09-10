import type { Milliseconds, Pixels } from '@streali/shared/types';

export const timeToPixel = (time: Milliseconds) => {
  return ((time / 10) * 2) as Pixels;
};

export const pixelToTime = (pixel: Pixels) => {
  return ((pixel / 2) * 10) as Milliseconds;
};
