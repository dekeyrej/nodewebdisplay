import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import BaseURL from './BaseURL';
import getSortMethod from '../utils/getSortMethod';

const data = await (async () => {
    const response = await fetch(`${BaseURL}/nfl`);
    if (response.ok) {
        const results = await response.json();
        const d = results
        return d;
    }
})();

function renderInProgressGame(game, index) {
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

function renderGame(value, index, array) {
    console.log(value);
    if (value.state === 'pre') {
        return (
            <div className="col-md-3">
                <table style={{backgroundColor: 'WhiteSmoke'}} key={index}>
                    <tbody>
                        <tr><td colSpan="4" width="256px" style={{textAlign:'right'}}>Scheduled - {value.date}</td></tr>
                        <tr>    
                            <td><img src={value.awaylogo} alt="" width="32px" height="32px" /></td>
                            <td><b>{value.awayabrv}</b></td>
                            <td>{value.awayrecord}</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>    
                        <td><img src={value.homelogo} alt="" width="32px" height="32px" /></td>
                            <td><b>{value.homeabrv}</b></td>
                            <td>{value.homerecord}</td>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    } else if (value.state === 'post') {
        return (
            <div className="col-md-3">
                <table style={{backgroundColor: 'LightGray'}} key={index}>
                    <tbody>
                        <tr><td colSpan="3" width="256px" style={{textAlign:'center'}}>{value.date}</td><td>Final</td></tr>
                        <tr>    
                            <td><img src={value.awaylogo} alt="" width="32px" height="32px" /></td>
                            <td><b>{value.awayabrv}</b></td>
                            <td>{value.awayrecord}</td>
                            <td>{value.awayscore}</td>
                        </tr>
                        <tr>    
                        <td><img src={value.homelogo} alt="" width="32px" height="32px" /></td>
                            <td><b>{value.homeabrv}</b></td>
                            <td>{value.homerecord}</td>
                            <td>{value.homescore}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    } else {
        return renderInProgressGame(value, index);
    }
}

export default function NFL() {
    data.NFL.sort(getSortMethod('+fulldate'))
    const gameCount = data.NFL.length;
    console.log(gameCount);
    const gamesr1 = data.NFL.slice(0,4).map(renderGame);
    const gamesr2 = data.NFL.slice(4,8).map(renderGame);
    const gamesr3 = data.NFL.slice(8,12).map(renderGame);
    const gamesr4 = data.NFL.slice(12,16).map(renderGame);
    return (
        <Stack direction="horizontal" className="NFL">
            <Container className="NFL">
                <h2>National Football League - Week {data.NFL[0].week}:</h2>
                <div class="row">
                {gamesr1}
                </div>
                <div class="row">
                {gamesr2}
                </div>
                <div class="row">
                {gamesr3}
                </div>
                <div class="row">
                {gamesr4}
                </div>
            </Container>
        </Stack>
    );
}