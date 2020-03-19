/* eslint-disable react/prop-types */
import React from 'react';

const MenuNameButton = ({ menuName, selected, changeMenu }) => (
  <button
    type="button"
    className={menuName === selected
      ? 'menuNameButtonSelected'
      : 'menuNameButton'}
    onClick={() => { changeMenu(menuName); }}
  >
    {menuName}
  </button>
);

export default MenuNameButton;
