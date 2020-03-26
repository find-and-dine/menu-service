/* eslint-disable react/prop-types */
import React from 'react';

function MenuPreviewItem({ menuItem }) {
  const { prices, menuItemName, description } = menuItem;
  return (
    <div className="menu-previewMenuItem">
      <div>
        <div className="menu-previewMenuItemName">
          {menuItemName}
        </div>
        <div className="menu-previewMenuItemDescription">
          {description}
        </div>
      </div>
      <div className="menu-previewMenuItemPrices">
        {prices.map((price) => (<div key={price + Math.random() * 10000}>{price}</div>))}
      </div>
    </div>
  );
}

export default MenuPreviewItem;
