import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, User } from 'lucide-react';
import { Facebook, Instagram } from '../components/SocialIcons';
import './Concejales.css';
import SEO from '../components/Seo.jsx';
import { slugify, concejalesList } from '../data';

const Concejales = () => {
  const [selectedBlock, setSelectedBlock] = useState('Todos');
  const navigate = useNavigate();

  const blocks = ['Todos', 'Cambia Alberdi', 'Tucumán Primero', 'Alberdi Primero', 'Justicia y Kompromiso', 'Construyendo Futuro', 'Trabajando por Alberdi'];

const filteredConcejales = selectedBlock === 'Todos'
  ? concejalesList.filter(c => c.role === 'Concejal')
  : concejalesList.filter(c => c.block === selectedBlock && c.role === 'Concejal');


  return (

    <>
      <SEO
        title="Concejales"
        description="Lista completa de concejales del Honorable Concejo Deliberante de Alberdi. Conocé sus perfiles y trayectoria legislativa."
        url="https://hcdalberdi.com.ar/"
        type="website"
      />
      <motion.div
        className="concejales-page container section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{ padding: '2rem' }}
      >
        <div className="section-title">
          <span className="badge badge-primary">Cuerpo Legislativo</span>
          <h2 className="serif-title" style={{ marginTop: '0.5rem' }}>Conocé a los Concejales</h2>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs-container">
          <h3 className="filter-title">Filtrar por Bloque:</h3>
          <div className="filter-tabs">
            {blocks.map((block) => (
              <button
                key={block}
                className={`filter-btn ${selectedBlock === block ? 'active' : ''}`}
                onClick={() => setSelectedBlock(block)}
              >
                {block}
              </button>
            ))}
          </div>
        </div>
          
        {/* Grid of Councillors */}
        <div
          className="grid grid-3"
          style={{ marginTop: '2rem' }}
        >
          <AnimatePresence >
            {filteredConcejales.map((c) => (
              <motion.div
                key={c.id}
                className="card concejal-card"
                layout="position"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/concejales/${slugify(c.name)}`)}
              >
                <div className="concejal-header">
                  <img src={c.image} alt={c.name} className="concejal-photo" />
                  <div className="concejal-meta">
                    <span className="concejal-badge">{c.subrole}</span>
                    <span className="concejal-block-badge">{c.block}</span>
                  </div>
                </div>

                <div className="concejal-body">
                  <h3 className="serif-title">{c.name}</h3>


                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    {c.socials && (
                      <div className="concejal-socials" style={{ display: 'flex', gap: '0.8rem' }} onClick={(e) => e.stopPropagation()}>
                        {c.socials.facebook && <a href={c.socials.facebook} className="social-link" style={{ color: 'var(--text-muted)' }}><Facebook size={18} /></a>}
                        {c.socials.instagram && <a href={c.socials.instagram} className="social-link" style={{ color: 'var(--text-muted)' }}><Instagram size={18} /></a>}
                      </div>
                    )}
        
                    <button
                      className="btn btn-primary"
                      style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', gap: '0.35rem' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/concejales/${slugify(c.name)}`);
                      }}
                    >
                      <User size={13} />
                      Ver Perfil
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Secretaries Section */}
        <div className="section-title">
          <h2 className="serif-title" style={{ marginTop: '1.5rem' }}>Conocé a los Secretarios</h2>
        </div>
        <div
          className="grid grid-3"
          style={{ marginTop: '2rem' }}
        >
          <AnimatePresence >
            {concejalesList.filter(c => c.role === 'Secretario').map((c) => (
              <motion.div
                key={c.id}
                className="card concejal-card"
                layout="position"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/concejales/${slugify(c.name)}`)}
              >
                <div className="concejal-header">
                  <img src={c.image} alt={c.name} className="concejal-photo" />
                  <div className="concejal-meta">
                    <span className="concejal-badge">{c.subrole}</span>
                  </div>
                </div>

                <div className="concejal-body">
                  <h3 className="serif-title">{c.name}</h3>
                  
                  <div className="concejal-contact">
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};


export default Concejales;
