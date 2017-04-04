import React, { Component } from 'react';
import './CartTotal.css';

class CartTotal extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: {
        sum: 0,
        discount: 0
      }
    }
  }
  componentWillReceiveProps(){
    this.setState({total: {sum: 0}});
    let totalSum = 0;
    let totalDiscount = 0;
    for (const item in this.props.cartArray){
      let itemPrice;
      let newQty = 0;
      this.props.apiObject.items.find(
        (x) => {
          if (x.id === this.props.cartArray[item].id) {
            itemPrice = x.price;
            if (x.discount === "THREE_FOR_TWO") {
              newQty = (Math.floor(this.props.cartArray[item].qty / 3) * 2) + (this.props.cartArray[item].qty % 3);
            }
          }
        }
      );
      if (newQty) {
        totalSum += (itemPrice * newQty);
        totalDiscount += (itemPrice * this.props.cartArray[item].qty) - totalSum;
      } else {
        totalSum += (itemPrice * this.props.cartArray[item].qty);
      }
    }
    this.setState({total: {sum: Math.round(totalSum * 100) / 100, discount: Math.round( totalDiscount * 100) / 100}});
  }
  render() {
    return (
      <table className="pageCart__totalSumWrap">
        <tbody>
          <tr>
            <td>Before discount</td>
            <td>{this.state.total.sum + this.state.total.discount} $</td>
          </tr>
          <tr>
            <td>Total Discount</td>
            <td>{this.state.total.discount} $</td>
          </tr>
          <tr className="pageCart__totalSum">
            <td>Total</td>
            <td>{this.state.total.sum} $</td>
          </tr>
        </tbody>
      </table>
    )
  }
};

export default CartTotal;
