import React, { PureComponent } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { MeQuery } from '../../schemaTypes';

const meQuery = gql`
  query MeQuery{
    me {
      _id
      email
    }
  }
`;

export default class MeView extends PureComponent {
  render() {
    return (
      <Query<MeQuery> query={meQuery}>
        {({ data, loading }) => {
          if (loading) {
            return null;
          }

          if (!data) {
            return <div>data is undefined</div>;
          }

          if (!data.me) {
            return <div>received no user</div>;
          }

          return <div>{data.me.email}</div>;
        }}
      </Query>
    )
  }
}
