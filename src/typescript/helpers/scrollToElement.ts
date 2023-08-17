/**
 * @function scrollToElement
 * @description Scrolls to a specific element.
 * @param { string } selector - Selector used to find the element.
 * @param { ScrollBehavior } [behavior='smooth'] - Scroll behavior.
 */

const scrollToElement = <Type extends HTMLElement>(
  selector: string,
  behavior: ScrollBehavior = 'smooth',
) => {
  const element = document.querySelector(selector) as Type;
  element.scrollIntoView({ behavior });
};

export default scrollToElement;
