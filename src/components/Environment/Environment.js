import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Current from './Current';
import Hourly from './Hourly';
import Forecast from './Forecast';
import Moon from './Moon';
import { fetchData, BaseURL } from '../../services/api';
import { useEffect, useState } from 'react';

export default function Environment() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData('Environment').then(setData);

        const evtSource = new EventSource(`${BaseURL}/stream/webdisplay`);
        evtSource.onmessage = (event) => {
            try {
            const { app } = JSON.parse(event.data);
            if (app === 'Environment') {
                fetchData('Environment').then(setData);
            }
            } catch (err) {
            console.error('SSE Event parse error:', err);
            }
        };

        return () => {
            evtSource.close();
        };
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

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