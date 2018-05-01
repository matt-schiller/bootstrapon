import React from 'react';
import bootstrap from '../utils/bootstrap';
// import bootstrapSelectors from '../utils/bootstrapSelectors';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  if (escapedValue === '') { return []; }
  const regex = new RegExp('^' + escapedValue, 'i');
  // return bootstrap.filter(selector => regex.test(selector.selector)).slice(0, 10); // Max 10 suggestions
  return bootstrap.filter(selector => regex.test(selector.selector)).slice(0, 10); // Max 10 suggestions
}

function getSuggestionValue(suggestion) {
  return suggestion.selector;
}

function renderSuggestion(suggestion) {
  return (
    <a>{suggestion.selector}</a>
  );
}

const renderInputComponent = inputProps => (
  <div className="input-group mx-auto">
      <input {...inputProps} />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="submit"><i className="fas fa-search"></i></button>
      </div>
  </div>
);

export { escapeRegexCharacters, getSuggestions, getSuggestionValue, renderSuggestion, renderInputComponent };