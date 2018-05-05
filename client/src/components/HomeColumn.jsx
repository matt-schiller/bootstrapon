import React, { Component } from 'react';

class HomeColumn extends Component {

  render() {
    return (
      <div className="col-6 col-md-3 mb-4">
        <div className="card-body">
          <span className="fa-stack fa-3x mb-3">
            <i className="fas fa-circle fa-stack-2x navy" style={{filter: "drop-shadow(0 .5rem 1rem rgba(0,0,0,.15))"}}></i>
            <i className={`${this.props.icon} fa-stack-1x text-white`}></i>
          </span>
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <a href={this.props.href} className="btn btn-danger">{this.props.buttonText}</a>
        </div>
      </div>
    );
  }

}

export default HomeColumn;
