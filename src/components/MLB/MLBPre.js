export default function PreGame({ value, index }) {
    // console.log(value, index);
    return (
        <div className="col-md-3">
            <table style={{backgroundColor: 'WhiteSmoke'}} key={index}>
                <tbody>
                    <tr>
                        <td colSpan="3" width="144px" style={{textAlign:'center'}}>{value.startTime.slice(11)}</td>
                        <td width="72px" style={{textAlign:'center'}}>&nbsp;</td>
                        <td width="24px" style={{textAlign:'center'}}>&nbsp;</td>
                        <td width="24px" style={{textAlign:'center'}}>&nbsp;</td>
                        <td width="24px" style={{textAlign:'center'}}>&nbsp;</td>
                    </tr>
                    <tr>    
                        <td><img src={value.awayLogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.awayAbbreviation}</b></td>
                        <td>{value.awayRecord}</td>
                    </tr>
                    <tr>    
                    <td><img src={value.homeLogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.homeAbbreviation}</b></td>
                        <td>{value.homeRecord}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
