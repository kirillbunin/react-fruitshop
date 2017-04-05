import React, { Component } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import './Cart.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../../redux/actions/cart';

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    let cartItems = [];
    let totalInCart = 0;
    this.props.cart.map((item) => {
      cartItems.push(
        <CartItem
          key={item.id}
          itemObject={this.props.api.items.find(x => x.id === item.id)}
          changeQty={this.props.actions.changeQtyInCart}
          qty={item.qty}
        ></CartItem>
      )
      totalInCart += item.qty;
    });
    if (cartItems.length > 0) {
      return (
        <aside className="pageCart">
          <div className="pageCart__header">
          <h2 className="pageCart__heading">Checkout</h2>
          <span className="pageCart__totalItem">{totalInCart} { totalInCart === 1 ? 'item' : 'items'} total</span>
          </div>
          <div className="pageCartGroup">
          {cartItems}
          </div>
          <CartTotal cartArray={this.props.cart} apiObject={this.props.api}></CartTotal>
          <button className="pageCart__submit">Checkout Now</button>
          <p className="pageCart__copy">By checking out you agree<br /> with <a href="#">Terms of Service</a></p>
        </aside>
      )
    } else {
      return (
        <aside className="pageCart">
          <div className="pageCart__empty">
            Please add items to your cart.
          </div>
        </aside>
      )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
