import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { fetchData, BaseURL } from '../../services/api';
// import getSortMethod from '../../utils/getSortMethod';
import InProgressGame from './MLBInProgress';
import PreGame from './MLBPre';
import PostGame from './MLBPost';
import { useEffect, useState } from 'react';

function renderGame(value, index) {
    const components = {
        pre: PreGame,
        post: PostGame,
        in: InProgressGame,
    };
    const Component = components[value.status] || InProgressGame;
    return <Component key={index} value={value} />;
}

export default function MLB() {
    const [data, setData] = useState({ MLB: [] });

    useEffect(() => {
    // 🟢 Initial data fetch
        fetchData('MLB').then((env) => {
            if (env && typeof env === 'object') {

            setData((prev) => ({
                ...prev,
                MLB: env.values || null,
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
                if (['MLB'].includes(payload.type)) {
                    console.log('SSE payload:', payload);
                    handleUpdate(payload.type, payload);
                }
            } catch (error) {
                console.error('💥 SSE error:', error);
            }
        });

        return () => evtSource.close();
    }, []);

    if (data.MLB.length === 0) {
        return <div>Loading...</div>;
    }

    console.log(data.MLB);

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
        <Stack direction="horizontal" className="MLB">
            <Container className="MLB">
                <h2>Major League Baseball - {data.MLB[0].startTime.slice(0,10)}</h2>
                {renderGameRows(data.MLB)}
            </Container>
        </Stack>
    );
}