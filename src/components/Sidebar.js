import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Sidebar() {
    return (
        <Navbar sticky="top" className="flex-column Sidebar">
            <Nav.Item>
                <Nav.Link href="/">Environment</Nav.Link>
                <Nav.Link href="/nfl">NFL</Nav.Link>
                <Nav.Link href="/mlb">MLB</Nav.Link>
                <Nav.Link><hr></hr></Nav.Link>
                <Nav.Link href="/mm/">MagicMirror</Nav.Link>
                <Nav.Link href="/mm2/">MagicMirror-small</Nav.Link>
                <Nav.Link href={`https://${window.location.hostname}/dashboard/#/`}>Cluster Dashboard</Nav.Link>
                <Nav.Link href={`http://${window.location.hostname}:8080`}>Open-WebUI</Nav.Link>
                <Nav.Link href={`http://${window.location.hostname}:3000`}>Grafana</Nav.Link>
            </Nav.Item>
        </Navbar>
    );
}
