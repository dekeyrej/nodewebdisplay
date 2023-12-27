import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import EnviroPage from './pages/EnviroPage';
import NFLPage from './pages/NFLPage';

export default function App(){
  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EnviroPage />} />
          <Route path="/nfl" element={<NFLPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
