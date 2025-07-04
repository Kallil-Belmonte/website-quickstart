import { selectAll } from '@/typescript/helpers';

/**
 * @function setCurrentYear
 * @description Sets the current year in the element.
 */

const setCurrentYear = () => {
  selectAll('footer .current-year').forEach(element => {
    element.textContent = `${new Date().getFullYear()}`;
  });
};

export default setCurrentYear;
