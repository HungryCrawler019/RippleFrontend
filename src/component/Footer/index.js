import React from "react";
import "./Footer.css"; // Make sure to create a Header.css file for styling

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <p>
        &copy; 2023 <span>XRP</span> Kuwait. All rights reserved.
      </p>
      <p>
        <small>
          Pubkey: nHUfxETNHsA9reyYCVYwNztEbifMg6U9YUdcgVvzMwGNpphKSSf6
        </small>
      </p>
    </footer>
  );
};

export default Footer;
