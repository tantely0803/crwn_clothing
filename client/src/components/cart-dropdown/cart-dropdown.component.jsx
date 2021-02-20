import React from 'react';
import { connect  } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-buttom/custom-buttom.component';
import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { selectCartHidden }  from '../../redux/cart/cart.action';




const CartDropDown = ({ cartItems , history }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length? (
            cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem} ></CartItem> ))
             : 
            (<span className="empty-message" >Votre basket est vide</span>)
        }
        </div>
        <CustomButton onClick={() => history.push('/checkout') }>GO TO CHECKOUT</CustomButton>
    </div>
);

//beginnning
//const mapStateToProps = ( state) => ({
//    cartItems :  state.cart.cartItems
//});

//fisrt 
//const mapStateToProps = ({ cart: { cartItems } }) => ({
//    cartItems :  selectCartItems
//});

//second in selector  
//const mapStateToProps = state => ({
//    cartItems :  selectCartItems(state)
//});

const mapStateToProps = createStructuredSelector ({
    cartItems :  selectCartItems
});

// available use history after wrap withRouter 
export default withRouter ( connect(  mapStateToProps ) (CartDropDown));

