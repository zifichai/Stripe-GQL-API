import React, { PureComponent } from 'react'
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { LoginMutation, LoginMutationVariables } from '../../schemaTypes';
import { RouteComponentProps } from 'react-router';
import { meQuery } from '../../graphql/queries/me';

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password:String!) {
    login(email: $email, password: $password) {
      _id
      email
      createdAt
      typeOfUser
    }
  }
`;

export default class LoginView extends PureComponent<RouteComponentProps<{}>> {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e: any) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  onSubmit = (e: any) => {
    e.preventDefault();
    console.log('submitted')
  }

  render() {
    const { email, password } = this.state;
    return (
      <Mutation<LoginMutation, LoginMutationVariables>
        update={(cache, { data }) => {

          if (!data || !data.login) return;

          cache.writeQuery({
            query: meQuery,
            data: { me: data.login },
          });
        }}

        mutation={loginMutation}>
        {(mutate, { client }) => (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div>
              <input type="text" placeholder="email" name="email" value={email} onChange={this.handleChange} />
            </div>
            <div>
              <input type="password" placeholder="password" name="password" value={password} onChange={this.handleChange} />
            </div>
            <div>
              <button onClick={async () => {
                //Remove any old data in cache before user logs in 
                await client.resetStore();


                const response = await mutate({ variables: { email, password } })
                console.log(response);
                this.props.history.push('/account');
              }}>Login</button>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

