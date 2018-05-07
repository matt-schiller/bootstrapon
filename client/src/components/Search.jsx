import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/styles/hljs';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';

import TopPanel from '../components/TopPanel';

import { getSuggestions, getSuggestionValue, renderSuggestion, renderInputComponent } from '../utils/suggestionHelpers.js';

class Search extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '',
      suggestions: getSuggestions(''),
      results: [],
      leftCol: 'col-12',
      rightColOpacity: 0
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.onSearch = this.onSearch.bind(this);
  };

  onChange(event, { newValue, method }) {
    if (method === 'type') {
      this.setState({
        value: newValue,
        suggestions: getSuggestions(newValue)
      });
    } else {
      this.setState({
        value: newValue
      });
    }
  }

  onSuggestionSelected(event, { suggestionValue }) {
    this.setState({
      suggestions: getSuggestions(suggestionValue)
    });
  }

  onSearch(event) {
    event.preventDefault();
    axios.get('/api/search-gui/'+this.state.value+'?key=b7af2690-4e8b-11e8-9dd4-0d7e1cbc903c')
    .then((response) => {
      this.setState({
        results: response.data,
        leftCol: 'col-xs-12 col-md-6'
      });
      setTimeout( () => {
        this.setState({
          rightColOpacity: 1
        });
      }, 500);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {

    const customSyntaxStyle = {
      borderRadius: '4px',
      padding: '15px',
      backgroundColor: '#565b73'
    };

    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Search by selector",
      value,
      onChange: this.onChange
    };

    const theme = {
      container: 'autosuggest',
      input: 'form-control form-control-lg',
      suggestionsContainer: 'dropdown',
      suggestionsList: `dropdown-menu ${suggestions.length ? 'show' : ''}`,
      suggestion: 'dropdown-item',
      suggestionFocused: 'active'
    };

    return (
      <div>
        <TopPanel 
          lead="Find out what's really going on"
          title="Bootstrapon Search"
          description="Search for any selector and see the CSS"
          button={false}
          image="clown-type"
        />
        <div className="container my-5" style={{minHeight: "500px"}}>
          <div className="row">
            <div className={"text-center mb-5 "+this.state.leftCol} style={{transition: '500ms ease'}}>
              <h2>Search</h2>
              <form onSubmit={this.onSearch} className="mx-auto" style={{maxWidth: '250px'}}>
                <Autosuggest suggestions={suggestions} getSuggestionValue={getSuggestionValue} renderSuggestion={renderSuggestion} inputProps={inputProps} onSuggestionSelected={this.onSuggestionSelected} theme={theme} renderInputComponent={renderInputComponent} />
              </form>
            </div>
            <div className="col-xs-12 col-md-6" style={{opacity: this.state.rightColOpacity, transition: '1000ms ease'}}>
                {Object.keys(this.state.results).map( (key) => {
                  return (
                    <div>
                      <h4>{key==='' ? 'All screen sizes' : '@media '+key}</h4>
                      {this.state.results[key].map((object, index) => {
                        return (
                          <SyntaxHighlighter language='css' style={tomorrowNightBlue} customStyle={customSyntaxStyle} showLineNumbers={true}>
                            {`${object.selector} {\n  ${object.declarations.replace(/;/g,";\n  ").slice(0, -2)}}`}
                          </SyntaxHighlighter>
                        )
                      })}
                        
                    </div>
                  )
                })}

                {/* {this.state.results.map((object, index) => {
                  return (
                    <div>
                      <h4>{object.media==='' ? 'All screen sizes' : '@media '+object.media}</h4>
                      <SyntaxHighlighter language='css' style={tomorrowNightBlue} customStyle={customSyntaxStyle} showLineNumbers={true}>
                        {`${object.selector} {\n  ${object.declarations.replace(/;/g,";\n  ").slice(0, -2)}}`}
                      </SyntaxHighlighter>
                    </div>
                  )
                })} */}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Search;
