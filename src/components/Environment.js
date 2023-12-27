import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import BaseURL from './BaseURL.js';
import Current from './Current';
import Hourly from './Hourly';
import Forecast from './Forecast';
import Moon from './Moon';

// const apihost = process.env.APIHOST;
// const apiport = process.env.APIPORT;

// const BaseURL = `http://${apihost}:${apiport}`;

const data = await (async () => {
    const response = await fetch(`${BaseURL}/environment`);
    if (response.ok) {
        const results = await response.json();
        const d = results
        return d;
    }
})();

export default function Environment() {

return (
    <Stack direction="horizontal" className="Environment">
        <Container className="Environment">
        <div className="row">
            <div className="col-xl-6">
                <Current aqi = {data.AQI} current= {data.Weather.current} time= {data.updateTime}/>
            </div>
            <div className="col-xl-6">
                <Moon moon = {data.Moon} date= {data.updateDate}/>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-6">
                <Hourly hourly = {data.Weather.hourly}/>
            </div>
            <div className="col-xl-6">
                <Forecast forecast = {data.Weather.forecast} />
            </div>
        </div>
        </Container>
    </Stack>
    );
}