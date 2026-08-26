import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Mail, Phone, Calendar, ArrowLeft, Briefcase, CheckCircle, Clock } from 'lucide-react';
import { Facebook, Instagram } from '../components/SocialIcons';
import { concejalesList, slugify, profilesData } from '../data';
import './Profiles.css';
import SEO from '../components/Seo.jsx';
import { useState } from 'react';


const Profiles = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);
  const concejal = concejalesList.find((c) => slugify(c.name) === slug);
  
  const isSecretario = concejal.role === "Secretario"

  if (!concejal) {
    return (
      <div className="profile-page container section" style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
        <h2 className="serif-title">Perfil no encontrado</h2>
        <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>El concejal que buscas no existe o la URL es incorrecta.</p>
        <button onClick={() => navigate('/concejales')} className="btn-back" style={{ margin: 0 }}>
          <ArrowLeft size={18} />
          <span>Volver al inicio</span>
        </button>
      </div>
    );
  }

  const detail = profilesData[concejal.id] || {
    bio: "Sin biografía cargada.",
    commissions: [],
    projects: []
  };

  const formationList = Array.isArray(detail.formation)
    ? detail.formation
    : typeof detail.formation === 'string' && detail.formation.trim() !== ''
    ? (detail.formation.includes(',') ? detail.formation.split(',').map(s => s.trim()).filter(Boolean) : [detail.formation.trim()])
    : [];

  return (
    <>
      <SEO
        title={`${concejal.name} `}
        description={`Perfil de ${concejal.name}, concejal de Alberdi. Conocé su biografía, proyectos y trayectoria legislativa.`}
        url={`https://hcdalberdi.com.ar/${slugify(concejal.name)}`}
        type="website"
      />
      <motion.div
        className="profile-page container section"
        style={{ padding: '0.8rem' }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <button onClick={() => navigate('/concejales')} className="btn-back">
          <ArrowLeft size={18} />
          <span>Volver a Concejales</span>
        </button>

        <div className="profile-container">
          {/* Left Column: Image & Meta */}
          <div className="profile-sidebar">
            <div className="profile-photo-wrapper">
              <img src={concejal.image} alt={concejal.name} className="profile-photo" />
              <div className="profile-badge-overlay">
                <span className="profile-role-badge">{concejal.role}</span>
              </div>
            </div>

            <div className="profile-contact-card">
              <h4>Contacto</h4>
              <div className="contact-info-list">
                {concejal.email && (
                  <div className="contact-info-item">
                    <Mail size={16} />
                    <a href={`mailto:${concejal.email}`}>{concejal.email}</a>
                  </div>
                )}
                {concejal.phone && (
                  <div className="contact-info-item">
                    <Phone size={16} />
                    <a href={`tel:${concejal.phone}`}>{concejal.phone}</a>
                  </div>
                )}
              </div>

              {concejal.socials && (
                <div className="profile-socials">
                  {concejal.socials.facebook && (
                    <a href={concejal.socials.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                      <Facebook size={20} />
                    </a>
                  )}
                  {concejal.socials.instagram && (
                    <a href={concejal.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                      <Instagram size={20} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Name, Role, Grid of details (Bio, Commissions, Block), and Projects */}
          <div className="profile-main-content">
            <h1 className="profile-name serif-title">{concejal.fullname}</h1>
            <p className="profile-role-description">{concejal.subrole} del Honorable Concejo Deliberante</p>
            {!isSecretario && (
            <p className="profile-block-description">Bloque: {concejal.block}</p>
            )}
            {/* Grid Layout conforming to the user's requested grid format */}
           
            <div className="profile-info-grid">
              {!isSecretario && (
              <section className="profile-section commissions-section">
                <h3 className="section-subtitle">Comisiones que Integra</h3>
                {detail.commissions && detail.commissions.length > 0 ? (
                  <div className="commissions-grid">
                    {detail.commissions.map((comm, index) => (
                      <div key={index} className="commission-tag">
                        <Briefcase size={14} />
                        <span>{comm}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-projects-text">No registra comisiones integradas.</p>
                )}
              </section>
              )}
              <section className="profile-section block-section">
                <h3 className="section-subtitle">Formación Académica</h3>
                {formationList.length > 0 ? (
                  <div className="formation-grid">
                    {formationList.map((item, index) => (
                      <div key={index} className="formation-tag">
                       
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-projects-text">No registra formación académica.</p>
                )}
              </section>
              <section className="profile-section bio-section">
                <h3 className="section-subtitle">Biografía</h3>
                <p className="profile-bio-text" style={{ whiteSpace: 'pre-line' }}>
                  {detail.bio && detail.bio.length > 1200 && !showFullBio
                    ? `${detail.bio.slice(0, 1200)}...`
                    : detail.bio}
                </p>
                {detail.bio && detail.bio.length > 250 && (
                  <button
                    onClick={() => setShowFullBio(!showFullBio)}
                    className="btn-back"
                    style={{ marginTop: '0.8rem', cursor: 'pointer' }}
                  >
                    {showFullBio ? 'Ver menos' : 'Ver más'}
                  </button>
                )}
              </section>
            </div>
           {!isSecretario && ( 
    <section className="profile-section projects-section">
      <h3 className="section-subtitle">Proyectos Presentados{detail.projects ? ` (${detail.projects.length})` : ''} </h3>
      {detail.projects && detail.projects.length > 0 ? (
        <>
          <div className="projects-list">
            {detail.projects.slice(0, showAllProjects ? detail.projects.length : 3).map((proj) => (
              <div key={proj.id} className="project-card">
                <div className="project-header">
                  <div className="project-id-title">
                    <span className="project-id">{proj.id}</span>
                    <h4 className="project-title">{proj.title}</h4>
                  </div>
                </div>
                <p className="project-description">{proj.description}</p>
                <div className="project-footer">
                  <Calendar size={12} />
                  <span>Presentado el: {proj.date}</span>
                </div>
              </div>
            ))}
          </div>
          {detail.projects.length > 3 && (
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)} 
              className="btn-back" style={{ marginTop: '1rem' }}
            >
              {showAllProjects ? 'Ver menos' : `Ver más (${detail.projects.length - 3} restantes)`}
            </button>
          )}
        </>
      ) : (
        <p className="no-projects-text">No se registran proyectos presentados recientemente.</p>
      )}
    </section>
    )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Profiles;
