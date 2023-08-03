/**
 * @function select
 * @description Selects an element.
 * @param { string } selector - Selector used to find the element.
 */

const select = <Type = HTMLElement>(selector: string) => document.querySelector(selector) as Type;

export default select;
