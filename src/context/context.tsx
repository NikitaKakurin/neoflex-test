import React, { useContext } from 'react';
import { IInBasket } from 'model/typescript';

interface IBasketCountContext {
  basketCount: number;
  setBasketCount: React.Dispatch<React.SetStateAction<number>>;
}
export const basketCountContext = React.createContext<IBasketCountContext | undefined>(undefined);
export function useBasketCountContext() {
  const context = useContext(basketCountContext);
  if (context === undefined) {
    throw Error(
      'RadioGroupItem must be used inside of a RadioGroup, ' +
        'otherwise it will not function correctly.'
    );
  }
  return context;
}
