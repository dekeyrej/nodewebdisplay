export default function PostGame({ value, index }) {
    // console.log(value, index);
    return (
        <div className="col-md-3">
            <table style={{border: '1px solid WhiteSmoke', backgroundColor: 'LightGray'}} key={index}>
                <tbody>
                    <tr>
                        <td colSpan="3" width="192px" style={{textAlign:'center'}}><b>Final</b></td>
                        <td width="36px" style={{textAlign:'center'}}>&nbsp;</td>
                        <td width="20px" style={{textAlign:'center'}}><b>R</b></td>
                        <td width="20px" style={{textAlign:'center'}}>H</td>
                        <td width="20px" style={{textAlign:'center'}}>E</td>
                    </tr>
                    <tr>    
                        <td><img src={value.awayLogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.awayAbbreviation}</b></td>
                        <td style={{textAlign:'center', fontSize: '0.8em'}}>{value.awayRecord}</td>
                        <td >&nbsp;</td>
                        <td style={{textAlign:'center'}}><b>{value.awayScore}</b></td>
                        <td style={{textAlign:'center'}}>{value.awayHits}</td>
                        <td style={{textAlign:'center'}}>{value.awayErrors}</td>
                    </tr>
                    <tr>    
                    <td><img src={value.homeLogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.homeAbbreviation}</b></td>
                        <td style={{textAlign:'center', fontSize: '0.8em'}}>{value.homeRecord}</td>
                        <td >&nbsp;</td>
                        <td style={{textAlign:'center'}}><b>{value.homeScore}</b></td>
                        <td style={{textAlign:'center'}}>{value.homeHits}</td>
                        <td style={{textAlign:'center'}}>{value.homeErrors}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
