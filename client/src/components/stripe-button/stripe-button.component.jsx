import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({ price }) =>
{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HPvkBJMk6e9xwE4driz6kiyIVryKCzMrS1ifyGDbDVoJP9T9HBOLE0qIgYYkmtISssFtdMuvwJ4CZnUvzdiPHIx00ulfNluA8';

    const onToken = token => {
      axios({ 
          url: 'payment',
          method: 'post',
          data : {
              amount : priceForStripe,
              token
          }
       }).then( response => { 
           alert('Payment succeful');
       }).catch( error => { 
           console.log('Payement error:', JSON.parse(error));
           alert('Thera was an issue with your payment ');
        });
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRW clothing Ltd"
            billingAddress
            shippingAddress
            image="http://svgshare.com/i/CUz.svg"
            description={`Your total is ${price}$`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}

        >
             
        </StripeCheckout>
    )
}

export default StripeCheckoutButton;