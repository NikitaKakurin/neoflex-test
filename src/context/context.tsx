import React, { useContext } from 'react';
import { IInBasket } from 'model/typescript';

interface IInBasketContext {
  inBasket: IInBasket;
  setInBasket: React.Dispatch<React.SetStateAction<IInBasket>>;
}
export const inBasketContext = React.createContext<IInBasketContext | undefined>(undefined);
export function useInBasketContext() {
  const context = useContext(inBasketContext);
  if (context === undefined) {
    throw Error(
      'RadioGroupItem must be used inside of a RadioGroup, ' +
        'otherwise it will not function correctly.'
    );
  }
  return context;
}
