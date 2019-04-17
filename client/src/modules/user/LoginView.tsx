import React, { PureComponent } from 'react'

export default class LoginView extends PureComponent {

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

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <input type="text" placeholder="email" name="email" value={email} onChange={this.handleChange} />
        <input type="password" placeholder="password" name="password" value={password} onChange={this.handleChange} />

      </form>
    )
  }
}
