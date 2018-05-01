import React, { Component } from 'react';
import axios from 'axios';

class Autocompile extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      url: 'http://www.google.com',
      tags: [],
      classes: [],
      css: '',
      spinner: 'd-none'
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  };

  onChange(event) {
    this.setState({url: event.target.value});
  };

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      spinner: ''
    });
    axios.post('/api/scrape/', {url: this.state.url})
    .then((response) => {
      console.log(response);
      this.setState({
        tags: response.data.tags,
        classes: response.data.classes,
        css: response.data.css,
        spinner: 'd-none'
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="w-25 mx-auto mt-5 text-center">
          <h2>Enter URL</h2>
          <form onSubmit={this.onSubmit}>
            <div className="input-group">
              <input className="form-control" value={this.state.url} onChange={this.onChange} />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit"><i className="fas fa-magic"></i></button>
              </div>
            </div>
          </form>
        </div>
        <div className={"text-center m-3 "+this.state.spinner}>
          <i className="fas fa-spinner fa-2x fa-spin"></i>
        </div>
        <h5>{this.state.tags.length} tags</h5>
        {this.state.tags.map((object, index) => {
          return (
            <div className="badge badge-primary mr-1">
              {object}
            </div>
          )
        })}
        <h5>{this.state.classes.length} classes</h5>
        {this.state.classes.map((object, index) => {
          return (
            <div className="badge badge-secondary mr-1">
              {object}
            </div>
          )
        })}
        <h5>{this.state.css.length} characters of CSS</h5>
        {this.state.css}
      </div>
    );
  }

}

export default Autocompile;