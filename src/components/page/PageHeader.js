import React, { Component } from 'react';
import './PageHeader.css';

class PageHeader extends Component {
  render() {
    return (
      <header className="pageHeader">
        <img src="/images/background-header.png" className="pageHeader__backgroundImage" alt=""/>
        <div className="page__inside">
          <h1 className="pageHeader__logo">FruitShop</h1>
        </div>
      </header>
    )
  }
}

export default PageHeader;
