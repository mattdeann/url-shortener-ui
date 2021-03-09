import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => {
  const urlEls = props.urls.map(url => {
    if (url) {
      return (
      <div key={url.id} className="url">
        <h3 className="url-title">{url.title}</h3>
        <a className="short-url" href={url.short_url} target="blank">{url.short_url}</a>
        <p className="long-url">{url.long_url}</p>
        <article 
          className="delete-button"
          onClick={() => props.removeUrlFromDOM(url.id)}
        >
          DELETE
        </article>
      </div>
    )
    } else {
      return null
    }
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
