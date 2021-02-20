import React , { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';

import { Switch ,  Route , Redirect } from 'react-router-dom';

import { HomePage } from './pages/homepage/homepage.component';
import  ShopPage  from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'; 
import {selectCurrentUser } from '../src/redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';



const App = ({ checkUserSession ,  currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession] );

    return (
      <div className="App">
          <Header  />
          <Switch>
              <Route  exact path='/'  component={HomePage} />  
              <Route  path='/shop'  component={ShopPage} />
              <Route  exact path='/checkout'  component={CheckoutPage} />  
              <Route  path='/signin'  render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>) } />  
          </Switch>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser
  
});

///first 
//const mapDispatchToProps = dispatch => ({
//  setCurrentUser : user => dispatch( setCurrentUser(user) )
//});

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch( checkUserSession() )
});



export default  connect( mapStateToProps , mapDispatchToProps  ) (App);
