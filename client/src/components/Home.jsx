import React, { Component } from 'react';
import HomeColumn from '../components/HomeColumn';

class Home extends Component {

  render() {
      return (
        <div>
          <div className="bg-light">
            <div className="container">
              <div className="d-flex align-items-center row">
                <div className="col-7 py-5">
                  <p className="lead text-danger text-uppercase">Strap on your Bootstrap</p>
                  <h1 className="font-weight-light">Welcome to Bootstrapon</h1>
                  <p className="lead">A complete set of tools for better understanding and using the latest Bootstrap (currently v4.1.0)</p>
                  <button className="btn btn-lg btn-danger py-3 px-4 shadow">Get a free API key</button>
                </div>
                <div className="col-5 align-self-end">
                  <img className="w-75 mt-5" src="/images/clown-developer.png" alt="Boostrapon Guy" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container text-center my-5">
              <p>Soon to be used by these great companies</p>
              <img className="w-75" src="/images/logos.jpg" alt="Company logos" />
            </div>
          </div>
          <div className="bg-light">
            <div className="container">
              <div className="row py-5">
                <HomeColumn href="/search" title="Bootstrap Search" description="Quickly get raw CSS and information for any Bootstrap class" buttonText="Search now" icon="fas fa-search" />
                <HomeColumn href="/docs" title="Bootstrap API" description="Programatically retrieve info on Bootstrap elements by class name" buttonText="API Docs" icon="fas fa-code" />
                <HomeColumn href="/selector" title="Bootstrap Selector" description="Pick just the Bootstrap classes you need to make a file" buttonText="Select now" icon="fas fa-check-square" />
                <HomeColumn href="/autocompile" title="Bootstrap Autocompile" description="Analyze your code to generate a custom Bootstrap file" buttonText="Analyze Now" icon="fas fa-magic" />
              </div>
            </div>
          </div>
        </div>
      );
  }
  
}

export default Home;
