const GET_HEADER = {
  method: 'GET',
  // credentials: 'include',
}
const POST_HEADER = {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  // credentials: 'include'
}
function handleErrors(response) {
  if (response.status === 200) {      
    return response.json();
  }
  throw Error(response.statusText);
}
export const Service = {
  getApiData: (url) => {
    let _url = process.env.REACT_APP_API_URL + url;
    return fetch(_url, GET_HEADER)
        .then(handleErrors)
        .catch(error => ({ success: false, error }));
  },
  postApiData: (url, payload) => {
      let _url = process.env.REACT_APP_API_URL + url;
      let options = { ...POST_HEADER };
      options.body = JSON.stringify(payload);
      return fetch(_url, options)
          .then(handleErrors)
          .catch(error => ({ success: false, error }));
  },
}