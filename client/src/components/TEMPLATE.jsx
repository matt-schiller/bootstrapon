import React, { Component } from 'react';

class Register extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
    this.onChange = this.onChange.bind(this);
  };

  onChange(event) {
    this.setState({url: event.target.value});
  };

  render() {
    return (
      <div className="container mt-5">
        Hello world
      </div>
    );
  }

}

export default Register;
