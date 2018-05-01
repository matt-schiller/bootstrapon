import React, { Component } from 'react';

class HomeColumn extends Component {

  render() {
      return (
        <div className="col">
          <div className="card border-0 h-100">
            <div className="card-body text-center">
              <span className="fa-stack fa-3x">
                <i className="fas fa-circle fa-stack-2x navy"></i>
                <i className={`${this.props.icon} fa-stack-1x text-white`}></i>
              </span>
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
              <a href={this.props.href} className="btn btn-danger">{this.props.buttonText}</a>
            </div>
          </div>
        </div>
      );
  }

}

export default HomeColumn;
