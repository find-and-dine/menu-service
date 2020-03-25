import React from 'react';

// TODO: img src will need updated once using Docker
const Footer = () => (
  <div className="previewFooter">
    <img
      src="http://localhost:3002/api/resources/menuIcon"
      alt="issue with source"
      height="18px"
      width="auto"
    />
    <span className="previewFooterItem">
      Show full menu
    </span>
  </div>
);

export default Footer;
