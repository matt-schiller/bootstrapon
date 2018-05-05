import React, { Component } from 'react';
import bootstrap from '../utils/bootstrap';

import TopPanel from '../components/TopPanel';

class About extends Component {

  render() {

    return (
      <div>
        <TopPanel 
          lead="How's it put together?"
          title="About Bootstrapon"
          description="More about our tech stack"
          button={false}
          image="clown-point"
        />
        <div className="container my-5">
          <ul className="list-group w-50 m-auto">
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">PostgresSQL</li>
            <li className="list-group-item">Node modules: Express, Request, Sequelize, Cheerio</li>
            <li className="list-group-item">React.js</li>
            <li className="list-group-item">React modules: React TransitionGroup, React Autosuggest, React Syntax Highlighter, Axios</li>
            <li className="list-group-item">Bootstrap v4.1 and Google Fonts</li>
            <li className="list-group-item">Heroku (incl. Heroku Postgres)</li>

          </ul>
        </div>
      </div>
    );
  }

}

export default About;
