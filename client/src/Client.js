/* eslint-disable no-undef */
function photoSet(query, cb) {
	return fetch(`/api/gallery?per_page=${query.per_page}&page=${query.page}`, {
		accept: 'application/json',
	}).then(checkStatus)
		.then(parseJSON)
		.then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = { photoSet };
export default Client;