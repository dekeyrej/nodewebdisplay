export default function PreGame({ value, index }) {
    // console.log(value, index);
    return (
        <div className="col-md-3">
            <table style={{backgroundColor: 'WhiteSmoke'}} key={index}>
                <tbody>
                    <tr><td colSpan="4" width="256px" style={{textAlign:'right'}}>Scheduled - {value.startTime.slice(11)}</td></tr>
                    <tr>    
                        <td><img src={value.awayLogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.awayAbbreviation}</b></td>
                        <td>{value.awayRecord}</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>    
                    <td><img src={value.homeLogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.homeAbbreviation}</b></td>
                        <td>{value.homeRecord}</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
