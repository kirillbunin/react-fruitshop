import React, { Component } from 'react';
import PageHeader from '../components/page/PageHeader';
import PageFooter from '../components/page/PageFooter';
import Shop from '../components/shop/Shop';
import Cart from '../components/cart/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="pageWrap">
        <div className="page__footerPush">
          <PageHeader></PageHeader>
          <div className="page__inside">
            <div className="page__flexWrap">
              <Shop></Shop>
              <Cart></Cart>
            </div>
          </div>
        </div>
        <PageFooter></PageFooter>
      </div>
    );
  }
}

export default App;
