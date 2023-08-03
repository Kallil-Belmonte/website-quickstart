import selectAll from './selectAll';

/**
 * @function addClass
 * @description Adds a class to all elements.
 * @param { string } selector - Selector used to find the elements.
 * @param { string } className - Class to add to the elements.
 */

const addClass = (selector: string, className: string) =>
  selectAll(selector).forEach(element => element.classList.add(className));

export default addClass;
