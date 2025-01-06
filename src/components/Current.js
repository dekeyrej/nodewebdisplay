export default function Current({aqi, current, time}) {
    const { windGust, windSpeed, windDir, wid, dn, temp, humid, fl } = current;
    const { aqi_adjective, aqi_score, color, main_pollutant } = aqi;
    const iconsize = 'owf-8x'

    return (
        <>
            <h3>Current:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <td colSpan="2"><b>Last Refresh: {time}</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {windGust > 0.0 ?
                            <td colSpan="2">Wind is {windSpeed.toFixed(1)} mph from the {windDir}, gusts to {windGust.toFixed(1)} mph</td>
                        :
                            <td colSpan="2">Wind is {windSpeed.toFixed(1)} mph from the {windDir}</td>
                        }
                    </tr>
                    <tr>
                        <td rowSpan="3"><i className={`owf owf-${wid}-${dn} ${iconsize}`}/></td>
                        <td>Temp: {temp.toFixed(1)}&deg;F</td>
                    </tr>
                    <tr>
                        <td>Rel Humidity {humid}%</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Feels like {fl.toFixed(1)}&deg;F</td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{textAlign:'center'}}>AQI is '{aqi_adjective}'</td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{backgroundColor:`rgb${color}`,textAlign:'center'}}>AQI Score: {aqi_score}</td>
                    </tr>
                    <tr>
                        {aqi_score > 50 ?
                            <td colSpan="2" style={{textAlign:'center'}}>The main pollutant is '{main_pollutant}'</td>
                        :
                            <td colSpan="2" style={{textAlign:'center'}}>&nbsp;</td>
                        }
                    </tr>
                </tbody>
            </table>
        </>
    );
}