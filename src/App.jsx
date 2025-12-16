import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import PropostaPedagogica from './pages/PropostaPedagogica';
import TurmasHorarios from './pages/TurmasHorarios';
import Galeria from './pages/Galeria';
import EventosNoticias from './pages/EventosNoticias';
import Matriculas from './pages/Matriculas';
import Contato from './pages/Contato';
import './index.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/proposta-pedagogica" element={<PropostaPedagogica />} />
          <Route path="/turmas-horarios" element={<TurmasHorarios />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/eventos-noticias" element={<EventosNoticias />} />
          <Route path="/matriculas" element={<Matriculas />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Layout>
      <Analytics />
    </Router>
  );
}

export default App;