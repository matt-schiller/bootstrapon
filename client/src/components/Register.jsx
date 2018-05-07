import React, { Component } from 'react';
import axios from 'axios';

import TopPanel from '../components/TopPanel';

class Register extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      spinner: 'd-none',
      message: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      spinner: ''
    });
    axios.post('/api/user/create', this.state )
    .then((response) => {
      console.log(response);
      this.setState({
        firstname: '',
        lastname: '',
        email: '',
        spinner: 'd-none',
        message: response.data
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        spinner: 'd-none',
        message: error
      });
    });
  }

  render() {
    return (
      <div>
        <TopPanel 
          lead="Join the party"
          title="Register for an API key"
          description="It's totally free"
          button={false}
          image="clown-happy"
        />
        <div className="container my-5">
          <form className="mx-auto mt-5" style={{maxWidth: '400px'}} onSubmit={this.onSubmit}>
            <div className="row">
              <div className="form-group col">
                <label>First name</label>
                <input className="form-control form-control-lg form-control-custom" value={this.state.firstname} onChange={this.onChange} type="text" name="firstname" placeholder="Your first name" />
              </div>
              <div className="form-group col">
                <label>Last name</label>
                <input className="form-control form-control-lg form-control-custom" value={this.state.lastname} onChange={this.onChange} type="text" name="lastname" placeholder="Your last name" />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control form-control-lg form-control-custom" value={this.state.email} onChange={this.onChange} type="text" name="email" placeholder="Your email address" />
            </div>
            <div className="mt-4">
              <div class="g-recaptcha" data-sitekey="6LdDoFcUAAAAACJTDCyHeO3RfYXlFCKoJqWXfEiK"></div>
              <button className="btn btn-danger btn-lg mt-3" type="submit">Register for API key</button>
            </div>
            <div className={this.state.spinner}>
              <i className="fas fa-spinner fa-2x fa-spin"></i>
            </div>
            {this.state.message && <div className="alert alert-primary mt-3">{this.state.message}</div>}
          </form>
        </div>
      </div>
    );
  }

}

export default Register;
