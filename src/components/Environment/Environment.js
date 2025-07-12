import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Current from './Current';
import Hourly from './Hourly';
import Forecast from './Forecast';
import Moon from './Moon';
import { fetchData, BaseURL } from '../../services/api';
import { useEffect, useState } from 'react';

export default function Environment() {
  const [data, setData] = useState({
    AQI: null,
    Moon: null,
    Weather: null,
    updateTime: null,
    updateDate: null,
  });

  const extractLatestUpdate = (env) => {
    const times = [
      env?.AQI?.updated,
      env?.Moon?.updated,
      env?.Weather?.updated,
    ].filter(Boolean);

    // Sort descending
    times.sort((a, b) => new Date(b) - new Date(a));

    const latest = times[0];
    const [updateDate, updateTime] = latest?.split(' ') ?? [];

    return { updateTime, updateDate };
  };


  useEffect(() => {
    // 🟢 Initial data fetch
    fetchData('Environment').then((env) => {
      if (env && typeof env === 'object') {
        const { updateTime, updateDate } = extractLatestUpdate(env);

      setData((prev) => ({
        ...prev,
        AQI: env.AQI.values || null,
        Moon: env.Moon.values || null,
        Weather: env.Weather.values || null,
        updateTime,
        updateDate,
          }));
        }
    });

    // console.log('EventSource URL:', `${BaseURL}/events`);
    const evtSource = new EventSource(`${BaseURL}/events`);

    const handleUpdate = async (type, incoming) => {
      const updated = incoming.updated ?? '';
      const [updateDate, updateTime] = updated.split(' -')[0]?.split(' ') ?? [];

      setData((prev) => ({
        ...prev,
        [type]: incoming.values,  // direct assignment since shape matches `data[type]`
        updateTime: updateTime || prev.updateTime,
        updateDate: updateDate || prev.updateDate,
      }));
    };
    // 🟢 SSE event listener
    evtSource.addEventListener('update', (event) => {
      try {
        const payload = JSON.parse(event.data);
        
        if (['AQI', 'Moon', 'Weather'].includes(payload.type)) {
          console.log('SSE payload:', payload);
          handleUpdate(payload.type, payload);
        }
      } catch (error) {
        console.error('💥 SSE error:', error);
      }
    });


    return () => evtSource.close();
  }, []);

//   console.log('🧪 Rendered Weather state:', data.Weather);

  // 🧱 Early render guard until data is present
  if (!data.AQI || !data.Weather || !data.Moon) {
    return <div>Loading environment data...</div>;
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
                <Hourly hourly = {data.Weather.hourly.slice(0, 5)}/>
            </div>
            <div className="col-xl-6">
                <Forecast forecast = {data.Weather.forecast.slice(0, 5)} />
            </div>
        </div>
        </Container>
    </Stack>
    );
}