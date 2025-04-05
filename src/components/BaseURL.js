// This file is used to set the base URL for the API requests
let BaseURL = '';
if (process.env.REACT_APP_DEV === '1') {
  // If in development mode, use the localhost URL
  BaseURL = `http://rocket2/api`;
} else {
  // If in production mode, use the production URL
  BaseURL = `http://${window.location.hostname}/api`;
}
console.log(BaseURL);

export default BaseURL