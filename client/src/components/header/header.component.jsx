import React from 'react';
import { Link  } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo }  from '../../assets/crown.svg';

import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

import { signOutStart } from '../../redux/user/user.action';

import './header.styles.scss';

const Header = ({ currentUser , hidden , signOutStart }) =>
(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo">

            </Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {

                   currentUser ? 
                   <div className="option" onClick={signOutStart}>SIGN OUT</div>
                   :
                   <Link className="option" to="/signin">
                        SIGN IN
                   </Link> 
            }
            <CartIcon />
        </div>
        {
              hidden ? null : 
              <CartDropDown> </CartDropDown>
        }
        
    </div>
)

//first
//const mapStateToProps = state  ({ 
//    currentUser : selectCurrentUser
//})


//passage par state s'il n'y n'as pas de selector 
const mapStateToProps = createStructuredSelector  ({ 
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart : () => dispatch( signOutStart() )
  });

export default connect(mapStateToProps , mapDispatchToProps ) ( Header )  ;