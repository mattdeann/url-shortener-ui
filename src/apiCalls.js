export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrl = (title, longUrl) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      long_url: longUrl, 
      title: title
    })
  };

  return fetch("http://localhost:3001/api/v1/urls", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

export const deleteUrl = id => {
  const requestOptions = {
    method: 'DELETE'
  };

  return fetch(`http://localhost:3001/api/v1/urls/${id}`, requestOptions)
    .then(response => response)
    .then(response => response)
    .catch(error => console.log('error', error));
}