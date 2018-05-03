import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/styles/hljs';
import axios from 'axios';

import Autosuggest from 'react-autosuggest';
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
    axios.get('/api/search/'+this.state.value+'?key=b7af2690-4e8b-11e8-9dd4-0d7e1cbc903c')
    .then((response) => {
      this.setState({
        results: response.data,
        leftCol: 'col-6'
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

    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Search by selector",
      value,
      onChange: this.onChange
    };

    const theme = {
      container: 'autosuggest',
      input: 'form-control',
      suggestionsContainer: 'dropdown',
      suggestionsList: `dropdown-menu ${suggestions.length ? 'show' : ''}`,
      suggestion: 'dropdown-item',
      suggestionFocused: 'active'
    };

    return (
      <div className="container mt-5">
        <div className="row">
          <div className={"text-center "+this.state.leftCol} style={{transition: '500ms ease'}}>
            <h2>Search</h2>
            <form onSubmit={this.onSearch} className="mx-auto" style={{maxWidth: '250px'}}>
              <Autosuggest suggestions={suggestions} getSuggestionValue={getSuggestionValue} renderSuggestion={renderSuggestion} inputProps={inputProps} onSuggestionSelected={this.onSuggestionSelected} theme={theme} renderInputComponent={renderInputComponent} />
            </form>
          </div>
          <div className="col" style={{opacity: this.state.rightColOpacity, transition: '1000ms ease'}}>
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={300}>
              {this.state.results.map((object, index) => {
                return (
                  <div>
                    <h4>{object.media.replace('none', 'All screen sizes')}</h4>
                    <SyntaxHighlighter language='css' style={tomorrowNight} customStyle={{borderRadius: '4px', padding: '15px'}} showLineNumbers={true}>{object.declarations.replace(/;/g,";\n")}</SyntaxHighlighter>
                  </div>
                )
              })}
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }

}

export default Search;
