export default function Current({aqi, current, time}) {
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
                        {current['windGust'] > 0.0 ?
                            <td colSpan="2">Wind is {current.windSpeed.toFixed(1)} mph from the {current['windDir']}, gusts to {current.windGust.toFixed(1)} mph</td>
                        :
                            <td colSpan="2">Wind is {current.windSpeed.toFixed(1)} mph from the {current['windDir']}</td>
                        }
                    </tr>
                    <tr>
                        <td rowSpan="3"><i className={`owf owf-${current['wid']}-${current['dn']} ${iconsize}`}/></td>
                        <td>Temp: {current['temp'].toFixed(1)}&deg;F</td>
                    </tr>
                    <tr>
                        <td>Rel Humidity {current['humid']}%</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Feels like {current['fl'].toFixed(1)}&deg;F</td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{textAlign:'center'}}>AQI is '{aqi['aqi_adjective']}'</td>
                    </tr>
                    <tr>
                        <td  colSpan="2" style={{backgroundColor:`rgb${aqi.color}`,textAlign:'center'}}>AQI Score: {aqi['aqi_score']}</td>
                    </tr>
                    <tr>
                        {aqi['aqi_score'] > 50 ?
                            <td colSpan="2" style={{textAlign:'center'}}>The main pollutant is '{aqi['main_pollutant']}'</td>
                        :
                            <td colSpan="2" style={{textAlign:'center'}}>&nbsp;</td>
                        }
                    </tr>
                </tbody>
            </table>
        </>
    );
}