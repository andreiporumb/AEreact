import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
  };

  render() {
    window.performance.mark('ChartMountStart');
    return (
      <StripeCheckout
        stripeKey="pk_test_UGHLc1lLHKxICr6V35xGDcn300VOesSocs"
        token={this.onToken}
      />
    )
  }
componentDidMount() {
    window.performance.mark('ChartMountEnd');
  }


}
