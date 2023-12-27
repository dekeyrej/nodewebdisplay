import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import BaseURL from './BaseURL.js';

export default function WebControlButtons () {

    function clickHandler (btn) {
        const URL = `${BaseURL}/webcontrol/${btn.target.name}`;
        axios.put(URL);
    };

return (
    <ButtonGroup aria-label="Basic example">
        <Button variant="light" name="rew" onClick={clickHandler}>REW</Button>
        <Button variant="light" name="pp"  onClick={clickHandler}>Play/Pause</Button>
        <Button variant="light" name="fwd" onClick={clickHandler}>FWD</Button>
    </ButtonGroup>
)
}