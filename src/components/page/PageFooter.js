import React, { Component } from 'react';
import './PageFooter.css';

class PageFooter extends Component {
  render() {
    return (
      <footer className="pageFooter">
        <div className="page__inside">
          Copyright &copy; 2017, FruitShop | <a href="#">Conditions of Use</a> | <a href="#">Privacy Notice</a>
        </div>
      </footer>
    )
  }
}

export default PageFooter;
