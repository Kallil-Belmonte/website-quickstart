import { MEDIA_QUERIES } from '@/typescript/files/consts';
import selectors from '@/typescript/files/selectors';
import { addClass, removeClass, select } from '@/typescript/helpers';

/**
 * @function menu
 * @description Activates the menu.
 */

const menu = () => {
  const isMenuExpanded = () =>
    select(selectors.menu.button).getAttribute('aria-expanded') === 'true';
  const openMenu = () => {
    select(selectors.menu.button).setAttribute('aria-expanded', 'true');
    addClass(selectors.menu.navItems, 'open');
    addClass('body', 'overflow-hidden');
  };
  const closeMenu = () => {
    select(selectors.menu.button).setAttribute('aria-expanded', 'false');
    removeClass(selectors.menu.navItems, 'open');
    removeClass('body', 'overflow-hidden');
  };

  select(selectors.menu.button).addEventListener('click', () => {
    if (isMenuExpanded()) closeMenu();
    else openMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= MEDIA_QUERIES.md && isMenuExpanded()) closeMenu();
  });
};

export default menu;
