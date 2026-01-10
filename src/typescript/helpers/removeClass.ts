import selectAll from './selectAll';

/**
 * @function removeClass
 * @description Removes a class from all elements.
 * @param selector - Selector used to find the elements.
 * @param className - Class to remove from the elements.
 */

const removeClass = (selector: string, className: string) =>
  selectAll(selector).forEach(element => element.classList.remove(className));

export default removeClass;
