import React from 'react';

function Header(props) {

  return (
    <header className={`header header_type_${props.name}`}>
      <div className="header__container">
        <a href="/" className="header__logo"></a>
        {props.children}
      </div>
    </header>
  )
}

export default Header;
