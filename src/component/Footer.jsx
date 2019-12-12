import React from "react";

let year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright reserved {year}</p>
    </footer>
  );
}

export default Footer;
