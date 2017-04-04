import React, { Component } from 'react';
import './ShopItem.css';

class ShopItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      qty: 1,
      canDecrease: false,
      canIncrease: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputIncrease = this.handleInputIncrease.bind(this);
    this.handleInputDecrease = this.handleInputDecrease.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e, action) {
    const newValue = e.target.value;
    if (newValue > 0 && !isNaN(newValue) && newValue <= 9999) {
      this.setState({qty: e.target.value});
    } else if (newValue === ''){
      this.setState({qty: 1});
    }
  }
  handleInputIncrease(e) {
    if (this.state.qty < 9999) {
      const newValue = parseInt(this.state.qty, 10) + 1;
      this.setState({qty: newValue});
      this.handleButtonDisabledState(newValue);
    }
  }
  handleInputDecrease(e) {
    if (this.state.qty > 1) {
      const newValue = parseInt(this.state.qty, 10) - 1;
      this.setState({qty: newValue});
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
  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem({id: this.props.itemObject.id, qty: this.state.qty});
  }
  render() {
    return (
      <div className="pageShopItem">
        <div className="pageShopItem__imageWrap">
          <img src={this.props.itemObject.imgurl} alt="" className="pageShopItem__image"/>
          { this.props.itemObject.discount ? ( <div className="pageShopItem__discountBadge">3 for 2!</div> ) : false}
        </div>
        <div className="pageShopItem__info">
          <strong className="pageShopItem__title">{this.props.itemObject.title}</strong>
          <strong className="pageShopItem__price">{this.props.itemObject.price} $</strong>
        </div>
        <div className="pageShopItem__subinfo">
          <strong className="pageShopItem__title">{this.props.itemObject.weight}</strong>
          <strong className="pageShopItem__price">per piece</strong>
        </div>
        <div className="pageShopItem__controls">
          <button className="pageShopItem__qtyDecrease" onClick={this.handleInputDecrease} disabled={!this.state.canDecrease}>-</button>
          <input className="pageShopItem__qtyInput" type="number" value={this.state.qty} onChange={this.handleInputChange}/>
          <button className="pageShopItem__qtyIncrease" onClick={this.handleInputIncrease} disabled={!this.state.canIncrease}>+</button>
          <button className="pageShopItem__submit" onClick={this.handleSubmit}>Add to Cart</button>
        </div>
      </div>
    )
  }
}

export default ShopItem;
