import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
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
    console.log(urlObject)
    this.setState((prevState) => ({
      urls: [...prevState.urls, urlObject]
    }))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1 className="site-title">URL Shortener</h1>
          <UrlForm pushNewUrl={this.pushNewUrl} />
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
