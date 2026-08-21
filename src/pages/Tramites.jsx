import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send, FileText, Landmark, Clock, ShieldAlert } from 'lucide-react';
import entrada from '../components/entrada.jsx';
import SEO from '../components/Seo.jsx';
import './Tramites.css';

const Tramites = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: 'Presupuesto y Hacienda',
    title: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const categories = [
      "Legislación y Peticiones",
      "Presupuesto y Hacienda",
      "Obras Públicas y Transporte",
      "Educación y Cultura, Turismo y Deportes, Salud y Conservación Ambiental",
      "Relaciones Laborales, Política Ocupacional, Seguridad e Higiene en el Trabajo",
      "Preservación del Patrimonio de la Ciudad",
      "Políticas de Género, Mujeres y Diversidad",
      "Otros"
    ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Validación (igual que antes)
  if (!formData.fullName || !formData.email || !formData.title || !formData.description) {
    alert("Por favor complete todos los campos obligatorios.");
    return;
  }

  if (!acceptedTerms) {
    alert("Debe aceptar los términos y condiciones para enviar el formulario.");
    return;
  }

  setIsSubmitting(true);

  try {
    // ✅ Reemplazá esta URL con la que copiaste en el Paso 3
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxuUPZcwnlJXTdx4f7hw4Q07UnF6YSZerUvtm__GsuBEeTN-oiziVUtO0o_MCXoe657tw/exec";
    
    const response = await fetch(SCRIPT_URL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    if(result.success) {
      setIsSubmitting(false);
      setIsSuccess(true);
    }else {
      alert(result.error || "Hubo un error al enviar el formulario. Por favor intentá de nuevo.");
      setIsSubmitting(false);
    }
  } catch (error) {
    console.error("Error al enviar:", error);
    alert("Hubo un error al enviar el formulario. Por favor intentá de nuevo.");
    setIsSubmitting(false);
  }
};

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      category: 'Legislación y Peticiones',
      title: '',
      description: ''
    });
    setAcceptedTerms(false);
    setIsSuccess(false);
  };

  return (
    <>
    <SEO 
      title="Mesa de Entradas Digital"
      description="Presenta tus propuestas de proyectos legislativos, reclamos formales o iniciativas particulares ante el Concejo Deliberante de la Ciudad."
      url="https://hcdalberdi.com.ar/mesa-de-entrada-digital"   
      type="website"
    />


    <motion.div 
      className="tramites-page container section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="section-title">
        <span className="badge badge-accent">Participación Ciudadana</span>
        <h2 className="serif-title" style={{ marginTop: '0.5rem' }}>Mesa de Entradas Digital</h2>
        <p>Presenta tus propuestas de proyectos legislativos, reclamos formales o iniciativas particulares ante el Concejo Deliberante de la Ciudad.</p>
      </div>

      <div className="tramites-layout">
        {/* Left Side: Instructions and Legal Info */}
        <motion.div 
          className="tramites-info"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="card glass info-accent-card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Landmark size={20} className="primary-color" /> Guía de Presentación
            </h3>
            <div className="steps-bullets">
              <div className="step-bullet">
                <div className="step-num">1</div>
                <div>
                  <strong>Completa tus datos:</strong> Información verídica de contacto para notificaciones oficiales.
                </div>
              </div>
              <div className="step-bullet">
                <div className="step-num">2</div>
                <div>
                  <strong>Detalla el Proyecto:</strong> Explica la fundamentación, objetivos y justificación de tu propuesta.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          className="tramites-form-container card"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                onSubmit={handleSubmit}
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="serif-title" style={{ fontSize: '1.4rem' }}>Formulario de Iniciativa Popular</h3>
                <p style={{marginBottom: '1.2rem'}}>Las casillas marcadas con * son obligatorias.</p>
                
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Nombre y Apellido *</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-input"
                      placeholder=""
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Correo Electrónico *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder=""
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Teléfono de Contacto</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      placeholder="Ej. +54 3865 555-5555"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Comisión de Interés *</label>
                    <select
                      name="category"
                      className="form-input"
                      value={formData.category}
                      onChange={handleInputChange}
                      style={{ height: '2.8rem' }}
                    >
                      {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Título del Proyecto / Asunto *</label>
                  <input
                    type="text"
                    name="title"
                    className="form-input"
                    placeholder="Ej: Proyecto de Arbolado de Veredas en Barrio ..."
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Descripción Breve / Resumen *</label>
                  <textarea
                    name="description"
                    className="form-input"
                    rows="4"
                    placeholder="Describe de qué trata tu propuesta legislativa, cuáles son los beneficios para los vecinos y qué ordenanza planteas crear o reformar..."
                    value={formData.description}
                    onChange={handleInputChange}
                    style={{ resize: 'vertical' }}
                    required
                  />
                </div>

                {/* File Uploader Component */}
                

                {/* Términos y Condiciones */}
                <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      style={{ marginTop: '0.2rem', width: '1.1rem', height: '1.1rem', flexShrink: 0, cursor: 'pointer', accentColor: 'var(--primary)' }}
                    />
                    <span style={{ fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--text-muted, #666)' }}>
                      He leído y acepto que los datos ingresados en este formulario serán utilizados exclusivamente para el registro y seguimiento de mi presentación ante el Honorable Concejo Deliberante de Alberdi. La información proporcionada es veraz y de mi responsabilidad. *
                    </span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting || !acceptedTerms}
                  style={{ width: '100%', gap: '0.8rem', height: '3.2rem', fontSize: '1rem' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div> Procesando Presentación...
                    </>
                  ) : (
                    <>
                      Presentar Proyecto Oficial <Send size={18} />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                className="success-state text-center"
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{ padding: '2rem 1rem' }}
              >
                <div className="success-icon-wrapper" style={{ margin: '0 auto 1.5rem auto' }}>
                  <CheckCircle2 size={64} className="teal-color" />
                </div>
                
                <h2 className="serif-title" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>¡Trámite Presentado!</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                  Tu iniciativa popular ha sido radicada con éxito en la Mesa de Entradas Digital del Honorable Concejo Deliberante.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button className="btn btn-secondary" style={{ flex: 1 }} onClick={resetForm}>
                    Presentar otro Proyecto
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default Tramites;
