import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { clickHandler } from '../services/api.js';

const WebControlButtons = () => {

    const buttons = [
        { name: 'rew', label: 'REW' },
        { name: 'pp',  label: 'Play/Pause' },
        { name: 'fwd', label: 'FWD' },
        { name: 'out', label: 'Garbage Out' },
        { name: 'reload', label: 'Reload Matrix' }
    ];

    return (
        <ButtonGroup aria-label="Basic example">
            {buttons.map((btn) => (
                <Button key={btn.name} variant="light" name={btn.name} onClick={clickHandler}>
                    {btn.label}
                </Button>
            ))}
        </ButtonGroup>
    );
};

export default WebControlButtons;
