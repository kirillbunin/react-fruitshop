import React, { Component } from 'react';
import './Shop.css';

import ShopItem from './ShopItem';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../../redux/actions/cart';

class Shop extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    let shopItems = [];
    this.props.api.items.map((item) => {
      shopItems.push(
        <ShopItem
          key={item.id}
          itemObject={item}
          addItem={this.props.actions.addToCart}
        ></ShopItem>
      )
    });
    return (
      <main className="pageShop">
        {shopItems}
      </main>
    )
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart,
        api: state.api
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(cartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
