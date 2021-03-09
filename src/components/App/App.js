import React, { Component } from 'react';
import './App.css';
import { getUrls, deleteUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
      .then(response =>
        this.setState({urls: response.urls})
      )
  }

  pushNewUrl = (urlObject) => {
    this.setState((prevState) => ({
      urls: [...prevState.urls, urlObject]
    }))
  }

  removeUrlFromDOM = (id) => {
    if (this.state.urls.length > 1) {
      deleteUrl(id)
      .then(
        this.setState((prevState) => ({
          urls: prevState.urls.filter(url => url.id !== id)
        }))
      )
    }
    
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1 className="site-title">URL Shortener</h1>
          <UrlForm pushNewUrl={this.pushNewUrl} />
        </header>

        <UrlContainer urls={this.state.urls} removeUrlFromDOM={this.removeUrlFromDOM} />
      </main>
    );
  }
}

export default App;
