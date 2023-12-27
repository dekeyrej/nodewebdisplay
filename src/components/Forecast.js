export default function Forecast({forecast}) {
    const iconsize = 'owf-2x'

    function days() {
        const days = forecast.map(day =>
            <tr>
                <td>{day.dow}</td>
                <td><i className={`owf owf-${day['wid']}-${day['dn']} ${iconsize}`}/></td>
                <td>{day.high}</td>
                <td>{day.low}</td>
            </tr>
        );
        return <tbody>{days}</tbody>;
    }

    return (
        <>
            <h3>Forecast:</h3>
            <table className="table">
                <thead>
                    <th>Day</th>
                    <th>Conditions</th>
                    <th>High Temp &deg;F</th>
                    <th>Low Temp &deg;F</th>
                </thead>
                {days()}
            </table>
        </>
    );
}