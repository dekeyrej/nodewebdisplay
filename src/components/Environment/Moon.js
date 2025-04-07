export default function Moon({moon, date}) {
    const { phase, sunevent, moonevent, illumstr } = moon;

    return (
        <>
            <h3>Astronomics:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <td colSpan="2"><b>Last Refresh: {date}</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan="3">
                            <img
                                src={`img/moon/moon${phase.toString().padStart(2,'0')}.bmp`}
                                alt={`Moon Phase: ${phase}`}
                                width="128px" 
                                height="128px" 
                            />
                        </td>
                        <td>{sunevent}</td>
                    </tr>
                    <tr>
                        <td>{moonevent}</td>
                    </tr>
                    <tr>
                        <td>Lunar Illumination: {illumstr}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}