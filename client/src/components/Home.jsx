import React, { Component } from 'react';

import HomeColumn from '../components/HomeColumn';
import TopPanel from '../components/TopPanel';

class Home extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      imgLoaded: false
    };
  };



  render() {

    return (
      <div>
        <TopPanel 
          lead="Have a little more fun with Bootstrap"
          title="Welcome to Bootstrapon"
          description="The quirkiest set of tools for better understanding and using the latest Bootstrap (currently v4.1.0)"
          button={true}
          buttonText="Get a free API Key"
          buttonHref="/register"
          image="clown-violin"
        />
        <div>
          <div className="container text-center py-5">
            <p>Soon to be used by these great companies</p>
            <img className="w-100" style={{'-webkit-filter': 'grayscale(100%)', 'filter': 'grayscale(100%)'}} src="/images/logos.jpg" alt="Company logos" />
          </div>
        </div>
        <div className="bg-light py-5">
          <div className="container py-5">
            <h2>Come on in and take a look at our wares...</h2>
            <div className="row">
              <HomeColumn href="/search" title="Bootstrap Search" description="Quickly get raw CSS and information for any Bootstrap class" buttonText="Search now" icon="fas fa-search" />
              <HomeColumn href="/docs" title="Bootstrap API" description="Programatically retrieve info on Bootstrap elements by class name" buttonText="API Docs" icon="fas fa-code" />
              <HomeColumn href="/selector" title="Bootstrap Selector" description="Pick just the Bootstrap classes you need to make a file" buttonText="Select now" icon="fas fa-check-square" />
              <HomeColumn href="/autoassembler" title="Bootstrap Autoassembler" description="Analyze your code to generate a custom Bootstrap file" buttonText="Analyze Now" icon="fas fa-magic" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default Home;
