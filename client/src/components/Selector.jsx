import React, { Component } from 'react';

import TopPanel from '../components/TopPanel';

class Selector extends Component {
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
      <div>
        <TopPanel 
          lead="Select only what you need"
          title="Bootstrapon Selector"
          description="You choose the classes, we do the rest"
          button={false}
          image="clown-gun"
        />
        <div className="container mt-5">
          Hello world
        </div>
      </div>
    );
  }

}

export default Selector;
