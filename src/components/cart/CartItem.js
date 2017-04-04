import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      canDecrease: false,
      canIncrease: true,
      newQty: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputIncrease = this.handleInputIncrease.bind(this);
    this.handleInputDecrease = this.handleInputDecrease.bind(this);
  }
  handleInputChange(e, action) {
    const newValue = e.target.value;
    if (newValue > 0 && !isNaN(newValue) && newValue <= 9999) {
      this.props.changeQty({id: this.props.itemObject.id, qty: e.target.value});
    } else if (newValue === ''){
      this.props.changeQty({id: this.props.itemObject.id, qty: 1});
    }
  }
  handleInputIncrease(e) {
    if (this.props.qty < 9999) {
      const newValue = parseInt(this.props.qty, 10) + 1;
      this.props.changeQty({id: this.props.itemObject.id, qty: newValue});
      this.handleButtonDisabledState(newValue);
    }
  }
  handleInputDecrease(e) {
    if (this.props.qty > 1) {
      const newValue = parseInt(this.props.qty, 10) - 1;
      this.props.changeQty({id: this.props.itemObject.id, qty: newValue});
      this.handleButtonDisabledState(newValue);
    }
  }
  handleButtonDisabledState(newValue) {
    if (newValue === 1) {
      this.setState({canDecrease: false});
    } else if (newValue > 1) {
      this.setState({canDecrease: true});
    }
    if (newValue >= 9999) {
      this.setState({canIncrease: false});
    } else if (newValue < 9999) {
      this.setState({canIncrease: true});
    }
  }
  componentWillReceiveProps(nextProps){
    this.handleButtonDisabledState(nextProps.qty);
  }
  render() {
    let newQty;
    let totalSum;
    const discountSum = Math.round((this.props.qty * this.props.itemObject.price)*100)/100;
    if (this.props.itemObject.discount === "THREE_FOR_TWO") {
        newQty = (Math.floor(this.props.qty / 3) * 2) + (this.props.qty % 3);
        totalSum = Math.round((newQty * this.props.itemObject.price)*100)/100;
    } else {
      totalSum = Math.round((this.props.qty * this.props.itemObject.price)*100)/100;
    }
    return (
      <div className="pageCartItem">
        <div className="pageCartItem__leftWrap">
          <strong className="pageCartItem__title">{this.props.itemObject.title}</strong>
          <span className="pageCartItem__price">Price: {this.props.itemObject.price} $</span>
        </div>
        <div className="pageCartItem__qtyWrap">
          <button className="pageCartItem__qtyDecrease"  onClick={this.handleInputDecrease} disabled={!this.state.canDecrease}>-</button>
          <input className="pageCartItem__qtyInput" type="number" value={this.props.qty} onChange={this.handleInputChange} />
          <button className="pageCartItem__qtyIncrease"  onClick={this.handleInputIncrease} disabled={!this.state.canIncrease}>+</button>
        </div>
        <div className="pageCartItem__rightWrap">
          { this.props.itemObject.discount && totalSum < discountSum? ( <span className="pageCartItem__priceBefore">{discountSum} $</span> ) : (null) }
          <strong className="pageCartItem__totalPrice">{totalSum} $</strong>
        </div>
      </div>
    )
  }
}

export default CartItem;
