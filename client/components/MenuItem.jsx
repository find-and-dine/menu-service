/* eslint-disable react/prop-types */
import React from 'react';

function MenuItem({ menuItem }) {
  return (
    <div>
      {JSON.stringify(menuItem)}
    </div>
  );
}

export default MenuItem;
