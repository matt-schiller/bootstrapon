import React, { Component } from 'react';
import bootstrap from '../utils/bootstrap';

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

    const firsts = [ 0, 600, 1200, 1800 ];
    const lasts = [ 599, 1199, 1799, 2399 ]

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
          <h2>Coming soon!</h2>
          {/* <div className="row">
            {bootstrap.map((rule, index) => {
              return (
                <div>
                  {firsts.includes(index) && <div className="col">}
                  <div className="form-check" key={rule.selector}>
                    <input type="checkbox" className="form-check-input" id={rule.selector} />
                    <label className="form-check-label">{rule.selector}</label>
                  </div>
                  {lasts.includes(index) && </ div>}
                </div>
              )
            })}
          </div> */}
        </div>
      </div>
    );
  }

}

export default Selector;
