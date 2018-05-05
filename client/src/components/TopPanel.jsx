import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class TopPanel extends Component {

  render() {
    return (
      <div className="bg-light">
        <div className="container">
          <div className="d-flex align-items-center row">
            <div className="col-12 col-md-7 py-5">
              <p className="text-danger text-uppercase" style={{letterSpacing: "1.2px"}}>{this.props.lead}</p>
              <h1 className="font-weight-light">{this.props.title}</h1>
              <p className="lead">{this.props.description}</p>
              {this.props.button &&
                <a className="btn btn-lg btn-danger py-3 px-5 shadow font-weight-light" href={this.props.buttonHref}>{this.props.buttonText}</a>
              }
            </div>
            <div className="col-12 col-md-5 align-self-end">
              <CSSTransitionGroup transitionName="image" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>
                <img className="w-75 mt-5" src={`/images/${this.props.image}.png`} alt="Bootstrapon Guy" />
              </CSSTransitionGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default TopPanel;
