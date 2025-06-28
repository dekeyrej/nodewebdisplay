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

  useEffect(() => {
    // 🟢 Initial data fetch
    fetchData('Environment').then((env) => {
      if (env && typeof env === 'object') {
        setData((prev) => ({
          ...prev,
          ...env,
        }));
      }
    });

    const evtSource = new EventSource(`${BaseURL}/stream/webdisplay`);

    evtSource.onmessage = async (event) => {
      try {
        const { app } = JSON.parse(event.data);

        if (app === 'Weather') {
            const fresh = await fetchData(app);  // This includes { updateTime, updateDate, Weather: {...} }

            if (fresh && typeof fresh === 'object' && fresh.Weather) {
                setData(prev => ({
                ...prev,
                Weather: fresh.Weather,  // 👈 Strip the wrapper
                updateTime: fresh.updateTime || prev.updateTime,
                updateDate: fresh.updateDate || prev.updateDate,
                }));
            } else {
                console.warn('⚠️ Unexpected shape in Weather update:', fresh);
            }
        } else if (app === 'AQI') {
            const fresh = await fetchData(app);  // This includes { updateTime, updateDate, Weather: {...} }

            if (fresh && typeof fresh === 'object' && fresh.AQI) {
                setData(prev => ({
                ...prev,
                AQI: fresh.AQI,  // 👈 Strip the wrapper
                updateTime: fresh.updateTime || prev.updateTime,
                updateDate: fresh.updateDate || prev.updateDate,
                }));
            } else {
                console.warn('⚠️ Unexpected shape in AQI update:', fresh);
            }
        } else if (app === 'Moon') {
            const fresh = await fetchData(app);  // This includes { updateTime, updateDate, Weather: {...} }

            if (fresh && typeof fresh === 'object' && fresh.Moon) {
                setData(prev => ({
                ...prev,
                Moon: fresh.Moon,  // 👈 Strip the wrapper
                updateTime: fresh.updateTime || prev.updateTime,
                updateDate: fresh.updateDate || prev.updateDate,
                }));
            } else {
                console.warn('⚠️ Unexpected shape in Moon update:', fresh);
            }
        }

        // if (['AQI', 'Moon', 'Weather'].includes(app)) {
        //   const fresh = await fetchData(app);

        //   if (fresh && typeof fresh === 'object' && Object.keys(fresh).length > 0) {
        //     setData((prev) => ({
        //       ...prev,
        //       [app]: fresh,
        //       updateTime: fresh.updateTime || prev.updateTime,
        //       updateDate: fresh.updateDate || prev.updateDate,
        //     }));
        //   } else {
        //     console.warn(`⚠️ Skipping malformed SSE update for ${app}:`, fresh);
        //   }
        // }
      } catch (error) {
        console.error('💥 SSE error:', error);
      }
    };

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