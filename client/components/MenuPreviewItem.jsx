/* eslint-disable react/prop-types */
import React from 'react';

function MenuPreviewItem({ menuItem }) {
  const { prices, menuItemName, description } = menuItem;
  return (
    <div className="previewMenuItem">
      <div>
        <div className="previewMenuItemName">
          {menuItemName}
        </div>
        <div className="previewMenuItemDescription">
          {description}
        </div>
      </div>
      <div className="previewMenuItemPrices">
        {prices.map((price) => (<div>{price}</div>))}
      </div>
    </div>
  );
}

export default MenuPreviewItem;
