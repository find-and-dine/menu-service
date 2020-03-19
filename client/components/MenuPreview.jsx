/* eslint-disable react/prop-types */
import React from 'react';
import MenuPreviewItem from './MenuPreviewItem';

function MenuPreview({ section }) {
  const { sectionName } = section;
  const firstFourItems = section.menuItems.slice(0, 4);
  return (
    <div>
      <div className="previewSectionTitle">
        {sectionName.toUpperCase()}
      </div>
      <div className="previewFirstFourItems">
        {firstFourItems.map((item) => (
          <MenuPreviewItem
            menuItem={item}
            key={item.menuItemName}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuPreview;
