import React from 'react';
import SEO from '../components/Seo.jsx';
const Error = () => {
return (
    <>
        <SEO 
        title="Página no encontrada"
        url="https://hcdalberdi.com.ar/404"
        type="website"
        noIndex={true}
        />


  <div className="error-page container section" style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
    <h2 className="serif-title">Página no encontrada</h2>
    <p>La página que estás buscando no existe o ha sido movida.</p>
    <a href="/" className="btn-back" style={{ marginTop: '1rem' }}>
      <span>Volver al inicio</span>
    </a>
  </div>
    </>
);
};

export default Error;