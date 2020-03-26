/* eslint-disable react/prop-types */
import React from 'react';
import MenuPreviewItem from './MenuPreviewItem';

function MenuSection({ section }) {
  const { sectionName, menuItems } = section;
  return (
    <div>
      <div className="menu-previewMenuItemName">
        {sectionName}
      </div>
      <div className="menu-previewFirstFourItems">
        {menuItems.map((menuItem) => (
          <MenuPreviewItem
            menuItem={menuItem}
            key={`${menuItem.description}!!`}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
