import Config from './Config.js';

const BaseURL = `http://${Config.api_host}:${Config.api_port}`;
console.log(BaseURL);

export default BaseURL