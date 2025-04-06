import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { fetchData } from '../services/api';
import getSortMethod from '../utils/getSortMethod';
import InProgressGame from './NFLInProgress';
import PreGame from './NFLPre';
import PostGame from './NFLPost';
import { useEffect, useState } from 'react';

function renderGame(value, index) {
    const components = {
        pre: PreGame,
        post: PostGame,
        inProgress: InProgressGame,
    };
    const Component = components[value.state] || InProgressGame;
    return <Component key={index} value={value} />;
}

export default function NFL() {
    const [data, setData] = useState({ NFL: [] });

    useEffect(() => {
        fetchData('NFL').then(setData);
    }, []);

    useEffect(() => {
        if (data.NFL.length > 0) {
            data.NFL.sort(getSortMethod('+fulldate'));
        }
    }, [data]);

    if (data.NFL.length === 0) {
        return <div>Loading...</div>;
    }
    
    const gamesr1 = data.NFL.events.slice(0,4).map(renderGame);
    const gamesr2 = data.NFL.events.slice(4,8).map(renderGame);
    const gamesr3 = data.NFL.events.slice(8,12).map(renderGame);
    const gamesr4 = data.NFL.events.slice(12,16).map(renderGame);

    return (
        <Stack direction="horizontal" className="NFL">
            <Container className="NFL">
                <h2>National Football League - {data.NFL.seasontype}:<br/>
                {data.NFL.weekname}
                </h2>
                <div className="row">{gamesr1}</div>
                <div className="row">{gamesr2}</div>
                <div className="row">{gamesr3}</div>
                <div className="row">{gamesr4}</div>
            </Container>
        </Stack>
    );
}