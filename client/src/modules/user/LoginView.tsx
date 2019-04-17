import React, { PureComponent } from 'react'
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { LoginMutation, LoginMutationVariables } from '../../schemaTypes';
import { RouteComponentProps } from 'react-router';

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password:String!) {
    login(email: $email, password: $password) {
      _id
      email
      createdAt
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
      <Mutation<LoginMutation, LoginMutationVariables> mutation={loginMutation}>
        {mutate => (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div>
              <input type="text" placeholder="email" name="email" value={email} onChange={this.handleChange} />
            </div>
            <div>
              <input type="password" placeholder="password" name="password" value={password} onChange={this.handleChange} />
            </div>
            <div>
              <button onClick={async () => {
                const response = await mutate({ variables: { email, password } })
                console.log(response);
                this.props.history.push('/me');
              }}>Login</button>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

