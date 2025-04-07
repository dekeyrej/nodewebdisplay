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

    return (
        <div className="col-md-3">
            <table key={index} style={{border: '1px solid'}}>
                <tbody>
                    <tr >
                        <td colSpan="3" width="144px"><b>{value.inningState}&nbsp;{value.inning}</b></td>
                        <td width="24px" style={{textAlign:'center'}}><b>R</b></td>
                        <td width="24px" style={{textAlign:'center'}}>H</td>
                        <td width="24px" style={{textAlign:'center'}}>E</td>
                        <td rowSpan="3" width="72px" style={{textAlign:'center', border: '1px solid'}}>
                            <table>
                                <tbody>
                                    <tr>{bases}</tr>
                                    <tr>{value.outs} outs</tr>
                                    <tr>{value.balls} - {value.strikes}</tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>    
                        <td><img src={value.awayLogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.awayAbbreviation}</b></td>
                        <td style={{textAlign:'center'}}>{value.awayRecord}</td>
                        <td style={{textAlign:'center'}}><b>{value.awayScore}</b></td>
                        <td style={{textAlign:'center'}}>{value.awayHits}</td>
                        <td style={{textAlign:'center'}}>{value.awayErrors}</td>
                    </tr>
                    <tr>    
                    <td><img src={value.homeLogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.homeAbbreviation}</b></td>
                        <td style={{textAlign:'center'}}>{value.homeRecord}</td>
                        <td style={{textAlign:'center'}}><b>{value.homeScore}</b></td>
                        <td style={{textAlign:'center'}}>{value.homeHits}</td>
                        <td style={{textAlign:'center'}}>{value.homeErrors}</td>
                    </tr>
                    <tr>    
                        <td colSpan="7">{value.lastPlay}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}