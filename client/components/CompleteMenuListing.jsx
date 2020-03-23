/* eslint-disable react/prop-types */
import React from 'react';
import MenuSection from './MenuSection';

function CompleteMenuListing({ menu }) {
  const { sections } = menu;
  return (
    <div>
      {sections.map((section) => (
        <MenuSection
          section={section}
          key={section + Math.random() * 1000}
        />
      ))}
    </div>
  );
}

export default CompleteMenuListing;
