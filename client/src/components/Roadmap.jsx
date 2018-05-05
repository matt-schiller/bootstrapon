import React, { Component } from 'react';
import bootstrap from '../utils/bootstrap';

import TopPanel from '../components/TopPanel';

class Roadmap extends Component {

  render() {

    return (
      <div>
        <TopPanel 
          lead="But wait, there's more..."
          title="Bootstrapon Product Roadmap"
          description="New features are on the way very soon"
          button={false}
          image="clown-flute"
        />
        <div className="container my-5">
          <ul className="list-group w-50 m-auto">
            <li className="list-group-item">Documentation URLs by selector</li>
            <li className="list-group-item">Ability to select categories from a list</li>
            <li className="list-group-item">Ability to customize colors, sizes, fonts, etc.</li>
            <li className="list-group-item">Integration with Bootswatch themes</li>
            <li className="list-group-item">Autoassembler that is based on finding in the DOM</li>
            <li className="list-group-item">API search by name and category</li>

          </ul>
        </div>
      </div>
    );
  }

}

export default Roadmap;
