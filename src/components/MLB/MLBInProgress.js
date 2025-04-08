export default function InProgressGame({ value, index }) {
    console.log(value, index);

    // caluculate bases based on boolean values
    let bases = 0;
    if (value.onFirst) {
        bases += 1;
    }
    if (value.onSecond) {
        bases += 2;
    }
    if (value.onThird) {
        bases += 4;
    }
    // calculate outs based on number of outs or 0 if between innings
    const outs = value.outs || 0;

    return (
        <div className="col-md-3">
            <table key={index} style={{border: '1px solid'}}>
                <tbody>
                    <tr>
                        <td colSpan="3" width="156px"><b>{value.inningState}&nbsp;{value.inning}</b></td>
                        <td width="20px" style={{textAlign:'center'}}><b>R</b></td>
                        <td width="20px" style={{textAlign:'center'}}>H</td>
                        <td width="20px" style={{textAlign:'center'}}>E</td>
                        <td rowSpan="3" width="72px" style={{textAlign:'center', border: '1px solid'}}>
                            <table>
                                <tbody>
                                    <tr><td><img src={`img/mlb/bases${bases.toString()}.png`} alt="" width="70px" height="51px" /></td></tr>
                                    <tr><td><img src={`img/mlb/outs${outs.toString()}.png`} alt="" width="42px" height="12px" /></td></tr>
                                    <tr><td style={{textAlign:'center'}}><b>{value.balls} - {value.strikes}</b></td></tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>    
                        <td><img src={value.awayLogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.awayAbbreviation}</b></td>
                        <td style={{textAlign:'left', fontSize: '0.8em'}}>{value.awayRecord}</td>
                        <td style={{textAlign:'center'}}><b>{value.awayScore}</b></td>
                        <td style={{textAlign:'center'}}>{value.awayHits}</td>
                        <td style={{textAlign:'center'}}>{value.awayErrors}</td>
                    </tr>
                    <tr>    
                    <td><img src={value.homeLogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.homeAbbreviation}</b></td>
                        <td style={{textAlign:'left', fontSize: '0.8em'}}>{value.homeRecord}</td>
                        <td style={{textAlign:'center'}}><b>{value.homeScore}</b></td>
                        <td style={{textAlign:'center'}}>{value.homeHits}</td>
                        <td style={{textAlign:'center'}}>{value.homeErrors}</td>
                    </tr>
                    {/* <tr>    
                        <td colSpan="7" style={{fontSize: '0.8em'}}>{value.lastPlay}</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}