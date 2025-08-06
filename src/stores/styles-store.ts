import { create } from 'zustand';

interface IAppStyles {
  styles: CSSStyleDeclaration;
}

export const useAppStyles = create<IAppStyles>(() => {
  const computedStyles = getComputedStyle(document.documentElement);

  return {
    styles: computedStyles,
  };
});
