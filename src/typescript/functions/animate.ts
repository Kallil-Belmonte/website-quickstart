import { select, selectAll } from '@/typescript/helpers';

const { from } = Array;

/**
 * @function animate
 * @description Animates and element.
 * @param { string } selector - Selector used to find the element.
 * @param { string } animateClass - Animation class to add to the element.
 * @param { boolean } showOnLoad - If 'true', the animation class is added immediately and not when the element is visible on the page.
 */

const animate = (selector: string, animateClass: string, showOnLoad: boolean) => {
  const rect = select(selector).getBoundingClientRect();
  const isElementVisible = rect.top < window.innerHeight && rect.bottom >= 0;
  const elementWasNotAnimated = !from(select(selector).classList).includes(animateClass);

  if (showOnLoad || (isElementVisible && elementWasNotAnimated)) {
    selectAll(selector).forEach(element => {
      element.classList.add(animateClass);
    });
  }
};

export default animate;
