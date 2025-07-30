import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { fetchData, BaseURL } from '../../services/api';
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
    // 🟢 Initial data fetch
        fetchData('NFL').then((env) => {
            if (env && typeof env === 'object') {

            setData((prev) => ({
                ...prev,
                NFL: env.values || null,
                }));
            }
        });

        const evtSource = new EventSource(`${BaseURL}/events`);

        const handleUpdate = async (type, incoming) => {
            // const updated = incoming.updated ?? '';
            // const [updateDate, updateTime] = updated.split(' -')[0]?.split(' ') ?? [];

            setData((prev) => ({
                ...prev,
                [type]: incoming.values,  // direct assignment since shape matches `data[type]`
            }));
        };
        // 🟢 SSE event listener
        evtSource.addEventListener('update', (event) => {
            try {
                const payload = JSON.parse(event.data);
                
                if (['NFL'].includes(payload.type)) {
                    console.log('SSE payload:', payload);
                    handleUpdate(payload.type, payload);
                }
            } catch (error) {
                console.error('💥 SSE error:', error);
            }
        });

        return () => evtSource.close();
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
                {data.NFL.weekname} - {data.NFL.weekdates}
                </h2>
                {renderGameRows(data.NFL.events)}
            </Container>
        </Stack>
    );
}