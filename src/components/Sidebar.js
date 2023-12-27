import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Sidebar() {
    return (
        <Navbar sticky="top" className="flex-column Sidebar">
            <Nav.Item>
                <Nav.Link href="/">Environment</Nav.Link>
                <Nav.Link href="/nfl">NFL</Nav.Link>
            </Nav.Item>
        </Navbar>
    );
}