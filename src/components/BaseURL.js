import fs from 'fs';

const Config = JSON.parse(fs.readFileSync('./config/config.json', 'utf-8'));
const BaseURL = `http://${Config.api_host}:${Config.api_port}`;
// console.log(BaseURL);

export default BaseURL;