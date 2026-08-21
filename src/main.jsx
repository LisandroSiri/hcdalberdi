import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Concejales from './pages/Concejales';
import Profiles from './pages/Profiles';
import Entrada from './pages/Tramites';
import Error from './pages/Error';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/concejales" element={<Concejales />} />
              <Route path="/concejales/:slug" element={<Profiles />} />
              <Route path="/mesa-de-entrada-digital" element={<Entrada />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </HelmetProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);


