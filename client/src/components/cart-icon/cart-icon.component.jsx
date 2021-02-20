import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.action';

import { ReactComponent as ShoppingIcon } from  '../../assets/shopping-bag.svg';

import { selectCartitemsCount } from '../../redux/cart/cart.selector';
  

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden , itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}> 
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch( toggleCartHidden())
  })

  const mapStateToProps = createStructuredSelector ({
    itemCount : selectCartitemsCount
});


export default connect(mapStateToProps , mapDispatchToProps) ( CartIcon ) ;


