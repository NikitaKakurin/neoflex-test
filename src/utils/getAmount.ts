import { IInBasket } from 'model/typescript';

export const getAmount = (arr: IInBasket[]) => {
  let sum = 0;
  arr.forEach((a) => {
    sum += a.count;
  });
  return sum;
};
