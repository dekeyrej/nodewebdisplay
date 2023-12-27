export default function Hourly({hourly}) {
    const iconsize = 'owf-2x'

    function hours() {
        const hours = hourly.map(hour =>
            <tr>
                <td>{hour.hour}</td>
                <td><i className={`owf owf-${hour['wid']}-${hour['dn']} ${iconsize}`}/></td>
                <td>{hour.temp}</td>
                <td>{hour.feel}</td>
            </tr>
        );
        return <tbody>{hours}</tbody>;
    }

    return (
        <>
            <h3>Hourly:</h3>
            <table className="table">
                <thead>
                <th>Hour</th>
                        <th>Conditions</th>
                        <th>Temperature &deg;F</th>
                        <th>Feels Like &deg;F</th>
                </thead>
                {hours()}
            </table>
        </>
    );
}