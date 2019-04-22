import * as React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { CreateSubscriptionMutationVariables, CreateSubscriptionMutation } from '../../schemaTypes';
import { userFragment } from '../../graphql/fragements/UserFragment';


const createSubscriptionMutation = gql`
  mutation CreateSubscriptionMutation($source: String!, $ccLast4: String!) {
    createSubscripton(source: $source, ccLast4: $ccLast4) {
      ...UserInfo
    }
  }
  ${userFragment}
`;


export default class SubscrbeUser extends React.PureComponent {
  render() {
    return (
      <Mutation<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>
        mutation={createSubscriptionMutation}>
        {mutate => (
          <StripeCheckout
            token={async (token) => {
              const response = await mutate({ variables: { source: token.id, ccLast4: token.card.last4 } });
              console.log(response);
            }}
            stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE!}
          />

        )}
      </ Mutation>
    )
  }
}