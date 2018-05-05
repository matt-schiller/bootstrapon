import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/styles/hljs';

import TopPanel from '../components/TopPanel';

class Docs extends Component {

  render() {

    const customSyntaxStyle = {
      borderRadius: '4px',
      padding: '15px',
      backgroundColor: '#565b73'
    };

    const exampleResponse = `[
      {
          "media": "",
          "selector": ".container",
          "declarations": "width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;"
      },
      {
          "media": "(min-width: 576px)",
          "selector": ".container",
          "declarations": "max-width:540px;"
      },
      {
          "media": "(min-width: 768px)",
          "selector": ".container",
          "declarations": "max-width:720px;"
      },
      {
          "media": "(min-width: 992px)",
          "selector": ".container",
          "declarations": "max-width:960px;"
      },
      {
          "media": "(min-width: 1200px)",
          "selector": ".container",
          "declarations": "max-width:1140px;"
      },
      {
          "media": "print",
          "selector": ".container",
          "declarations": "min-width:992px !important;"
      }
  ]`;

    return (
      <div>
        <TopPanel 
          lead="Make Bootstrap programmatic"
          title="Bootstrapon API"
          description="Use our REST API to do cool stuff with Bootstrap"
          button={false}
          image="clown-nose"
        />
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              <h3>Introduction</h3>
              <p>The Bootstrapon API is a HTTP JSON API and allows you to programatically retreive information about Bootstrap elements.</p>
              <p>You can access the API directly via HTTP.</p>   
              <h4>HTTP verbs</h4>
              <p>Our API currently only makes use of a single HTTP verb, <span className="badge badge-success">GET</span>, for fetching resource(s).</p>
              <h4>Parameters</h4>
              <p>Parameters are defined in the URL of the request.</p>
              <h5>Route params</h5>
              <p>In this documentation, route params are prefixed with a colon (:).</p>
              <h5>Query string params</h5>
              <p>Some parameters are passed in via query string, e.g. API key.</p>
              <h5>Request body params</h5>
              <p>There is currently no use of request body params in the API.</p>
              <hr /> 
            </div>
            <div className="col-6">
              {/* <SyntaxHighlighter language='shell' style={tomorrowNightBlue} customStyle={customSyntaxStyle} showLineNumbers={true}></SyntaxHighlighter> */}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h3>Authentication</h3>
              <p>In order to access the API, you will need to provide an access key to authenticate with the API server. That key will be required for all API requests.</p>
              <p>You can <a href="/register">register</a> for a free API key.</p>
              <p>Once you have acquired an API key, it must be provided via the query string parameter 'key'.</p>
              <hr /> 
            </div>
            <div className="col-6">
              <h6 className="text-secondary text-uppercase">Example request</h6>
              <SyntaxHighlighter language='shell' style={tomorrowNightBlue} customStyle={customSyntaxStyle} showLineNumbers={true}>curl https://www.bootstrapon.co/api?key=b7af2690-4e8b-11e8-9dd4-0d7e1cbc903c</SyntaxHighlighter>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h3>Rule-sets</h3>
              <h4>Model</h4>
              <p>A rule-set is a single CSS selector and media query set, including tag selectors, class selectors, descendant combinator selectors, child combinator selectors, attribute selectors, and pseudo-class selectors. Where selectors are defined together in Bootstrap (comma-separated with same declarations) they are treated separately in the data model.</p>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>media</td>
                    <td>String</td>
                    <td>Any @media query applied to the rule-set (blank if no media query)</td>
                  </tr>
                  <tr>
                    <td>selector</td>
                    <td>String</td>
                    <td>The selector for the rule-set</td>
                  </tr>
                  <tr>
                    <td>declaration</td>
                    <td>String</td>
                    <td>All declarations for the rule-set, concatenated into a single string</td>
                  </tr>
                </tbody>
              </table>
              <h4>Get all rule-sets for a selector</h4>
              <h5>Request</h5>
              <p><span className="badge badge-success">GET</span> /api/search/:selector</p>
              <h5>Response</h5>
              <p>An array of rule-set objects</p>
              <hr />
            </div>
            <div className="col-6">
              <h6 className="text-secondary text-uppercase">Example request</h6>
              <SyntaxHighlighter language='shell' style={tomorrowNightBlue} customStyle={customSyntaxStyle} showLineNumbers={true}>curl https://www.bootstrapon.co/api/search/.container?key=b7af2690-4e8b-11e8-9dd4-0d7e1cbc903c</SyntaxHighlighter>
              <h6 className="text-secondary text-uppercase">Example response</h6>
              <SyntaxHighlighter language='json' style={tomorrowNightBlue} customStyle={customSyntaxStyle} showLineNumbers={true}>{exampleResponse}</SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Docs;


