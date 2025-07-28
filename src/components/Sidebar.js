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
                <Nav.Link href="http://gandalf.local:8080/">MagicMirror</Nav.Link>
                <Nav.Link href={`https://${window.location.hostname}/dashboard/#/`}>Cluster Dashboard</Nav.Link>
                <Nav.Link href="http://galadriel.local:8080/">Open-WebUI</Nav.Link>
                <Nav.Link href="http://grafana.local/">Grafana</Nav.Link>
            </Nav.Item>
        </Navbar>
    );
}
