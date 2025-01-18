import fs from 'fs';

let Config

// rassafrassing fs.readFileSync uses paths relative to project root?!?!?!
if (process.env.DEV === 1) {
    Config = JSON.parse(fs.readFileSync('./config/secrets.dev.json', 'utf-8'));
} else {
    Config = JSON.parse(fs.readFileSync('./config/secrets.json', 'utf-8'));
}

export default Config