import * as React from 'react';
import { Link } from 'react-router-dom';
import { meQuery } from '../../graphql/queries/me';
import { Query } from 'react-apollo';
import { MeQuery } from '../../schemaTypes';

const Header: React.FunctionComponent<any> = (props) => {
  return (
    <div
      style={{
        height: 50,
        width: '100%',
        backgroundColor: '#fafafa',
        display: 'flex',
        justifyContent: 'space-around',
        padding: 10
      }}
    >
      <Link to="/">
        <h2>Stripe example</h2>
      </Link>
      <Query<MeQuery> query={meQuery}>
        {({ data, loading }) => {
          if (loading || !data) {
            return null;
          }

          if (!data.me) {
            return (
              <div>
                <div>
                  <Link to="/login">Login</Link>
                </div>
                <div>
                  <Link to="/register">Register</Link>
                </div>
              </div>
            );
          }
          return (
            <div>
              <Link to="/account">account</Link>
            </div>
          );

        }}
      </Query>
    </div>
  );
}

export default Header;