/**
 * @function scrollToElement
 * @description Scrolls to a specific element.
 * @param { string } selector - Selector used to find the element.
 * @param { ScrollLogicalPosition } [block='start'] - Scroll position.
 */

const scrollToElement = <Type extends HTMLElement>(
  selector: string,
  block: ScrollLogicalPosition = 'start',
) => {
  const element = document.querySelector(selector) as Type;
  element.scrollIntoView({ block });
};

export default scrollToElement;
