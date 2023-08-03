import selectAll from './selectAll';

/**
 * @function removeClass
 * @description Removes a class from all elements.
 * @param { string } selector - Selector used to find the elements.
 * @param { string } className - Class to remove from the elements.
 */

const removeClass = (selector: string, className: string) =>
  selectAll(selector).forEach(element => element.classList.remove(className));

export default removeClass;
