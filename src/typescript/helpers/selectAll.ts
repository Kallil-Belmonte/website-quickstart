/**
 * @function selectAll
 * @description Selects all elements.
 * @param { string } selector - Selector used to find the elements.
 */

const selectAll = <Type = HTMLElement>(selector: string) =>
  Array.from(document.querySelectorAll(selector)) as Type[];

export default selectAll;
