export default function InProgressGame({ game, index }) {
    return (
        <div className="col-md-3">
            <table style={{border: '1px solid'}} key={index}>
                <tbody>
                    <tr><td colSpan="2" width="100px" style={{textAlign:'center'}}>In Progress...</td><td width="64px"><b>Score</b></td><td width="92px">&nbsp;</td></tr>
                    <tr>    
                        <td><img src={game.awaylogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{game.awayabrv}</b></td>
                        <td style={{textAlign:'center'}}>{game.awayscore}</td>
                        <td>{game.period}<br />{game.clock}</td>
                    </tr>
                    <tr>    
                    <td><img src={game.homelogo} alt="" width="32px" height="32px" /></td>
                        <td><b>{game.homeabrv}</b></td>
                        <td style={{textAlign:'center'}}>{game.homescore}</td>
                        <td>{game.downandyardage}<br />{game.position}</td>
                    </tr>
                    <tr>
                        {game.possession ?  
                        <td colSpan="4">{game.possession} has the ball.</td>
                        :
                        <td colSpan="4"></td>
                    }
                    </tr>
                    <tr>    
                        <td colSpan="4">{game.lastplay}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}