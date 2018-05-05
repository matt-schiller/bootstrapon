import React, { Component } from 'react';
import axios from 'axios';

import TopPanel from '../components/TopPanel';

class Autoassembler extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      pages: [ '' ],
      srcTags: [],
      srcClasses: [],
      bsTags: [],
      bsClasses: [],
      otherTags: [],
      otherClasses: [],
      css: 'No CSS here yet',
      spinner: 'd-none'
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.pageChange = this.pageChange.bind(this);
  };


  pageChange = (idx) => (evt) => {
    const newPages = this.state.pages.map((page, sidx) => {
      if (idx !== sidx) return page;
      return evt.target.value;
    });
    this.setState({ pages: newPages });
  }

  addPage = (event) => {
    event.preventDefault();
    this.setState({
      pages: this.state.pages.concat([''])
    });
  }

  deletePage = (idx) => (event) => {
    event.preventDefault();
    this.setState({
      pages: this.state.pages.filter((s, sidx) => idx !== sidx)
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      spinner: ''
    });
    axios.post('/api/autocompile', {urls: this.state.pages})
    .then((response) => {
      this.setState({
        srcTags: response.data.srcTags,
        srcClasses: response.data.srcClasses,
        bsTags: response.data.bsTags,
        bsClasses: response.data.bsClasses,
        otherTags: response.data.otherTags,
        otherClasses: response.data.otherClasses,
        css: response.data.css,
        spinner: 'd-none'
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        spinner: 'd-none'
      });
    });
  }

  downloadCSSFile = () => {
    var element = document.createElement('a');
    var file = new Blob([this.state.css], {type: 'text/plain'});
    console.log('Downloading file of ' + file.size + ' bytes');
    element.href = URL.createObjectURL(file);
    element.download = 'bootstrapon.css';
    element.click();
  }

  render() {
    return (
      <div>
        <TopPanel 
          lead="Make your Bootstrap lighter"
          title="Bootstrapon Autoassembler"
          description="We'll make a custom Bootstrap file with only the selectors you're actually using"
          button={false}
          image="clown-guitar"
        />
        <div className="container my-5">
          <div className="w-50">
            <h2>Enter URLs</h2>
            <p>Include http:// or https://</p>
            <form onSubmit={this.onSubmit}>
              {this.state.pages.map((page, idx) => {
                return (
                  <div key={idx} className="input-group my-3">
                    <input className="form-control form-control-lg" value={page} placeholder={`Page ${idx+1}`} onChange={this.pageChange(idx)} />
                    {idx>0 &&
                    <div className="input-group-append">
                      <button className="btn btn-lg btn-outline-secondary" onClick={this.deletePage(idx)}><i className="fas fa-minus"></i></button>
                    </div>
                    }
                    {idx+1===this.state.pages.length &&
                    <div className="input-group-append">
                      <button className="btn btn-lg btn-outline-secondary" onClick={this.addPage}><i className="fas fa-plus"></i></button>
                    </div>
                    }
                    
                  </div>
                )
              })}
              <div className="d-flex align-items-center">
                <button className="btn btn-lg btn-danger" type="submit">Submit</button>
                <div className={"ml-3 "+this.state.spinner}>
                  <i className="fas fa-spinner fa-2x fa-spin"></i>
                </div>
              </div>
            </form>
          </div>
          
        </div>
          
        {this.state.srcTags.length > 0 &&
        <div className="bg-light py-5">
          <div className="container">
            <h2>We've generated your custom Bootstrap CSS</h2>
            <button className="btn btn-lg btn-danger" onClick={this.downloadCSSFile}><i className="fas fa-code"></i> Download bootstrapon.css</button>

            <h3 className="mt-5">Here's what's inside</h3>
            <div className="row mt-4">

              <div className="col-2 text-justify">
                <h5>{this.state.bsTags.length} Bootstrap tags</h5>
                {this.state.bsTags.map((object, index) => {
                  return (
                    <span><span key={object} className="badge badge-primary mr-1">
                      {object}
                    </span>&nbsp;</span>
                  )
                })}
              </div>

              <div className="col-10 text-justify">
                <h5>{this.state.bsClasses.length} Bootstrap classes</h5>
                {this.state.bsClasses.map((object, index) => {
                  return (
                    <span><span key={object} className="badge badge-primary mr-1">
                      {object}
                    </span>&nbsp;</span>
                  )
                })}
              </div>

            </div>

            <h3 className="mt-5">Here's what else we found</h3>
            <div className="row mt-4">

              <div className="col-2 text-justify">
                <h5>{this.state.otherTags.length} other tags</h5>
                {this.state.otherTags.map((object, index) => {
                  return (
                    <span><span key={object} className="badge badge-primary mr-1">
                      {object}
                    </span>&nbsp;</span>
                  )
                })}
              </div>

              <div className="col-10 text-justify">
                <h5>{this.state.otherClasses.length} other classes</h5>
                {this.state.otherClasses.map((object, index) => {
                  return (
                    <span><span key={object} className="badge badge-primary mr-1">
                      {object}
                    </span>&nbsp;</span>
                  )
                })}
              </div>
            </div>

          </div>

        </div>
        }
          
      </div>
    );
  }

}

export default Autoassembler;