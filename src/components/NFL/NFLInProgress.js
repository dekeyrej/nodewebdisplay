export default function InProgressGame({ value, index }) {
    return (
        <div className="col-md-3">
            <table style={{border: '1px solid'}} key={index}>
                <tbody>
                    <tr><td colSpan="2" width="100px" style={{textAlign:'center'}}>In Progress...</td><td width="64px"><b>Score</b></td><td width="92px">&nbsp;</td></tr>
                    <tr>    
                        <td><img src={value.awaylogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.awayabrv}</b></td>
                        <td style={{textAlign:'center'}}>{value.awayscore}</td>
                        <td>{value.period}<br />{value.clock}</td>
                    </tr>
                    <tr>    
                    <td><img src={value.homelogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{value.homeabrv}</b></td>
                        <td style={{textAlign:'center'}}>{value.homescore}</td>
                        <td>{value.downandyardage}<br />{value.position}</td>
                    </tr>
                    <tr>
                        {value.possession ?  
                        <td colSpan="4">{value.possession} has the ball.</td>
                        :
                        <td colSpan="4"></td>
                    }
                    </tr>
                    <tr>    
                        <td colSpan="4">{value.lastplay}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}