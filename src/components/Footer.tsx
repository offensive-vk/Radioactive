import React from 'react';

function Footer() {
    
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">&copy;{new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;