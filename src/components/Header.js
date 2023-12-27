import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import WebControlButtons from './WebControlButtons';

export default function Header() {
    return (
        <Navbar bg="light" sticky="top" className="Header">
            <Container>
                <Navbar.Brand>Webdisplay</Navbar.Brand>
                <WebControlButtons />
            </Container>
        </Navbar>
    );
}