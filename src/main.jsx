import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Concejales from './pages/Concejales';
import Profiles from './pages/Profiles';
import Entrada from './pages/Tramites';
import './index.css';;
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Concejales />} />
              <Route path="/:slug" element={<Profiles />} />
              <Route path="/entrada" element={<Entrada />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </HelmetProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);


