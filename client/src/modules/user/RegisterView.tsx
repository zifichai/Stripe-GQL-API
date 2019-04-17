import React, { PureComponent } from 'react'
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { RegisterMutation, RegisterMutationVariables } from '../../schemaTypes';
import { RouteComponentProps } from 'react-router';

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password:String!) {
    register(email: $email, password: $password)
  }
`;

export default class RegisterView extends PureComponent<RouteComponentProps<{}>> {
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
      <Mutation<RegisterMutation, RegisterMutationVariables> mutation={registerMutation}>
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
                this.props.history.push('/login');
              }}>Login</button>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

