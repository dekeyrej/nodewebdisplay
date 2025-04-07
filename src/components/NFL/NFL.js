import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { fetchData } from '../../services/api';
import getSortMethod from '../../utils/getSortMethod';
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

    const renderGameRows = (events, gamesPerRow = 4) => {
        const rows = [];
        for (let i = 0; i < events.length; i += gamesPerRow) {
            rows.push(
                <div className="row" key={i}>
                    {events.slice(i, i + gamesPerRow).map(renderGame)}
                </div>
            );
        }
        return rows;
    };
    
    return (
        <Stack direction="horizontal" className="NFL">
            <Container className="NFL">
                <h2>National Football League - {data.NFL.seasontype}:<br/>
                {data.NFL.weekname}
                </h2>
                {renderGameRows(data.NFL.events)}
            </Container>
        </Stack>
    );
}