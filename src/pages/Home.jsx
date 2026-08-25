import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Scale,
  Users,
  UserCheck,
  Briefcase,
  FileText,
  CheckSquare,
  BookOpen,
  Gavel,
  MessageCircle,
  Eye,
  ArrowRight,
  Building2,
  Dot,
} from "lucide-react";
import SEO from "../components/Seo.jsx";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero.webp";
import hero3 from "../assets/hero2.webp";
import logoConsejo from "../assets/logo-consejo.webp";
import "./Home.css";

/* Hero Carousel Data */
const heroSlides = [ 
   {
    id: 2,
    image: hero2,
    title: "Alberdi crece\ncon vos",
    subtitle: "Participá activamente en la vida democrática de nuestra ciudad.",
    cta: { label: "Cómo participar", to: "/mesa-de-entrada-digital" },
  },
  {
    id: 1,
    image: hero1,
    title: "Un Concejo cercano, transparente\ny al servicio de todos.",
    subtitle: "Honorable Concejo Deliberante de Juan Bautista Alberdi, Tucumán",
    cta: { label: "Conocé a los Concejales", to: "/concejales" },
  },

  {
    id: 3,
    image: hero3,
    title: "Tu voz,\nnuestras decisiones",
    subtitle: "Legislamos, controlamos y representamos los intereses de la comunidad.",
    cta: { label: "Acceder a Información", to: "https://drive.google.com/drive/folders/1bxbr6QH4fR687Prk6920Ae-qV95Jd7-j?usp=sharing" },
  },
];

/* Animated Section Wrapper - alternating left/right */
const AnimatedSection = ({ children, fromLeft = true, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, ease: [0.42, 0, 0.58, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

/* Animated Counter */
const AnimatedCounter = ({ target, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / (1200 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 100);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return (
    <div ref={ref} className="stat-item">
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

/* Main Home Component */
const Home = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  const next = useCallback(() => setCurrent((c) => (c + 1) % heroSlides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length), []);

  const startAutoPlay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5000);
  }, [next]);

  useEffect(() => {
   if (autoPlay) startAutoPlay();
      return () => clearInterval(intervalRef.current);
 }, [autoPlay, startAutoPlay]);

  const handleNav = (cb) => {
    setAutoPlay(false);
    cb();
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const instruments = [
    { icon: <Gavel size={28} />, name: "Ordenanzas", desc: "Normas de carácter obligatorio dictadas dentro de las competencias municipales." },
    { icon: <FileText size={28} />, name: "Resoluciones", desc: "Decisiones adoptadas por el Concejo sobre asuntos propios de sus atribuciones." },
    { icon: <BookOpen size={28} />, name: "Declaraciones", desc: "Expresiones institucionales de interés, reconocimiento, preocupación u opinión." },
    { icon: <MessageCircle size={28} />, name: "Comunicaciones", desc: "Solicitudes, recomendaciones o requerimientos según el Reglamento Interno." },
  ];

  const processSteps = [
    { num: "01", title: "Iniciativa", desc: "Los proyectos son impulsados por concejales o el Departamento Ejecutivo." },
    { num: "02", title: "Tratamiento", desc: "El proyecto es analizado en las comisiones correspondientes." },
    { num: "03", title: "Sanción", desc: "Se debate y se realiza la votación en sesión." },
    { num: "04", title: "Promulgación", desc: "El Intendente puede promulgar el proyecto o ejercer el veto." },
    { num: "05", title: "Insistencia", desc: "El Concejo puede insistir según las mayorías legales establecidas." },
    { num: "06", title: "Publicación", desc: "La norma se publica y adquiere vigencia desde el día siguiente." },
  ];

  const participationWays = [
    { icon: <Building2 size={24} />, title: "Sesiones Abiertas", desc: "Las sesiones ordinarias son públicas. Consultá días y horarios en los canales oficiales." },
    { icon: <FileText size={24} />, title: "Peticiones", desc: "Acercá notas, proyectos o solicitudes que serán tratados por el Concejo." },
    { icon: <Eye size={24} />, title: "Informate", desc: "Accedé a ordenanzas, resoluciones y comunicaciones mediante los canales oficiales." },
    { icon: <MessageCircle size={24} />, title: "Proponé Ideas", desc: "Tus aportes son fundamentales para seguir construyendo una ciudad mejor." },
  ];

  const recentActions = [
    "Apoyo a instituciones educativas, deportivas y culturales.",
    "Declaración de interés a eventos y actividades comunitarias.",
    "Acompañamiento a emprendedores y productores locales.",
    "Seguimiento y control de obras públicas en la ciudad y zonas rurales.",
    "Cuidado del ambiente y gestión responsable de residuos.",
    "Ordenamiento del tránsito y seguridad vial.",
    "Mejoras en servicios públicos y espacios urbanos.",
  ];

  return (
    <>
      <SEO
        title="Inicio"
        description="Portal oficial del Honorable Concejo Deliberante de Juan Bautista Alberdi, Tucumán. Representación, legislación, control y participación ciudadana."
        url="https://hcdalberdi.com.ar/"
        type="website"
      />

      {/* HERO CAROUSEL */}
      <section className="hero-section" aria-label="Carrusel principal">
        <AnimatePresence >
          <motion.div
            key={current}
            className="hero-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={heroSlides[current].image} alt="Concejo Deliberante Alberdi" className="hero-bg-img" />
            <div className="hero-overlay" />
            <div className="container hero-content">
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                {heroSlides[current].title.split("\n").map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </motion.h1>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {heroSlides[current].subtitle}
              </motion.p>
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                <Link to={heroSlides[current].cta.to} className="btn btn-blur hero-cta">
                  {heroSlides[current].cta.label} <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button className="hero-nav hero-nav-prev" onClick={() => handleNav(prev)} aria-label="Diapositiva anterior">
          <ChevronLeft size={24} />
        </button>
        <button className="hero-nav hero-nav-next" onClick={() => handleNav(next)} aria-label="Diapositiva siguiente">
          <ChevronRight size={24} />
        </button>
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={"hero-dot" + (i === current ? " active" : "")}
              onClick={() => { setAutoPlay(false); setCurrent(i); setTimeout(() => setAutoPlay(true), 8000); }}
              aria-label={"Ir a diapositiva " + (i + 1)}
            />
          ))}
        </div>
      </section>

      {/* SECTION 1 — QUE ES (desde izquierda) */}
      <section className="home-section section" id="que-es">
        <div className="container">
          <AnimatedSection fromLeft={true} className="section-split">
            <div className="split-text">
              <span className="badge badge-primary">¿Qué es?</span>
              <h2 className="serif-title section-heading">El Honorable Concejo Deliberante</h2>
              <p>Es el <strong>órgano deliberativo</strong> del Gobierno Municipal, integrado por concejales elegidos por el pueblo. Junto con el Departamento Ejecutivo, forma parte del Gobierno de la Municipalidad.</p>
              <ul className="feature-list">
                <li><Scale size={18} className="feature-icon" /><span>Deliberar y sancionar ordenanzas.</span></li>
                <li><Eye size={18} className="feature-icon" /><span>Ejercer el control de la gestión municipal.</span></li>
                <li><Users size={18} className="feature-icon" /><span>Representar los intereses de la comunidad.</span></li>
              </ul>
              <p className="concept-tag">Representación · Legislación · Control · Participación ciudadana</p>
            </div>
            <div className="split-visual">
              <div className="visual-logo-card">
                <img src={logoConsejo} alt="Logo Concejo Deliberante" className="section-logo" />
                <p className="visual-card-text">Gobierno de la Municipalidad<br />de Juan Bautista Alberdi</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="container stats-grid">
          <AnimatedCounter target={10} label="Concejales" />
          <div className="stat-divider" />
          <AnimatedCounter target={2} suffix="ª" label="Categoría Municipal" />
          <div className="stat-divider" />
          <AnimatedCounter target={6} label="Bloques Políticos" />
          <div className="stat-divider" />
          <AnimatedCounter target={5} label="Comisiones Permanentes" />
        </div>
      </section>

      {/* SECTION 2 — COMPOSICION (desde derecha) */}
      <section className="home-section section bg-alt" id="composicion">
        <div className="container">
          <AnimatedSection fromLeft={false} className="section-split reverse">
            <div className="split-visual">
              <div className="composition-card">
                <span className="composition-number">10</span>
                <span className="composition-label">Concejales</span>
                <div className="composition-law"><span>Ley Provincial N.º 5.529</span></div>
              </div>
            </div>
            <div className="split-text">
              <span className="badge badge-primary">Composición</span>
              <h2 className="serif-title section-heading">Categoría y composición</h2>
              <p>Juan Bautista Alberdi es un <strong>Municipio de Segunda Categoría</strong>, según la Ley Provincial N.º 5.529. El Concejo está integrado por <strong>10 concejales</strong> elegidos por voto directo.</p>
              <div className="category-table">
                <div className="cat-row"><span>1.ª Categoría</span><span>12 concejales</span></div>
                <div className="cat-row cat-row-active"><span>2.ª Categoría <strong>(Alberdi)</strong></span><span>10 concejales</span></div>
                <div className="cat-row"><span>3.ª Categoría</span><span>6 concejales</span></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 — REQUISITOS (desde izquierda) */}
      <section className="home-section section" id="requisitos">
        <div className="container">
          <AnimatedSection fromLeft={true}>
            <div className="section-title">
              <span className="badge badge-primary">Requisitos</span>
              <h2 className="serif-title" style={{ marginTop: "0.5rem" }}>Para ser Concejal</h2>
              <p>Condiciones establecidas por la legislación para integrar el Cuerpo Deliberativo.</p>
            </div>
            <div className="grid grid-3 requisitos-grid">
              {[
                { num: "22", unit: "años", desc: "Edad mínima requerida para ser concejal." },
                { num: "5", unit: "años", desc: "Antigüedad mínima para naturalizados argentinos." },
                { num: <CheckSquare/>, unit: "", desc: "Inscripción vigente en los padrones electorales del municipio." },
              ].map((req, i) => (
                <div key={i} className="req-card card">
                  <div className="req-number">
                    <span className="req-num">{req.num}</span>
                    <span className="req-unit">{req.unit}</span>
                  </div>
                  <p>{req.desc}</p>
                </div>
              ))}
            </div>
            <div className="req-extra card">
              <UserCheck size={20} className="feature-icon" />
              <span>No encontrarse comprendido en incompatibilidades o inhabilidades legales.</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 — ROL DEL CONCEJAL (desde derecha) */}
      <section className="home-section section bg-alt" id="rol">
        <div className="container">
          <AnimatedSection fromLeft={false}>
            <div className="section-title">
              <span className="badge badge-primary">Roles</span>
              <h2 className="serif-title" style={{ marginTop: "0.5rem" }}>El rol del Concejal</h2>
              <p>Los concejales <strong>representan a los vecinos</strong>, legislan para el bien común y fiscalizan la gestión municipal.</p>
            </div>
            <div className="grid grid-2 roles-grid">
              {[
                { icon: <Scale size={28} />, title: "Función Legislativa", desc: "Presentar, analizar, debatir y votar proyectos y ordenanzas.", color: "primary" },
                { icon: <Eye size={28} />, title: "Función de Control", desc: "Fiscalizar los actos del Departamento Ejecutivo y el uso de los recursos públicos.", color: "teal" },
                { icon: <Users size={28} />, title: "Función Representativa", desc: "Escuchar y canalizar las necesidades, inquietudes y propuestas de los vecinos.", color: "accent" },
                { icon: <Building2 size={28} />, title: "Función Institucional", desc: "Participar en sesiones y comisiones y adoptar decisiones en beneficio de la comunidad.", color: "primary" },
              ].map((role, i) => (
                <div key={i} className={"role-card card role-" + role.color}>
                  <div className="role-icon">{role.icon}</div>
                  <div><h3>{role.title}</h3><p>{role.desc}</p></div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 — INSTRUMENTOS (desde izquierda) */}
      <section className="home-section section" id="instrumentos">
        <div className="container">
          <AnimatedSection fromLeft={true}>
            <div className="section-title">
              <span className="badge badge-primary">Normativa</span>
              <h2 className="serif-title" style={{ marginTop: "0.5rem" }}>Instrumentos del Concejo</h2>
              <p>El Concejo utiliza distintos instrumentos normativos para ejercer sus funciones.</p>
            </div>
            <div className="grid grid-2 instruments-grid">
              {instruments.map((inst, i) => (
                <div key={i} className="instrument-card card">
                  <div className="instrument-icon">{inst.icon}</div>
                  <div><h3>{inst.name}</h3><p>{inst.desc}</p></div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 — ACCIONES RECIENTES (desde derecha) */}
      <section className="home-section section bg-alt" id="acciones">
        <div className="container">
          <AnimatedSection fromLeft={false} className="section-split">
            <div className="split-text">
              <span className="badge badge-primary">Actualidad</span>
              <h2 className="serif-title section-heading">Ordenanzas y acciones recientes</h2>
              <p>El Concejo trabaja sobre distintas cuestiones de interés para la comunidad:</p>
              <ul className="actions-list">
                {recentActions.map((action, i) => (
                  <li key={i}><CheckSquare size={16} className="feature-icon" /><span>{action}</span></li>
                ))}
              </ul>
            </div>
            <div className="split-visual">
              <div className="actions-visual card">
                <Briefcase size={48} className="actions-visual-icon" />
                <h3>Actividad Legislativa</h3>
                <p>Podes formar parte presntando tu propuesta.</p>
                <Link to="/mesa-de-entrada-digital" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
                  Participá <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 — PROCESO LEGISLATIVO (desde izquierda) */}
      <section className="home-section section" id="proceso">
        <div className="container">
          <AnimatedSection fromLeft={true}>
            <div className="section-title">
              <span className="badge badge-primary">Proceso</span>
              <h2 className="serif-title" style={{ marginTop: "0.5rem" }}>¿Cómo se sanciona una ordenanza?</h2>
              <p>El proceso legislativo comprende seis etapas desde la iniciativa hasta su publicación y vigencia.</p>
            </div>
            <div className="timeline">
              {processSteps.map((step, i) => (
                <div key={i} className="timeline-step">
                  <div className="timeline-num">{step.num}</div>
                  <div className="timeline-connector" />
                  <div className="timeline-content card"><h3>{step.title}</h3><p>{step.desc}</p></div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 8 — MARCO LEGAL (desde derecha) */}
      <section className="home-section section bg-alt" id="marco-legal">
        <div className="container">
          <AnimatedSection fromLeft={false}>
            <div className="section-title">
              <span className="badge badge-primary">Marco Legal</span>
              <h2 className="serif-title" style={{ marginTop: "0.5rem" }}>Normativa que rige al Concejo</h2>
              <p>El funcionamiento del HCD está enmarcado por la siguiente legislación:</p>
            </div>
            <div className="legal-grid">
              {[
                { label: "Constitución Nacional", detail: "Artículos 5 y 123" },
                { label: "Constitución de Tucumán", detail: "Artículos 132 a 143 — Régimen Municipal" },
                { label: "Ley Provincial N.º 5.529", detail: "Régimen Orgánico de Municipalidades" },
                { label: "Ley Provincial N.º 5.530", detail: "Categorización y límites de los municipios" },
                { label: "Legislación Electoral Provincial", detail: "Régimen de elección de autoridades municipales" },
                { label: "Reglamento Interno del HCD", detail: "Normas que regulan el funcionamiento del Concejo" },
              ].map((law, i) => (
                <div key={i} className="legal-item card">
                  <BookOpen size={20} className="legal-icon" />
                  <div><h4>{law.label}</h4><p>{law.detail}</p></div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 9 — PARTICIPACION (desde izquierda) */}
      <section className="home-section section" id="participacion">
        <div className="container">
          <AnimatedSection fromLeft={true}>
            <div className="section-title">
              <span className="badge badge-primary">Participación</span>
              <h2 className="serif-title" style={{ marginTop: "0.5rem" }}>¿Cómo participan los vecinos?</h2>
              <p>La participación ciudadana fortalece la democracia local y contribuye a mejorar la calidad de las decisiones.</p>
            </div>
            <div className="grid grid-2 participation-grid">
              {participationWays.map((way, i) => (
                <div key={i} className="participation-card card">
                  <div className="participation-icon">{way.icon}</div>
                  <div><h3>{way.title}</h3><p>{way.desc}</p></div>
                </div>
              ))}
            </div>
            <p className="participation-concepts">Participación · Información · Propuestas · Diálogo · Democracia local</p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 10 — TRANSPARENCIA (desde derecha) */}
      <section className="home-section section bg-primary-dark" id="transparencia">
        <div className="container">
          <AnimatedSection fromLeft={false}>
            <div className="transparency-wrapper">
              <div className="transparency-text">
                <span className="badge badge-primary">Transparencia</span>
                <h2 className="serif-title section-heading transparency-title">Acceso a la información pública</h2>
                <p className="transparency-lead">El Concejo trabaja con responsabilidad y transparencia para que cada vecino tenga acceso a información pública de manera <strong>clara, abierta y simple</strong>.</p>
                <ul className="transparency-list">
                  {["Publicación de normas y actos administrativos.", "Acceso a información legislativa.", "Rendición de cuentas y control institucional.", "Gestión abierta y responsable.", "Acceso público a la actividad del Concejo.", "Compromiso con la ética pública."].map((item, i) => (
                    <li key={i}><Dot size={16} /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="transparency-pillar-grid">
                {[
                  { label: "Cercana", desc: "Escucha y representa a los vecinos." },
                  { label: "Transparente", desc: "Facilita el acceso a la información pública." },
                  { label: "Participativa", desc: "Promueve la intervención ciudadana." },
                  { label: "Legislativa", desc: "Debate y sanciona normas municipales." },
                  { label: "Fiscalizadora", desc: "Controla la gestión municipal." },
                  { label: "Al servicio", desc: "Orientada al desarrollo de la comunidad." },
                ].map((pillar, i) => (
                  <div key={i} className="pillar-card"><h4>{pillar.label}</h4><p>{pillar.desc}</p></div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section className="home-section section quick-access">
        <div className="container">
          <AnimatedSection fromLeft={true}>
            <div className="section-title">
              <h2 className="serif-title">Acceso rápido</h2>
            </div>
            <div className="quick-grid">
              <Link to="/concejales" className="quick-card card">
                <Users size={32} className="quick-icon" />
                <h3>Concejales</h3>
                <p>Conocé a los representantes elegidos por la comunidad.</p>
                <span className="quick-arrow"><ArrowRight size={16} /></span>
              </Link>
              <Link to="/mesa-de-entrada-digital" className="quick-card card">
                <MessageCircle size={32} className="quick-icon" />
                <h3>Participá</h3>
                <p>Conocé cómo involucrarte en la vida democrática local.</p>
                <span className="quick-arrow"><ArrowRight size={16} /></span>
              </Link>
              <a href="https://drive.google.com/drive/folders/1bxbr6QH4fR687Prk6920Ae-qV95Jd7-j?usp=sharing" className="quick-card card" target="_blank" rel="noopener noreferrer">
                <Eye size={32} className="quick-icon" />
                <h3>Transparencia</h3>
                <p>Accedé a información pública de forma clara y simple.</p>
                <span className="quick-arrow"><ArrowRight size={16} /></span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
