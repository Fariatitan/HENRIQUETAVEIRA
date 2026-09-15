import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Cursor from '@/components/Cursor';
import Home from '@/pages/Home';
import About from '@/pages/About';
import WorkDetail from '@/pages/WorkDetail';
import StaticNotFound from '@/components/StaticNotFound';

/**
 * Versão estática do app para GitHub Pages: mesmas páginas e design,
 * sem os provedores de autenticação e backend da Base44.
 */
export default function StaticApp() {
  return (
    <Router basename="/HENRIQUETAVEIRA">
      <ScrollToTop />
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/trabalho/:slug" element={<WorkDetail />} />
        <Route path="*" element={<StaticNotFound />} />
      </Routes>
    </Router>
  );
}