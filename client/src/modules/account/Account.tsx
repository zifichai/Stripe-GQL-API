import React, { PureComponent } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { MeQuery } from '../../schemaTypes';
import { Link, Redirect } from 'react-router-dom';
import SubscrbeUser from './SubscribeUser';
import { meQuery } from '../../graphql/queries/me';


export default class Account extends PureComponent {
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
            return <Redirect to="/login" />
          }
          if (data.me.typeOfUser === 'free-trail') {
            return <SubscrbeUser />
          }

          return <Redirect to="/paid-users" />;

        }}
      </Query>
    )
  }
}
