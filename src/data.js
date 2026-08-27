import { form, title } from "framer-motion/client";
import sergiomuray from "./assets/concejales/sergio-muray.webp";
import marceloogas from "./assets/concejales/marcelo-ogas.webp";
import adolfochavero from "./assets/concejales/aldolfo-chavero.webp";
import martinasiri from "./assets/concejales/martina-siri.webp";
import ramiroaguilera from "./assets/concejales/ramiro-aguilera.webp";
import josecalderon from "./assets/concejales/jose-calderon.webp";
import anacampos from "./assets/concejales/ana-campos.webp";
import nancicuenca from "./assets/concejales/nanci-cuenca.webp";
import joseromano from "./assets/concejales/jose-romano.webp";
import cintiamelikmatar from "./assets/concejales/cintia-meli.webp";
import gallego from "./assets/concejales/gallego.webp"
import mercado from "./assets/concejales/mercado.webp"






export const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start
        .replace(/-+$/, '');            // Trim - from end
};

// Exported so Profiles page can import it
export const concejalesList = [
    {
        id: 10,
        name: "Marcelo Ogas",
        fullname: "Marcelo Ogas",
        role: "Concejal",
        subrole: "Presidente ",
        block: "Tucumán Primero",
        email: "marceloogas@hcdalberdi.com.ar",
        image: marceloogas,
        socials: { facebook: "https://www.facebook.com/profile.php?id=61581254049101", instagram: "https://www.instagram.com/" }
    },
    {
        id: 2,
        name: "Adolfo Díaz Chavero",
        fullname: "Héctor Adolfo Díaz Chavero",
        role: "Concejal",
        subrole: "Vicepresidente I",
        block: "Cambia Alberdi",
        email: "chavero@hcdalberdi.com.ar",
        image: adolfochavero,
        socials: { facebook: "https://www.facebook.com/adolfo.diazchavero", instagram: "https://www.instagram.com/adolfo.diazchavero" }
    },
    {
        id: 3,
        name: "Cintia Melik Matar",
        fullname: "Cintia Carolina Melik Matar",
        role: "Concejal",
        subrole: "Vicepresidente II",
        block: "Construyendo Futuro",
        email: "cmelikmatar@hcdalberdi.com.ar",
        image: cintiamelikmatar,
        socials: { facebook: "https://www.facebook.com/profile.php?id=61580780914825", instagram: "https://www.instagram.com/cintia.concejal" }
    },
    {
        id: 7,
        name: "Ramiro Aguilera",
        fullname: "Ramiro Maximiliano Aguilera",
        role: "Concejal",
        subrole: "Concejal",
        block: "Cambia Alberdi",
        email: "ramiroaguilera@hcdalberdi.com.ar",
        image: ramiroaguilera,
        socials: { facebook: "https://www.facebook.com/ramiro.aguilera.7739814", instagram: "https://www.instagram.com/ramiroaguilera94" }
    }, 
    {
        id: 6,
        name: "José Calderón",
        fullname: "José Mario Calderón",
        role: "Concejal",
        subrole: "Concejal",
        block: "Alberdi Primero",
        email: "josecalderon@hcdalberdi.com.ar",
        image: josecalderon,
        socials: { facebook: "https://www.facebook.com/calderonjosem", instagram: "https://www.instagram.com/calderon.josemario" }
    }, 
    {
        id: 5,
        name: "Ana Campos",
        fullname: "Ana Maria Campos",
        role: "Concejal",
        subrole: "Concejal",
        block: "Tucumán Primero",
        email: "anacampos@hcdalberdi.com.ar",
        image: anacampos,
        socials: { facebook: "https://www.facebook.com/profile.php?id=100091637281308", instagram: "https://www.instagram.com/" }
    }, 
    {
        id: 9,
        name: "Nanci Cuenca",
        fullname: "Nanci Cuenca",
        role: "Concejal",
        subrole: "Concejal",
        block: "Trabajando por Alberdi",
        email: "nancicuenca@hcdalberdi.com.ar",
        image: nancicuenca,
        socials: { facebook: "https://www.facebook.com/nanci.cuenca.39", instagram: "https://www.instagram.com/nanci.cuenca.39" }
    },
    {
        id: 8,
        name: "Sergio Muray",
        fullname: "Sergio Adrián Muray",
        role: "Concejal",
        subrole: "Concejal",
        block: "Justicia y Kompromiso",
        email: "sergiomuray@hcdalberdi.com.ar",
        image: sergiomuray,
        socials: { facebook: "https://www.facebook.com/profile.php?id=61579299590850", instagram: "https://www.instagram.com/sergio.muray.2025" }
    }, 
    {
        id: 1,
        name: "José Romano",
        fullname: "José Diógenes Romano",
        role: "Concejal",
        subrole: "Concejal",
        block: "Tucumán Primero",
        email: "joseromano@hcdalberdi.com.ar",
        image: joseromano,
        
    },
    {
        id: 4,
        name: "Martina Siri",
        fullname: "Martina Siri",
        role: "Concejal",
        subrole: "Concejal",
        block: "Cambia Alberdi",
        email: "martinasiri@hcdalberdi.com.ar",
        image: martinasiri,
        socials: { facebook: "https://www.facebook.com/mar.sirii", instagram: "https://www.instagram.com/mar.siri" }
    },
    {
        id: 11,
        name: "Miguel Gallego",
        fullname: "Miguel Gallego",
        role: "Secretario",
        subrole: "Secretario Parlamentario",
        image: gallego,
        socials: { facebook: "#", instagram: "https://www.instagram.com/" }
    },
    {
        id: 12,
        name: "Graciela Mercado",
        fullname: "Graciela Mercado",
        role: "Secretario",
        subrole: "Prosecretario Parlamentario",
        image: mercado,
        socials: { facebook: "#", instagram: "https://www.instagram.com/" }
    }
];


export const profilesData = {
  1: { // José Romano
    bio: `José Diógenes Romano nació el 20 de abril de 1956 y es oriundo de la ciudad de Juan Bautista Alberdi, donde nació, creció y reside hasta la actualidad. Es hijo de José Diógenes Romano y Elsa Aída Samayoa, y es padre de dos hijos.
En el ámbito profesional, cuenta con una formación vinculada a distintas áreas técnicas. Es Perito Mercantil, Técnico en Electrónica y Técnico en Telecomunicaciones. Asimismo, se desempeñó como Profesor Técnico dependiente del Consejo Nacional de Educación Técnica (CONET), con asiento en la ciudad de Concepción, desarrollando una trayectoria vinculada a la educación y a la formación técnica.
Su incursión en la actividad política se produjo en el año 1983, siguiendo una tradición familiar estrechamente vinculada al movimiento peronista. En continuidad con esa trayectoria, en el año 1984 se afilió al Partido Justicialista, espacio político en el que desarrolló gran parte de su vida y militancia institucional.
En el año 1987 presentó su primera candidatura a Concejal de la ciudad de Juan Bautista Alberdi, resultando electo y accediendo a una banca en el Honorable Concejo Deliberante, función que desempeñó hasta el año 1990.
En ese mismo año, inició una etapa de responsabilidad dentro de la administración municipal, desempeñándose como Director de Inspección General y Servicios Públicos de la Municipalidad de Juan Bautista Alberdi, funciones que ejerció hasta el año 1994.
Su trayectoria política tuvo una nueva etapa a partir del año 2003, cuando presentó su segunda candidatura a Concejal y resultó electo para el período 2003–2007. Posteriormente, renovó su representación mediante una nueva candidatura y fue nuevamente electo para el período 2007–2011, consolidando así una extensa trayectoria dentro del ámbito legislativo municipal.
A lo largo de su carrera política también desempeñó funciones en el ámbito provincial, ocupando el cargo de Coordinador de Grandes Comunas, dependiente del Ministerio del Interior del Superior Gobierno de la Provincia de Tucumán, participando en tareas de articulación y gestión vinculadas al ámbito territorial.
Posteriormente, luego del proceso de reorganización institucional del Municipio desarrollado durante el año 2025, retomó su participación en el ámbito legislativo municipal, resultando electo en las elecciones celebradas durante ese año para integrar el Honorable Concejo Deliberante durante el período 2025–2027. Actualmente se desempeña como Presidente del Bloque Tucumán Primero en el Honorable Concejo Deliberante de Juan Bautista Alberdi.
A lo largo de su trayectoria legislativa, y en las distintas oportunidades en las que accedió a una banca mediante el voto popular, presentó cientos de proyectos orientados a abordar distintas necesidades de la comunidad. Algunas de estas iniciativas fueron promulgadas y concretadas, mientras que otras continúan su tratamiento en las respectivas comisiones del cuerpo legislativo.
Su trayectoria se encuentra estrechamente vinculada con el compromiso por la justicia social, la cultura, la juventud, el deporte y el crecimiento y desarrollo de la ciudad de Juan Bautista Alberdi, ámbitos que considera fundamentales para la construcción de una comunidad con mayores oportunidades y una mejor calidad de vida para sus vecinos.
Actualmente, José Diógenes Romano continúa desarrollando su labor desde el Honorable Concejo Deliberante, reafirmando su compromiso con la representación de los vecinos y con el desarrollo institucional, social y comunitario de la ciudad de Juan Bautista Alberdi.
`,
formation: ["Perito Mercantil","Técnico en Electrónica","Técnico en Telecomunicación","Profesor Técnico dependiente del CONET"],
       commissions: [
      "Presupuesto y Hacienda",
      "Obras Públicas y Transporte",
      "Legislación y Peticiones"
    ],
projects: [
      { id: "", title: "Pedido de informe sobre agua potable", description: " Los Guayacanes: solicitud de información sobre el avance del proyecto de extensión de la red de agua potable.", date:"-"},
      { id: "", title: "Red cloacal - Barrio 1.º de Mayo", description: "Estudio técnico, proyecto y presupuesto para ampliar la red cloacal en calle Victoria María Eugenia, entre Pte. Néstor Kirchner y Club La Querencia.", date: "12/05/2026", status: "Aprobado" },
      { id: "", title: "Alumbrado público", description: "Calles Córdoba, Alvear y Marañón: colocación y reposición de luminarias para mejorar la seguridad y circulación.", date:"-"},
      { id: "", title: "Colocación de adoquines", description: "Esquina Belgrano y Echeverría: reparación de pérdida de agua y pavimentación con adoquines para evitar hundimientos y mejorar la circulación.", date:"-"},
      { id: "", title: "Plan de mejoras para la Ruta Nacional 38", description: "Reparación de iluminación, refuerzo de señalización vial y aumento de controles de tránsito y cargas pesadas.", date:"-"},
      { id: "", title: "Tapas de cloacas y cámaras de inspección", description: "Relevamiento, reparación y nivelación de tapas deterioradas o hundidas para mejorar la seguridad vial y peatonal.", date:"-"},
      { id: "", title: "Dársena - Escuela Normal", description: "Estudio, proyecto y presupuesto para la construcción de una dársena sobre calle Lídoro J. Quinteros, frente a la institución, para ordenar el ascenso y descenso de pasajeros.", date:"-"},
      { id: "", title: "Dársena de estacionamiento - Calle Lídoro J. Quinteros", description: "Estudio y construcción de una dársena para ordenar el estacionamiento y mejorar la circulación vehicular.", date:"-"},
      { id: "", title: "Iluminación en Ruta Nacional 38", description: "Pedido de cumplimiento de la resolución para gestionar la instalación de iluminación desde la cancha de Las Carreras hasta Villa Belgrano.", date:"-"},
      { id: "", title: "Infraestructura básica - Barrios y zonas rurales", description: "Obras de enripiado y nivelación de calles, extensión de la red eléctrica y provisión de agua potable.", date:"-"},
      { id: "", title: "Semáforos - Avenida Lucas Córdoba y Alvear", description: "Instalación de semáforos y control del tránsito para prevenir accidentes y ordenar la circulación vehicular.", date:"-"},
      { id: "", title: "Semaforización - Calles 25 de Mayo y Alvear", description: "estudio técnico para instalar semáforos y reforzar la  señalización vial.", date:"-"},
      { id: "", title: "Modernización tecnológica municipal", description: "Evaluación de la infraestructura informática y creación de un departamento de sistemas para digitalizar procesos y mejorar la atención ciudadana..", date:"-"},
      { id: "", title: "Agua potable - Los Guayacanes", description: "Ampliación y tendido de la red de agua potable en los tramos faltantes de la localidad y la escuela.", date:"-"},
      { id: "", title: "Muro de contención - Canal de Yaquillo", description: "Estudio y construcción de un muro para evitar desbordes y proteger los domicilios cercanos.", date:"-"}

    ]
  },
  2: { // Adolfo Diaz Chavero
    bio: `Héctor Adolfo Díaz Chavero nació el 5 de noviembre de 1986. Es hijo de Adolfo Enrique Díaz y María Rosa Chavero, y mantiene un estrecho vínculo con la ciudad de Juan Bautista Alberdi, donde ha desarrollado gran parte de su trayectoria política, institucional y social.
Su vocación de participación y compromiso con la comunidad comenzó durante su etapa universitaria, en la que tuvo una activa participación en la Facultad de Filosofía y Letras, desempeñándose como Secretario General del Centro de Estudiantes y como Consejero Estudiantil de dicha institución. Estas experiencias contribuyeron a consolidar su formación en representación, participación institucional y defensa de los intereses de distintos sectores de la comunidad educativa.
Su trayectoria política e institucional se trasladó posteriormente al ámbito municipal. Se desempeñó como Concejal de la ciudad de Juan Bautista Alberdi durante el período 2015–2019, iniciando así una etapa de participación directa en la vida legislativa de la ciudad.
Entre los años 2021 y 2023, desarrolló funciones en la administración pública de la capital tucumana, desempeñándose como Subdirector de Relaciones Institucionales de la Municipalidad de San Miguel de Tucumán, donde participó en tareas vinculadas al fortalecimiento de los vínculos institucionales y la articulación entre distintos actores de la comunidad.
Posteriormente, regresó al ámbito legislativo municipal para el período 2023–2027 y, tras el proceso de reorganización institucional del Municipio desarrollado durante el año 2025, fue nuevamente electo para el período 2025–2027. Actualmente se desempeña como Presidente del Bloque Cambia Alberdi y forma parte de la Mesa Directiva del Honorable Concejo Deliberante de Juan Bautista Alberdi, ejerciendo el cargo de Vicepresidente I.
A lo largo de su trayectoria, ha demostrado un marcado compromiso con las cuestiones sociales, culturales y deportivas, entendiendo la participación comunitaria como una herramienta fundamental para el desarrollo y fortalecimiento de la sociedad.
Su vínculo con el deporte ocupa también un lugar significativo en su recorrido. Se desempeñó como Presidente de la Subcomisión de Rugby del Club La Querencia, participando activamente en la promoción y desarrollo de esta disciplina y en el acompañamiento de las actividades deportivas de la institución.
Su trayectoria reúne experiencias en los ámbitos estudiantil, político, legislativo, administrativo, social, cultural y deportivo, construyendo un perfil caracterizado por la participación institucional y el compromiso con la comunidad de Juan Bautista Alberdi y con la provincia de Tucumán.`
,
    commissions: [
      "Relaciones Laborales, Política Ocupacional, Seguridad e Higiene en el Trabajo",
      "Preservación del Patrimonio de la Ciudad",
      "Políticas de Género, Mujeres y Diversidad"
    ],
 projects: [
      {id:"",title:"Proyecto de ordenanza: Creación del Comité de Emergencia", description:"Propone crear un Comité de Emergencia Municipal coordinado ante crisis climáticas, sanitarias y de seguridad pública.", date:"16/03/2026"},
      {id:"",title:"Proyecto de ordenanza: Creación del Portal de Ingreso a la Ciudad", description:"Propone diseñar y edificar un Portal de Ingreso identitario en el acceso principal de la ciudad sobre la Ruta Provincial 38.", date:"01/12/2025"},
      {id:"",title:"Proyecto de comunicación: Plan Integral Pre-Lluvias", description:"Exige al Departamento Ejecutivo realizar de urgencia el mantenimiento preventivo, dragado y desmalezamiento de la red de canales pluviales antes del verano.", date:"17/11/2025"},
      {id:"",title:"Proyecto de Ordenanza: Régimen de transparencia, fundamentación y protección del personal contratado municipal",description:"La necesidad de garantizar transparencia, razonabilidad y debido proceso administrativo en las decisiones vinculadas a la rescisión de contratos del personal municipal", date:"18/05/2026"},
      {id:"",title:"Proyecto de resolución: Informe de Ejecución Presupuestaria y Estado Financiero Municipal", description:"Iniciativa para solicitar formalmente las cuentas bancarias, deudas de proveedores e ingresos percibidos de la actual gestión.", date:"-"},
      {id:"",title:"Proyecto de resolución: Limpieza y adecuación de alcantarillas en Barrio Jardín", description:"Reclama la limpieza urgente del canal pluvial de calle Tacuarí y la ampliación de la capacidad de alcantarillas en el cruce de la Ruta Nacional 38.", date:"-"},
      {id:"",title:"Proyecto de resolución: Estudios técnicos para red cloacal en Av. Lídoro J. Quinteros y calle Cabildo", description:"Solicita evaluar la factibilidad técnica y buscar financiamiento para construir la red de cloacas en un sector carente de saneamiento básico.", date:"-"},
      {id:"",title:"Proyecto de resolución: Solicitud de informe administrativo post-intervención", description:"Exige al Ejecutivo un informe detallado del estado financiero, patrimonial, deudas, personal y contratos vigentes heredados del periodo de intervención.", date:"-"},
      {id:"",title:"Proyecto de resolución: Acciones para planta de tratamiento de líquidos cloacales", description:"Sugerencia para gestionar ante la SAT y la Provincia la localización o expropiación de un terreno apto para instalar una planta de tratamiento de residuos cloacales.", date:"-"},
      {id:"",title:"Proyecto de resolución: Prórroga de sesiones ordinarias del Honorable Concejo Deliberante", description:"Propone prorrogar por 30 días las sesiones ordinarias del HCD ante la tardía asunción de concejales post-intervención.", date:"4/11/2025"},
      {id:"",title:"Proyecto de resolución: Infraestructura hidráulica para prevenir anegamientos en Barrio Jardín", description:"Petición urgente para desobstruir el canal a cielo abierto e incrementar el tamaño de alcantarillas en el cruce de la Ruta Nacional 38.", date:"20/04/2026"},
      {id:"",title:"Proyecto de comunicación: Solicitud de implementación de Boleta Única y reforma política", description:"Insta a la Legislatura provincial a tratar la reforma electoral para eliminar el régimen de acoples y aplicar la Boleta Única.", date:"-"},
      {id:"",title:"Proyecto de resolución: Exigencia de cumplimiento de la Ordenanza N.º 04/2025", description:"Sanción para intimar al Ejecutivo Municipal a que realice el enripiado, alumbrado y señalización obligatoria del camino rural Los Arroyos", date:"15/12/2025"},
      {id:"",title:"Proyecto de ordenanza: Creación del Programa de Protección de Derechos Animales", description:"Propone regulaciones para campañas de castración segura con análisis de sangre previos obligatorios e instalación de comederos y bebederos públicos.", date:"15/12/2025"},
      {id:"",title:"Proyecto de comunicación: Diagnóstico sobre el servicio de agua potable", description:"Requiere una minuta de comunicación para exigir a la SAT un informe del estado operativo, de mantenimiento y de fallas en el suministro local", date:"17/11/2025"},
      {id:"",title:"Proyecto de ordenanza: Preservación del carácter institucional y neutralidad del Estado", description:"Propone prohibir la rotulación o ploteo de maquinarias, vehículos y edificios públicos con nombres de políticos vigentes, ex intendentes o slogans partidarios.", date:"-"},
      {id:"",title:"Proyecto de comunicación: Aplicación de la Ordenanza N.º 05/2012 de ruidos molestos", description:"Reclama al Ejecutivo Municipal que haga efectiva la prohibición y los controles sobre motocicletas que circulan con caños de escape libres o modificados.", date:"01/12/2025"},
      {id:"",title:"Proyecto de comunicación: Pedido de informe sobre obra de caminería en el Complejo Municipal", description:"Minuta que solicita detalles técnicos, plazos y costos de la caminería interna que interfiere con canchas de básquetbol y hockey.", date:"13/06/2026"},
      {id:"",title:"Proyecto de resolución: Reconocimiento a la estudiante Eowlyn Montenegro", description:"Sanciona felicitaciones y pide evaluar colaboración presupuestaria para la estudiante local seleccionada por Space Kidz India para el diseño del satélite 'ShakthiSAT'.", date:"-"},  
      
    ]
  },
  3: { // Cintia Melik Matar
    bio: `Cintia Carolina Melik Matar nació el 7 de agosto de 1984. Es hija de José Melik Matar y Griselda del Valle Juárez, y hermana de Vanesa y Romina Melik Matar.

  Está casada con Franco Antonio Juárez y es mamá de José Antonio Juárez Melik Matar y Julieta Sofía Juárez Melik Matar.

A lo largo de su trayectoria ha desarrollado su actividad profesional en distintos ámbitos, vinculados al ejercicio de la profesión contable, la actividad aseguradora, la docencia y el sector inmobiliario.

Su formación y experiencia profesional se complementan actualmente con su compromiso con la comunidad de Juan Bautista Alberdi, desde su función como concejal del Honorable Concejo Deliberante.

Desde este rol, orienta su trabajo legislativo a la atención de las necesidades de los vecinos, el impulso de iniciativas para mejorar los distintos barrios y espacios de la ciudad, el fortalecimiento de las instituciones y la generación de propuestas que contribuyan al desarrollo de Juan Bautista Alberdi.`,
    
formation: "Contadora Pública Nacional",
commissions: ["Preservacion del patrimonio de  la ciudad", "Politicas de Genero, mujeres y diversidad","Legislación y Peticiones","Educacion y Cultura, Turismo y Deportes, Salud y Consevacion Ambiental","Presupuesto y Hacienda"],
    projects: [
      { id: "EXP-095-2026", title: "Proyecto de embellecimiento y puesta en valor del acceso principal a Juan Bautista Alberdi", description: "", date: "01/03/2026" },
      { id: "EXP-156-2026", title: "Proyecto “Concejo Joven“.", description: "Destinado a acercar el funcionamiento del Honorable Concejo Deliberante a los estudiantes y promover la participación ciudadana y la formación democrática de los jóvenes.", date: "15/04/2026" },
      { id: "EXP-178-2026", title: "Proyecto de reparación y mejoramiento de veredas en distintos sectores de la ciudad.", description: "", date: "10/05/2026" },
      { id: "EXP-187-2026", title: "Proyecto de iluminación y mejoramiento del alumbrado público en sectores de la ciudad que presentan deficiencias.", description: "", date: "20/05/2026" },
      { id: "EXP-189-2026", title: "Proyecto de recuperación y puesta en valor de espacios públicos y balnearios", description: "", date: "24/05/2026" }
    ]
  },
  4: { // Martina Siri
    bio: `Martina nació el 10 de julio de 1999 y creció en Juan Bautista Alberdi, la ciudad que desde muy chica sintió profundamente propia. Tuvo una infancia marcada por la felicidad y rodeada de su familia, compuesta por cinco integrantes, que ocupa un lugar fundamental en su vida: son su sostén, su motivación y, sobre todo, quienes le inculcaron los valores que hoy guían cada una de sus decisiones. “Mis padres y mis amistades son un pilar importante: son quienes me enseñaron el respeto, la empatía, la disciplina, el compromiso y la importancia de distinguir lo que está bien de lo que está mal”, cuenta.
Desde joven se interesó en distintas áreas de formación: estudió arquitectura y luego se orientó hacia la publicidad, donde realizó diversas certificaciones vinculadas a la comunicación, el marketing y la publicidad, disciplina que continúa estudiando en la actualidad.
Su camino laboral comenzó desde muy joven, como creadora de contenido y en la gestión de redes sociales. También tuvo la oportunidad de emprender. Cada una de esas experiencias le permitió conocer distintas realidades, aprender, equivocarse, creer y entender que detrás de cada proyecto siempre hay personas, sueños y esfuerzo.
Pero si hay algo que define a Martina es su pasión por Alberdi: un sentido de pertenencia bien arraigado. En un momento de su vida vivió en San Miguel de Tucumán y decidió dejarlo todo porque sentía que no podía mirar desde lejos cómo Alberdi se apagaba. Esa sensación se transformó en una pregunta que cambió su camino: ¿por qué no involucrarse y hacer algo para cambiarlo?
Así comenzó su participación en la política y en el trabajo comunitario, convencida de que transformar una sociedad requiere dejar de mirar solamente lo individual y empezar a mirar en conjunto.
Para Martina, representar a los vecinos significa ponerse en sus zapatos, escuchar sus necesidades y llevar esas voces a los espacios donde se toman las decisiones. Entiende la política como una herramienta para construir una sociedad donde cada persona pueda desarrollarse y donde existan oportunidades reales para todos.
La educación, la salud y el deporte ocupan un lugar especialmente importante en su visión de comunidad. El deporte forma parte de su propia historia: juega al hockey desde muy chica y practicó distintas disciplinas a lo largo de su vida. Disfruta acompañar y ver crecer a los deportistas, especialmente cuando representan a Alberdi. Para ella, cada cancha, cada partido y cada deportista alberdiano son también una forma de identidad y orgullo por su ciudad.
Entre sus principales objetivos está abrir puertas y generar oportunidades para que los jóvenes y los adultos puedan desarrollar sus proyectos de vida sin tener que alejarse de su lugar de origen. Cree profundamente que, para cambiar una comunidad, primero hay que involucrarse en ella.
Se define como una persona apasionada, incansable y empática. Considera que la empatía es una de sus mayores fortalezas: la capacidad de ponerse en el lugar del otro, entender diferentes realidades y actuar desde ahí.
Su sueño siempre fue profesionalizarse para poder ayudar. Pero detrás de ese sueño existe uno mucho más profundo: lograr un cambio real.
Porque para Martina, cambiar una ciudad no empieza necesariamente con grandes discursos. Empieza cuando alguien decide escuchar, quedarse, involucrarse, ocuparse.
Y ella eligió hacerlo en Alberdi, la ciudad que ama y que decidió llamar hogar.`
,
formation:"Marketing digital y publicidad.",
    commissions: [
      "Obras Públicas y Transporte",
      "Educación y Cultura, Turismo y Deportes, Salud y Conservación Ambiental",
      "Preservación del Patrimonio de la Ciudad",
      "Legislación y Peticiones",
      "Políticas de Género, Mujeres y Diversidad"
    ],
    projects: [
      {id:"",title:"Proyecto de ordenanza: Creación del Comité de Emergencia", description:"Propone crear un Comité de Emergencia Municipal coordinado ante crisis climáticas, sanitarias y de seguridad pública.", date:"16/03/2026"},
      {id:"",title:"Proyecto de ordenanza: Creación del Portal de Ingreso a la Ciudad", description:"Propone diseñar y edificar un Portal de Ingreso identitario en el acceso principal de la ciudad sobre la Ruta Provincial 38.", date:"01/12/2025"},
      {id:"",title:"Proyecto de comunicación: Plan Integral Pre-Lluvias", description:"Exige al Departamento Ejecutivo realizar de urgencia el mantenimiento preventivo, dragado y desmalezamiento de la red de canales pluviales antes del verano.", date:"17/11/2025"},
      {id:"",title:"Proyecto de Ordenanza: Régimen de transparencia, fundamentación y protección del personal contratado municipal",description:"La necesidad de garantizar transparencia, razonabilidad y debido proceso administrativo en las decisiones vinculadas a la rescisión de contratos del personal municipal", date:"18/05/2026"},
      {id:"",title:"Proyecto de resolución: Informe de Ejecución Presupuestaria y Estado Financiero Municipal", description:"Iniciativa para solicitar formalmente las cuentas bancarias, deudas de proveedores e ingresos percibidos de la actual gestión.", date:"-"},
      {id:"",title:"Proyecto de resolución: Limpieza y adecuación de alcantarillas en Barrio Jardín", description:"Reclama la limpieza urgente del canal pluvial de calle Tacuarí y la ampliación de la capacidad de alcantarillas en el cruce de la Ruta Nacional 38.", date:"-"},
      {id:"",title:"Proyecto de resolución: Estudios técnicos para red cloacal en Av. Lídoro J. Quinteros y calle Cabildo", description:"Solicita evaluar la factibilidad técnica y buscar financiamiento para construir la red de cloacas en un sector carente de saneamiento básico.", date:"-"},
      {id:"",title:"Proyecto de resolución: Solicitud de informe administrativo post-intervención", description:"Exige al Ejecutivo un informe detallado del estado financiero, patrimonial, deudas, personal y contratos vigentes heredados del periodo de intervención.", date:"-"},
      {id:"",title:"Proyecto de resolución: Acciones para planta de tratamiento de líquidos cloacales", description:"Sugerencia para gestionar ante la SAT y la Provincia la localización o expropiación de un terreno apto para instalar una planta de tratamiento de residuos cloacales.", date:"-"},
      {id:"",title:"Proyecto de resolución: Prórroga de sesiones ordinarias del Honorable Concejo Deliberante", description:"Propone prorrogar por 30 días las sesiones ordinarias del HCD ante la tardía asunción de concejales post-intervención.", date:"4/11/2025"},
      {id:"",title:"Proyecto de resolución: Infraestructura hidráulica para prevenir anegamientos en Barrio Jardín", description:"Petición urgente para desobstruir el canal a cielo abierto e incrementar el tamaño de alcantarillas en el cruce de la Ruta Nacional 38.", date:"20/04/2026"},
      {id:"",title:"Proyecto de comunicación: Solicitud de implementación de Boleta Única y reforma política", description:"Insta a la Legislatura provincial a tratar la reforma electoral para eliminar el régimen de acoples y aplicar la Boleta Única.", date:"-"},
      {id:"",title:"Proyecto de resolución: Exigencia de cumplimiento de la Ordenanza N.º 04/2025", description:"Sanción para intimar al Ejecutivo Municipal a que realice el enripiado, alumbrado y señalización obligatoria del camino rural Los Arroyos", date:"15/12/2025"},
      {id:"",title:"Proyecto de ordenanza: Creación del Programa de Protección de Derechos Animales", description:"Propone regulaciones para campañas de castración segura con análisis de sangre previos obligatorios e instalación de comederos y bebederos públicos.", date:"15/12/2025"},
      {id:"",title:"Proyecto de comunicación: Diagnóstico sobre el servicio de agua potable", description:"Requiere una minuta de comunicación para exigir a la SAT un informe del estado operativo, de mantenimiento y de fallas en el suministro local", date:"17/11/2025"},
      {id:"",title:"Proyecto de ordenanza: Preservación del carácter institucional y neutralidad del Estado", description:"Propone prohibir la rotulación o ploteo de maquinarias, vehículos y edificios públicos con nombres de políticos vigentes, ex intendentes o slogans partidarios.", date:"-"},
      {id:"",title:"Proyecto de comunicación: Aplicación de la Ordenanza N.º 05/2012 de ruidos molestos", description:"Reclama al Ejecutivo Municipal que haga efectiva la prohibición y los controles sobre motocicletas que circulan con caños de escape libres o modificados.", date:"01/12/2025"},
      {id:"",title:"Proyecto de comunicación: Pedido de informe sobre obra de caminería en el Complejo Municipal", description:"Minuta que solicita detalles técnicos, plazos y costos de la caminería interna que interfiere con canchas de básquetbol y hockey.", date:"13/06/2026"},
      {id:"",title:"Proyecto de resolución: Reconocimiento a la estudiante Eowlyn Montenegro", description:"Sanciona felicitaciones y pide evaluar colaboración presupuestaria para la estudiante local seleccionada por Space Kidz India para el diseño del satélite 'ShakthiSAT'.", date:"-"},  
      
    ]
  },
  5: { // Ana Campos
    bio: `Ana María Campos desarrolla desde el año 2003 una sostenida trayectoria de participación social y comunitaria, vinculada estrechamente con el acompañamiento a vecinos, familias e instituciones de su comunidad.
Desde sus comienzos, trabajó junto a un grupo de vecinos de su localidad, impulsada por el compromiso de acompañar, gestionar y buscar soluciones a las distintas necesidades de la comunidad. A lo largo de estos años, desarrolló principalmente una labor de carácter social y comunitario, realizando gestiones destinadas a brindar respuestas y acompañamiento a vecinos y familias ante diferentes necesidades.
Como parte de este recorrido, mantuvo una permanente vocación de capacitación y formación, procurando incorporar nuevas herramientas y conocimientos que le permitieran fortalecer y mejorar su tarea de acompañamiento comunitario.
Su trabajo se caracterizó por un fuerte vínculo con el territorio, basado en la escucha activa de los vecinos, el contacto directo con la comunidad y el trabajo conjunto para abordar las distintas realidades y necesidades de la zona. Dentro de esta tarea, tuvo especial consideración por el acompañamiento a niños, jóvenes y estudiantes, colaborando con instituciones educativas y participando en gestiones orientadas a atender diferentes necesidades de la comunidad.
Su trayectoria social y comunitaria encontró posteriormente una continuidad en el ámbito político y legislativo municipal. En este marco, regresó al ámbito legislativo municipal para el período 2023–2027 y, tras el proceso de reorganización institucional del Municipio desarrollado durante el año 2025, fue nuevamente electa para el período 2025–2027.
Actualmente se desempeña como Concejal del Honorable Concejo Deliberante de la ciudad de Juan Bautista Alberdi, desde donde continúa desarrollando su labor con el mismo compromiso que ha caracterizado su trayectoria, llevando al ámbito legislativo las necesidades, inquietudes y propuestas de los vecinos, tanto de la ciudad como de las zonas rurales.
Su recorrido representa una trayectoria construida desde el trabajo territorial, la participación comunitaria y el compromiso social, consolidando una vocación de servicio orientada al acompañamiento de las familias y al fortalecimiento de los vínculos entre la comunidad y sus instituciones.
`,
formation:"Perito Mercantil",
     commissions: [
      "Presupuesto y Hacienda",
      "Obras Públicas y Transporte",
      "Educación y Cultura, Turismo y Deportes, Salud y Conservación Ambiental",
      "Relaciones Laborales, Política Ocupacional, Seguridad e Higiene en el Trabajo",
      "Políticas de Género, Mujeres y Diversidad"
    ],
projects: [
      { id: "", title: "Pedido de informe sobre agua potable", description: " Los Guayacanes: solicitud de información sobre el avance del proyecto de extensión de la red de agua potable.", date:"-"},
      { id: "", title: "Red cloacal - Barrio 1.º de Mayo", description: "Estudio técnico, proyecto y presupuesto para ampliar la red cloacal en calle Victoria María Eugenia, entre Pte. Néstor Kirchner y Club La Querencia.", date: "12/05/2026", status: "Aprobado" },
      { id: "", title: "Alumbrado público", description: "Calles Córdoba, Alvear y Marañón: colocación y reposición de luminarias para mejorar la seguridad y circulación.", date:"-"},
      { id: "", title: "Colocación de adoquines", description: "Esquina Belgrano y Echeverría: reparación de pérdida de agua y pavimentación con adoquines para evitar hundimientos y mejorar la circulación.", date:"-"},
      { id: "", title: "Plan de mejoras para la Ruta Nacional 38", description: "Reparación de iluminación, refuerzo de señalización vial y aumento de controles de tránsito y cargas pesadas.", date:"-"},
      { id: "", title: "Tapas de cloacas y cámaras de inspección", description: "Relevamiento, reparación y nivelación de tapas deterioradas o hundidas para mejorar la seguridad vial y peatonal.", date:"-"},
      { id: "", title: "Dársena - Escuela Normal", description: "Estudio, proyecto y presupuesto para la construcción de una dársena sobre calle Lídoro J. Quinteros, frente a la institución, para ordenar el ascenso y descenso de pasajeros.", date:"-"},
      { id: "", title: "Dársena de estacionamiento - Calle Lídoro J. Quinteros", description: "Estudio y construcción de una dársena para ordenar el estacionamiento y mejorar la circulación vehicular.", date:"-"},
      { id: "", title: "Iluminación en Ruta Nacional 38", description: "Pedido de cumplimiento de la resolución para gestionar la instalación de iluminación desde la cancha de Las Carreras hasta Villa Belgrano.", date:"-"},
      { id: "", title: "Infraestructura básica - Barrios y zonas rurales", description: "Obras de enripiado y nivelación de calles, extensión de la red eléctrica y provisión de agua potable.", date:"-"},
      { id: "", title: "Semáforos - Avenida Lucas Córdoba y Alvear", description: "Instalación de semáforos y control del tránsito para prevenir accidentes y ordenar la circulación vehicular.", date:"-"},
      { id: "", title: "Semaforización - Calles 25 de Mayo y Alvear", description: "estudio técnico para instalar semáforos y reforzar la  señalización vial.", date:"-"},
      { id: "", title: "Modernización tecnológica municipal", description: "Evaluación de la infraestructura informática y creación de un departamento de sistemas para digitalizar procesos y mejorar la atención ciudadana..", date:"-"},
      { id: "", title: "Agua potable - Los Guayacanes", description: "Ampliación y tendido de la red de agua potable en los tramos faltantes de la localidad y la escuela.", date:"-"},
      { id: "", title: "Muro de contención - Canal de Yaquillo", description: "Estudio y construcción de un muro para evitar desbordes y proteger los domicilios cercanos.", date:"-"}

    ]
  },
  6: { // José Calderón
    bio: `José Mario Calderón, de 42 años, es Contador Público Nacional egresado de la Universidad Nacional de Tucumán, institución en la que además realizó estudios de posgrado en Especialización en Administración Pública.
Su formación comenzó en el Liceo Militar General Gregorio Aráoz de Lamadrid, donde incorporó valores vinculados con la disciplina, el compromiso, la responsabilidad y el servicio, principios que posteriormente trasladó a su desarrollo profesional y a su actividad pública.
Está casado con Susana Giménez y es padre de dos hijos, José Agustín, de 11 años, y Guillermina, de 9 años.
En el ámbito profesional, desarrolla su actividad en el estudio contable fundado por su padre hace más de 40 años, dando continuidad a una trayectoria familiar vinculada al ejercicio profesional y al acompañamiento de personas, empresas e instituciones.
Asimismo, desarrolla actividades comerciales y agrícolas junto a su familia, manteniendo un vínculo directo con distintos sectores productivos y económicos de la comunidad.
En el ámbito institucional, se desempeña como miembro de la Subcomisión del Sector Público del Colegio de Graduados en Ciencias Económicas de Tucumán (CGCET), espacio dedicado al intercambio, la capacitación y la formación permanente de profesionales vinculados a la administración y gestión pública.
Trayectoria legislativa
Desde su asunción como concejal y hasta la fecha, el CPN José Mario Calderón lleva presentados 296 proyectos legislativos, convirtiendo su labor parlamentaria en uno de los principales ejes de su gestión.
Su producción legislativa abarca distintas áreas de interés para la comunidad, con iniciativas orientadas a fortalecer la transparencia, la institucionalidad, la educación, la juventud, el empleo, la salud, el ambiente, la seguridad vial, la inclusión social y la participación ciudadana.

Una gestión legislativa orientada a la comunidad
La labor del CPN José Mario Calderón se caracteriza por una mirada integral sobre la función legislativa, procurando que el Concejo Deliberante no sea únicamente un ámbito de tratamiento de ordenanzas y resoluciones, sino también un espacio de generación de propuestas, control institucional, participación ciudadana y construcción de políticas públicas.
Los 296 proyectos presentados reflejan una agenda legislativa amplia y diversificada, que aborda problemáticas concretas de los vecinos y, al mismo tiempo, propone herramientas de planificación y desarrollo para el futuro de Juan Bautista Alberdi.
Su formación como contador público y especialista en Administración Pública constituye una base profesional desde la cual aborda la gestión legislativa, combinando el conocimiento técnico con una perspectiva orientada al desarrollo institucional, económico y social de la comunidad.

Entre sus principales iniciativas se destacan:

Institucionalidad, transparencia y modernización
Presentación voluntaria de declaraciones juradas de ingresos y bienes de los funcionarios.
Transmisión en vivo de las sesiones del Honorable Concejo Deliberante.
Modificación de la organización del HCD y del Reglamento Interno.
Adhesión a la Ley de Ficha Limpia.
Adhesión a la legislación vinculada al cupo de personas con discapacidad.
Iniciativas destinadas a fortalecer el acceso ciudadano a la información pública y la transparencia institucional.

Educación y formación
Programa de Becas Municipales para estudiantes.
Programa de Formación en Ciudadanía y Participación Democrática.
Pasantías Educativas.
Programa Municipal de Apoyo a la Formación de Oficios.
Proyectos de vinculación entre capacitación, formación en oficios y salida laboral.
Iniciativas destinadas a promover la formación y participación de jóvenes.

Juventud y participación
Observatorio Municipal de Bienestar Juvenil.
Programa Alberdi Joven Productivo.
Proyecto de actividades de formación y participación juvenil.
Proyecto Estudiantina Juvenil “Jóvenes que Cuidan 2026”.
Programas destinados a generar oportunidades de capacitación, participación y desarrollo para los jóvenes de la ciudad.

Empleo, producción y emprendedurismo
Registro Municipal de Emprendedores.
Programa de vinculación entre capacitación, oficios y oportunidades laborales.
Iniciativas de promoción de emprendimientos y actividades productivas locales.
Propuestas orientadas a fortalecer la economía local y generar herramientas para la inserción laboral.

Salud y prevención
Red de Acompañamiento para la Prevención del Suicidio.
Campañas de prevención y concientización sobre distintas problemáticas de salud.
Proyectos vinculados a discapacidad y atención pediátrica.
Iniciativas de promoción de la prevención y el cuidado integral de la salud.

Desarrollo social e inclusión
Proyecto de Albergue Transitorio.
Sistema Integral de Vulnerabilidad Social.
Proyectos de asistencia y regulación de instituciones.
Iniciativas de acompañamiento a instituciones intermedias.
Propuestas orientadas a fortalecer las políticas de inclusión y acompañamiento social.

Ambiente y planificación urbana
Plan Hídrico Municipal.
Plan Integral de Gestión de Residuos Sólidos Urbanos.
Proyecto de Gestión Ambiental Municipal.
Iniciativas destinadas a promover una planificación urbana y ambiental sostenible.

Seguridad vial y movilidad
Observatorio Vial Municipal.
Propuestas destinadas a mejorar la seguridad vial.
Iniciativas de prevención y concientización en materia de tránsito y movilidad urbana.

Cultura e identidad comunitaria
Reconocimiento y declaración de interés municipal de actividades culturales.
Acompañamiento institucional a propuestas culturales, educativas, sociales y comunitarias desarrolladas en la ciudad.

`,
    commissions: [
      "Obras Públicas y Transporte",
      "Educación y Cultura, Turismo y Deportes, Salud y Conservación Ambiental",
      "Relaciones Laborales, Política Ocupacional, Seguridad e Higiene en el Trabajo",
      "Preservación del Patrimonio de la Ciudad",
      "Legislación y Peticiones"
    ],
    formation: "Contador Público Nacional",
    projects: [

    ]
  },
  7: { // Ramiro Aguilera
    bio: `Ramiro Maximiliano Aguilera nació el 11 de septiembre de 1994 y es, ante todo, un hijo de Juan Bautista Alberdi, la ciudad que lo vio nacer, crecer, formarse y construir los vínculos y valores que hoy definen quién es.
Es hijo de Eduardo Orlando Aguilera y Laura Estela Cortavitarte. Sus raíces familiares están profundamente ligadas a la comunidad. Entre ellas ocupa un lugar especial su abuela, María Esther Cortavitarte, reconocida enfermera de la ciudad, cuya vocación de servicio y compromiso con los demás forman parte de la historia familiar que lo acompaña.
Su historia educativa comenzó en el Jardín de Infantes de la Escuela N.º 84 José María del Campo, conocida también como FEMP. Allí transitó sus primeros años y cursó parte de su educación primaria hasta quinto grado.
Luego continuó sus estudios en la Escuela Normal Superior Florentino Ameghino, institución en la que completó su educación secundaria.
Durante esa etapa no solo construyó su formación académica, sino también muchos de los vínculos, experiencias y aprendizajes que marcaron su vida. Uno de ellos fue haber sido abanderado durante su etapa secundaria, reconocimiento que recuerda con especial orgullo y que representó para él el valor del esfuerzo, la responsabilidad y la dedicación.
Su formación continuó más allá de la escuela. Estudió inglés y completó la formación dictada en el Instituto de Inglés OUTSET, a cargo del profesor Sebastián Silva.
En el ámbito universitario eligió el camino del Derecho. Es Procurador y actualmente se encuentra cursando sus últimas materias de la carrera de Abogacía, con el objetivo de completar próximamente su formación profesional y obtener el título de abogado.

EL DEPORTE COMO ESCUELA DE VIDA

Desde muy chico, Ramiro encontró en el deporte una manera de crecer, compartir y aprender.
Su infancia estuvo especialmente vinculada al Club Los Amigos, donde desarrolló su pasión por el fútbol y compartió innumerables experiencias junto a otros chicos de la ciudad.
También tuvo la oportunidad de formar parte del Club Juan Bautista Alberdi, participando en la disciplina de básquet. Esta experiencia le permitió conocer el valor de pertenecer a una institución, representar sus colores y compartir objetivos con un equipo.
El deporte le enseñó valores que conserva hasta el día de hoy: el compañerismo, la disciplina, el esfuerzo, la perseverancia y, sobre todo, la importancia de entender que los objetivos se alcanzan trabajando junto a otros.
LA FE Y EL COMPROMISO CON LOS DEMÁS

Su vínculo con la Parroquia también ocupa un lugar importante en su historia.
Desde joven tuvo una participación activa en distintas actividades de misión y formó parte del Movimiento de la Palabra de Dios. Actualmente continúa vinculado al trabajo comunitario como colaborador de Cáritas, espacio desde el cual acompaña y está cerca de quienes más necesitan de la comunidad.
La solidaridad, el compromiso y la posibilidad de ayudar al otro son valores que considera fundamentales y que forman parte de su manera de entender la vida en comunidad.

SU COMPROMISO POLÍTICO

Su participación política comenzó muy temprano. A los 13 años se incorporó a la Juventud Radical, espacio político en el que milita desde entonces.
A lo largo de estos años tuvo la posibilidad de asumir diferentes responsabilidades, entre ellas la de Presidente de la Juventud Radical, y de acompañar distintas listas y proyectos electorales.
Su recorrido político se encuentra ligado a una visión de la política desde el espacio de la derecha, basada en convicciones y en la búsqueda de una sociedad donde el esfuerzo, el trabajo, la educación, la responsabilidad y la libertad tengan un lugar central.
Para Ramiro, la política no debe ser solamente una actividad electoral. Es, fundamentalmente, una herramienta para transformar la realidad y para involucrarse en los problemas concretos de la gente.

SU SUEÑO PARA ALBERDI

Todo lo que ha vivido —su familia, su educación, su formación profesional, el deporte, la parroquia, las instituciones y la política— tiene un punto en común: Juan Bautista Alberdi.
Esta es la ciudad donde nació, donde creció y donde están sus afectos. Por eso, uno de sus mayores sueños y objetivos es poder transformar la realidad de su ciudad y contribuir a construir el Alberdi que sus vecinos merecen.
Sueña con una ciudad donde cada barrio tenga los servicios básicos que necesita, donde exista planificación, organización y oportunidades para todos.
Sueña con un Alberdi organizado, pujante y en desarrollo, que pueda crecer sin perder sus raíces y que encuentre en sus propios vecinos la fuerza para salir adelante.
Cree profundamente que las transformaciones no se hacen de un día para el otro ni dependen de una sola persona. Se construyen con trabajo, compromiso, perseverancia y, fundamentalmente, con una comunidad que decide involucrarse.
Su historia todavía se sigue escribiendo.
Y quiere que las próximas páginas tengan como protagonista a la ciudad que lo vio nacer, crecer y soñar: Juan Bautista Alberdi.`,
    commissions: [
      "Presupuesto y Hacienda",
      "Relaciones Laborales, Política Ocupacional, Seguridad e Higiene en el Trabajo",
      "Legislación y Peticiones"
    ],
    formation: "Procurador",
    projects: [
      {id:"",title:"Proyecto de ordenanza: Creación del Comité de Emergencia", description:"Propone crear un Comité de Emergencia Municipal coordinado ante crisis climáticas, sanitarias y de seguridad pública.", date:"16/03/2026"},
      {id:"",title:"Proyecto de ordenanza: Creación del Portal de Ingreso a la Ciudad", description:"Propone diseñar y edificar un Portal de Ingreso identitario en el acceso principal de la ciudad sobre la Ruta Provincial 38.", date:"01/12/2025"},
      {id:"",title:"Proyecto de comunicación: Plan Integral Pre-Lluvias", description:"Exige al Departamento Ejecutivo realizar de urgencia el mantenimiento preventivo, dragado y desmalezamiento de la red de canales pluviales antes del verano.", date:"17/11/2025"},
      {id:"",title:"Proyecto de Ordenanza: Régimen de transparencia, fundamentación y protección del personal contratado municipal",description:"La necesidad de garantizar transparencia, razonabilidad y debido proceso administrativo en las decisiones vinculadas a la rescisión de contratos del personal municipal", date:"18/05/2026"},
      {id:"",title:"Proyecto de resolución: Informe de Ejecución Presupuestaria y Estado Financiero Municipal", description:"Iniciativa para solicitar formalmente las cuentas bancarias, deudas de proveedores e ingresos percibidos de la actual gestión.", date:"-"},
      {id:"",title:"Proyecto de resolución: Limpieza y adecuación de alcantarillas en Barrio Jardín", description:"Reclama la limpieza urgente del canal pluvial de calle Tacuarí y la ampliación de la capacidad de alcantarillas en el cruce de la Ruta Nacional 38.", date:"-"},
      {id:"",title:"Proyecto de resolución: Estudios técnicos para red cloacal en Av. Lídoro J. Quinteros y calle Cabildo", description:"Solicita evaluar la factibilidad técnica y buscar financiamiento para construir la red de cloacas en un sector carente de saneamiento básico.", date:"-"},
      {id:"",title:"Proyecto de resolución: Solicitud de informe administrativo post-intervención", description:"Exige al Ejecutivo un informe detallado del estado financiero, patrimonial, deudas, personal y contratos vigentes heredados del periodo de intervención.", date:"-"},
      {id:"",title:"Proyecto de resolución: Acciones para planta de tratamiento de líquidos cloacales", description:"Sugerencia para gestionar ante la SAT y la Provincia la localización o expropiación de un terreno apto para instalar una planta de tratamiento de residuos cloacales.", date:"-"},
      {id:"",title:"Proyecto de resolución: Prórroga de sesiones ordinarias del Honorable Concejo Deliberante", description:"Propone prorrogar por 30 días las sesiones ordinarias del HCD ante la tardía asunción de concejales post-intervención.", date:"4/11/2025"},
      {id:"",title:"Proyecto de resolución: Infraestructura hidráulica para prevenir anegamientos en Barrio Jardín", description:"Petición urgente para desobstruir el canal a cielo abierto e incrementar el tamaño de alcantarillas en el cruce de la Ruta Nacional 38.", date:"20/04/2026"},
      {id:"",title:"Proyecto de comunicación: Solicitud de implementación de Boleta Única y reforma política", description:"Insta a la Legislatura provincial a tratar la reforma electoral para eliminar el régimen de acoples y aplicar la Boleta Única.", date:"-"},
      {id:"",title:"Proyecto de resolución: Exigencia de cumplimiento de la Ordenanza N.º 04/2025", description:"Sanción para intimar al Ejecutivo Municipal a que realice el enripiado, alumbrado y señalización obligatoria del camino rural Los Arroyos", date:"15/12/2025"},
      {id:"",title:"Proyecto de ordenanza: Creación del Programa de Protección de Derechos Animales", description:"Propone regulaciones para campañas de castración segura con análisis de sangre previos obligatorios e instalación de comederos y bebederos públicos.", date:"15/12/2025"},
      {id:"",title:"Proyecto de comunicación: Diagnóstico sobre el servicio de agua potable", description:"Requiere una minuta de comunicación para exigir a la SAT un informe del estado operativo, de mantenimiento y de fallas en el suministro local", date:"17/11/2025"},
      {id:"",title:"Proyecto de ordenanza: Preservación del carácter institucional y neutralidad del Estado", description:"Propone prohibir la rotulación o ploteo de maquinarias, vehículos y edificios públicos con nombres de políticos vigentes, ex intendentes o slogans partidarios.", date:"-"},
      {id:"",title:"Proyecto de comunicación: Aplicación de la Ordenanza N.º 05/2012 de ruidos molestos", description:"Reclama al Ejecutivo Municipal que haga efectiva la prohibición y los controles sobre motocicletas que circulan con caños de escape libres o modificados.", date:"01/12/2025"},
      {id:"",title:"Proyecto de comunicación: Pedido de informe sobre obra de caminería en el Complejo Municipal", description:"Minuta que solicita detalles técnicos, plazos y costos de la caminería interna que interfiere con canchas de básquetbol y hockey.", date:"13/06/2026"},
      {id:"",title:"Proyecto de resolución: Reconocimiento a la estudiante Eowlyn Montenegro", description:"Sanciona felicitaciones y pide evaluar colaboración presupuestaria para la estudiante local seleccionada por Space Kidz India para el diseño del satélite 'ShakthiSAT'.", date:"-"},  
      
    ]
  },
  8: { // Sergio Muray
    bio: `Nació en el departamento Juan Bautista Alberdi, en la localidad conocida como la Colorada.
Realizo sus estudios primarios en la escuela Puerta de Marapa de Juan Bautista Alberdi.
En el año 1989 se trasladó a vivir a la ciudad de Juan Bautista Alberdi, donde cursó sus estudios secundarios en la escuela de comercio y obtuvo el título de Perito Mercantil.
Desde muy joven colaboro con su familia en las tareas del campo, principalmente en trabajos de siembra y cosecha
Al llegar a la ciudad de Juan Bautista Alberdi, comenzó a trabajar como empleado de comercio, mientras cursaba la escuela secundaria.
Posteriormente, realizo sus estudios Universitarios en la Universidad del Norte Santo Tomas de Aquino (UNSTA), donde obtuvo el título de Contador Público Nacional.
Durante esta etapa también desarrollo actividades laborales como secretario y asesor  del Legislador.
Productor de seguros, Gestoria del automotor…
En el año 2012, fue elegido como concejal de la ciudad de Juan Bautista Alberdi en el período 2011-2015  Su carrera política continuo como asesor del legislador Carlos Funez, en el año 2025 fue elegido nuevamente como concejal, cargo que ejerce en la actualidad, correspondiente del periodo 2025 a 2027.
A lo largo de su carrera política ha recibido el acompañamiento y confianza de la comunidad, trabajando sobre su función legislativa en distintas iniciativas destinadas a mejorar la calidad de vida de los vecinos.
Entre sus principales acciones se destacan los aportes y el acompañamiento de la comunidad educativa, tanto en las escuelas primarias como secundarías de la zona, el apoyo a escuelas de deportes y asociaciones deportivas; y colaboración con jóvenes estudiantes, promoviendo oportunidades y acompañando sus proyectos.
Su ayuda está concentrada en:
Comedores comunitarios.
Merenderos comunitarios.
Mejoramiento edilicios en escuelas.
Mejoramientos habitacionales.
Asociaciones deportivas y culturales.
Su compromiso con la comunidad se refleja también en el trabajo permanente y en la búsqueda de soluciones a las distintas necesidades de los vecinos de Juan Bautista Alberdi.`
,
    commissions: [],
    formation: "Contador Público Nacional",
    projects: [
      { id: "", title: "Proyecto de resolución: Solicitud de estudios técnicos y reparación de calles.", description: "", date:"-" },
      { id: "", title: "Proyecto de ordenanza: Construcción de CAPS en los Alamitos.", description: "", date:"-"},
      { id: "", title: "Proyecto de comunicación: Apertura y mantenimiento de caminos rurales.", description: "", date:"-"}, 
      { id: "", title: "Proyecto de ordenanza: Creación de pistas de salud en distintos barrios de la ciudad.", description: "", date:"-"},
      { id: "", title: "Proyecto de comunicación: construcción y adecuación de baños en la escuela San José.", description: "", date:"-"},
      { id: "", title: "Proyecto de Ordenanza: Remoción de vehículos en estado de abandono en vía pública.", description: "", date:"-" },
      { id: "", title: "Proyecto de ordenanza: Cambio de estacionamientos de motos en la terminal de ómnibus.", description: "", date:"-"},
      { id: "", title: "Proyecto de comunicación: Solicitud de informes de gastos al poder ejecutivo.", description: "", date:"-" },
      { id: "", title: "Proyecto de resolución: Pedido al ejecutivo fortalecimientos de acciones en el centro CEPLA.", description: "", date:"-" },
      { id: "", title: "Proyecto de resolución: Implementación de deportes  adaptados en el complejo  municipal.", description: "", date:"-" },
      { id: "", title: "Proyecto de comunicación: Pedido de recambio de lámparas luminarias en barrios Belgrano y Escaba.", description: "", date:"-" }
    ]


  },
  9: { // Nanci Cuenca
    bio: `Una vida de trabajo, aprendizaje, compromiso y servicio a la comunidad
Nanci Cuenca nació el 8 de noviembre de 1978 en la ciudad de Juan Bautista Alberdi,
Tucumán. Es hija de Francisco Cuenca, trabajador del sector gastronómico, y de
Alicia del Valle Maturano, ama de casa, quienes formaron una familia basada en el
trabajo, el esfuerzo y los valores.
Creció junto a sus cinco hermanos: María José, Silvina del Valle, Francisco Hernán,
Lorena Susana y María de los Ángeles Cuenca.
Desde su infancia, su historia estuvo marcada por el esfuerzo, el aprendizaje y la
importancia de estar cerca de los demás. Esos valores, aprendidos en su hogar,
fueron acompañándola en cada etapa de su vida.
SUS RAÍCES Y SU FORMACIÓN
Realizó sus estudios primarios en la Escuela General Las Heras y sus estudios
secundarios y terciarios en la Escuela Normal Florentino Ameghino.
A lo largo de su vida construyó una formación amplia y diversa. Es Profesora del III
Ciclo de EGB y Educación Polimodal en Tecnología, Profesora de Danzas Folclóricas
y Acompañante Terapéutico.
También realizó numerosos cursos, capacitaciones y actualizaciones vinculados con
sus distintas áreas de formación y trabajo.
Su formación continua hasta el presente. Actualmente es estudiante de la carrera de
Derecho en la Universidad Nacional de Tucumán (UNT), convencida de que nunca se
deja de aprender y que la capacitación es una herramienta fundamental para crecer
y asumir nuevas responsabilidades.

UNA VIDA DE TRABAJO
Desde joven conoció el valor del trabajo y del esfuerzo.
Una de sus primeras experiencias laborales fue como secretaria en un estudio
jurídico, donde tuvo contacto con tareas administrativas y con el ámbito jurídico.
También se desempeñó como preceptora en una escuela de la zona, experiencia que
significó uno de sus primeros vínculos laborales con el ámbito educativo.

En el ámbito gastronómico trabajó como mesera y encargada de confitería,
desarrollando tareas que le permitieron conocer de cerca el esfuerzo cotidiano y la
responsabilidad que implica el trabajo.
Posteriormente se desempeñó como empleada de comercio, realizando también
diferentes cursos y capacitaciones relacionados con esa actividad.
Cada uno de estos trabajos fue dejando experiencias, aprendizajes y vínculos que
fueron formando su carácter y su manera de comprender las distintas realidades de
las personas.
EL FOLCLORE, UNA PASIÓN QUE SE TRANSFORMÓ EN VOCACIÓN
Fue bailarina y perteneció a distintas academias y agrupaciones de Juan Bautista
Alberdi, entre ellas El Fortín, La Cautiva, Ballet Alberdi y Mi Patria Argentina.
La danza no fue solamente una actividad artística: fue una parte importante de su
identidad y de su vínculo con la cultura y las tradiciones de su tierra.
Con el tiempo decidió transmitir esa pasión y abrió su propia academia de folclore,
Malvinas Argentinas junto a la Profesora Natalia Barrionuevo, donde las clases se
brindaban gratuitamente, con el objetivo de que niños y jóvenes pudieran aprender
nuestras danzas y acercarse a nuestra cultura sin que la situación económica fuera
un impedimento.
La academia funcionó como un espacio de encuentro, aprendizaje y transmisión de
nuestras raíces hasta que la pandemia de COVID-19 obligó a suspender sus
actividades y finalmente a cerrar.
A pesar de ello, el folclore continúa siendo una parte esencial de su identidad.
EDUCACIÓN Y ACOMPAÑAMIENTO
La educación ocupa un lugar central en la trayectoria de Nanci Cuenca.
Como Profesora del III Ciclo de EGB y Educación Polimodal en Tecnología, desarrolló
durante años su tarea docente en distintas instituciones educativas de la región.
Se desempeñó como docente en la Escuela Nasif Estéfano de la ciudad de
Concepción, en la Escuela N.o 282 José Silverio Molina de Huasa Pampa Sud y en la
Escuela Pedro Medrano de Pueblo Viejo, perteneciente al departamento La Cocha.
Ejerció la docencia hasta febrero de 2026, acompañando a sus estudiantes desde
una mirada comprometida con la educación, el aprendizaje y la formación integral.

Su recorrido docente estuvo siempre acompañado por una formación permanente y
por el deseo de brindar herramientas que permitieran a sus alumnos desarrollar sus
capacidades y proyectarse hacia el futuro.
A su formación como docente sumó el título de Acompañante Terapéutico,
experiencia desde la cual también acompañó durante un tiempo a niños con autismo.
Esta etapa fortaleció especialmente su sensibilidad frente a la inclusión, las
necesidades de las personas con discapacidad y el acompañamiento a sus familias.
La educación y el acompañamiento fueron así convirtiéndose en pilares
fundamentales de su trayectoria.
UNA VOCACIÓN SOLIDARIA QUE NACIÓ HACE MUCHOS AÑOS
Su compromiso con los demás comenzó mucho antes de la política.
Durante años, junto a familiares y amigos, realizó distintas acciones solidarias. Entre
ellas, organizó cumpleaños solidarios, transformando celebraciones personales en
oportunidades para compartir y ayudar a quienes más lo necesitaban.
También se sumó a colaborar con un grupo que trabajaba junto a comunidades
originarias en El Tri-Chaco, experiencia que le permitió conocer otras realidades y
reafirmar su compromiso con quienes necesitan acompañamiento y oportunidades.
PARTICIPACIÓN INSTITUCIONAL
Ese espíritu de servicio también la llevó a participar activamente de diferentes
instituciones de su comunidad.
Fue socia activa del Rotary Club Juan Bautista Alberdi, donde ocupó distintas
responsabilidades. Se desempeñó como secretaria, fue presidente del Comité de
Proyectos y Servicios a la Comunidad y también presidente de Nuevas Generaciones,
trabajando especialmente con jóvenes.
También perteneció a la Comisión Directiva de Bomberos Voluntarios de Juan
Bautista Alberdi, donde se desempeñó como secretaria.
Estas experiencias le permitieron aprender sobre organización, gestión, trabajo en
equipo y servicio comunitario, conocimientos que años más tarde serían importantes
en su vida política.
SU FAMILIA, PILAR FUNDAMENTAL
Nanci es madre de tres hijos: Solana, Francisco y Helena.

Comparte su vida con Nelson Darío Murúa, con quien lleva aproximadamente 30 años
de vida en común.
Su familia ha sido fundamental en cada etapa de su vida y, especialmente, en las
decisiones que fue tomando a lo largo de su camino.
El acompañamiento de su madre, sus hermanos y, especialmente, de su marido, ha
sido un sostén fundamental para poder asumir nuevos desafíos, continuar estudiando,
desarrollar sus actividades comunitarias y dar cada uno de los pasos que fueron
construyendo su trayectoria.
Para Nanci, la pareja ocupa un lugar especialmente importante. Las decisiones que
tomó a lo largo de su vida estuvieron muchas veces acompañadas por el diálogo, el
apoyo y la comprensión de su marido, quien compartió con ella los desafíos, los
momentos difíciles y también cada logro alcanzado.
Su familia no es solamente parte de su historia: es uno de los pilares que le permitió
construirla.
RENACER: CINCO AÑOS DE ACOMPAÑAMIENTO
Uno de los capítulos más importantes de su trayectoria social es Renacer, grupo de
ayuda y acompañamiento a pacientes oncológicos y sus familias, del cual es
fundadora y presidente.
El trabajo de Renacer comenzó hace aproximadamente cinco años, a partir de la
necesidad de acompañar, contener y ayudar a personas que atraviesan tratamientos
oncológicos y a sus familias.
Durante este tiempo se fueron construyendo vínculos, acciones solidarias y redes de
acompañamiento.
Con el tiempo, ese trabajo se fortaleció y Renacer se incorporó a la Red Unidos por
el Cáncer a nivel nacional, trabajando además de manera articulada con otras
fundaciones y organizaciones.
Para Nanci, Renacer representa mucho más que una institución. Es la continuidad de
una forma de entender la vida: acompañar, escuchar, ayudar y no permanecer
indiferente frente al dolor de los demás.
SU VIDA POLÍTICA
La vida política de Nanci comenzó a los 18 años, cuando empezó a trabajar y
acompañar a un referente político.

En aquel momento no se encontraba plenamente incorporada a la actividad política
partidaria. Su participación era principalmente desde el acompañamiento y la
observación.
Durante muchos años eligió aprender, escuchar y conocer. Su participación en
distintas instituciones, organizaciones y espacios comunitarios también fue una forma
de formación: aprendió sobre gestión, organización, trabajo en equipo y las distintas
realidades de su comunidad.
A lo largo de ese camino realizó también cursos y capacitaciones vinculados con la
formación y la gestión política, incluyendo instancias de formación de la Escuela de
Gobierno de la Universidad Santo Tomás de Aquino.
EL REGRESO A LA POLÍTICA
En 2023, a los 45 años, decidió volver a involucrarse activamente en la política.
Lo hizo acompañando una propuesta encabezada por el ingeniero Roberto Sánchez,
vinculada al radicalismo. En ese camino conoció a la legisladora Raquel Evangelina
Nievas y acompañó también al abogado Luis María Diaz Augier en su candidatura a
concejal, quien logró acceder a una banca.
Fue una etapa de aprendizaje y participación directa en una elección. Sin embargo,
Nanci continuó trabajando en sus actividades personales, profesionales y
comunitarias, acompañando desde el lugar que había elegido y sosteniendo sus
convicciones respecto del rumbo que consideraba mejor para Tucumán y para su
comunidad.
EL DESAFÍO DE ENCABEZAR UNA LISTA
Durante 2025, su compromiso fue reconocidos dentro del espacio político con el que
venía trabajando.
La legisladora Raquel Evangelina Nievas la convocó para asumir un nuevo desafío:
ser candidata a concejal de Juan Bautista Alberdi, esta vez como primera candidata
de una lista, algo que representaba un paso completamente diferente en su
trayectoria.
Nanci decidió aceptar.
Lo hizo acompañada por un grupo de personas trabajadoras, profesionales y
comprometidas, con inquietudes y objetivos comunes para Juan Bautista Alberdi.
Así encabezó la propuesta de “Nos Une el Cambio”.

El resultado electoral le permitió acceder a una banca en el Concejo Deliberante de
Juan Bautista Alberdi, iniciando una nueva etapa de su vida pública.
SU PRESENTE COMO CONCEJAL
Desde su banca desarrolla una tarea que combina el trabajo legislativo, la
participación en comisiones, el estudio y presentación de proyectos, los pedidos de
información, el contacto permanente con los vecinos y el recorrido por los barrios.
Sus iniciativas abordan distintas necesidades de la comunidad y temas relacionados
con la educación, la cultura, la inclusión, la accesibilidad, la participación ciudadana,
el desarrollo de los barrios y el fortalecimiento institucional.
Para Nanci, el trabajo legislativo no termina en una sesión. Cada proyecto representa
tiempo, estudio, escucha y la intención de transformar una necesidad concreta en una
propuesta.
Por eso sostiene una presencia cercana a los vecinos, escuchando sus reclamos y
buscando llevar esas inquietudes al ámbito institucional.
UNA VIDA QUE ENCUENTRA SU SENTIDO EN EL SERVICIO
La historia de Nanci Cuenca no comenzó con una banca en el Concejo Deliberante.
Comenzó en una familia trabajadora de Juan Bautista Alberdi.
Continuó con los estudios, los distintos trabajos, el folclore, la docencia, el
acompañamiento terapéutico, las instituciones, las acciones solidarias, el trabajo con
comunidades originarias, la creación de una academia gratuita de folclore y cinco
años de acompañamiento a pacientes oncológicos a través de Renacer.
También se construyó en la familia, en la maternidad y en los aprendizajes cotidianos.
Y muchos años después llegó la política, primero desde el acompañamiento y la
observación, luego desde la participación y finalmente desde la decisión de asumir el
desafío de representar a sus vecinos.
ESTAR PRESENTE, A SU MANERA, TRABAJANDO.
Para Nanci Cuenca la política no es el comienzo de su vocación de servicio.
Es una nueva herramienta para continuar haciendo aquello que aprendió desde muy
joven: escuchar, acompañar, comprometerse y trabajar por los demás.
Y su mirada hacia el futuro sigue estando puesta en el lugar donde nació, creció y
construyó su historia:

JUAN BAUTISTA ALBERDI`,
    commissions: [
      "Presupuesto y Hacienda",
      "Obras Públicas y Transporte",
      "Educación y Cultura, Turismo y Deportes, Salud y Conservación Ambiental",
      "Relaciones Laborales, Política Ocupacional, Seguridad e Higiene en el Trabajo",
      "Preservación del Patrimonio de la Ciudad",
      "Políticas de Género, Mujeres y Diversidad"
    ],
    projects: [
      {id: "", title: "Proyecto de Resolución: Solicitud de informe sobre la gestión municipal dureante el periodo de intervención.", description: "Solicitamos un informe completo, detallado y actualizado sobre la situación administrativa, financiera, contable, patrimonial y operativa del Municipio al finalizar la intervención. Esta información es fundamental para garantizar la transparencia, ejercer el control legislativo y planificar adecuadamente la gestión municipal en beneficio de todos los vecinos.", date: "17/11/2025"},
      {id: "", title: "Proyecto de Resolución: Creación de una plaza pública en Marapa.", description: "Impulsamos la creación de un espacio verde y comunitario en la localidad de Marapa, respondiendo a un pedido histórico de sus vecinos. Este proyecto busca fortalecer el encuentro social, fomentar la recreación, mejorar la calidad de vida y avanzar en la planificación de un lugar seguro y accesible para familias, niños y jóvenes.", date: "18/11/2025"},
      {id: "", title: "Proyecto de Resolución: Uniforme institucional para empleados del Concejo Deliberante", description: "Impulsamos la implementación del uniforme institucional para el personal del Honorable Concejo Deliberante, con el objetivo de fortalecer la imagen institucional, mejorar la identificación del personal y garantizar condiciones laborales más equitativas. La medida busca brindar una presentación ordenada y profesional, evitando que los trabajadores deban afrontar gastos personales, promoviendo igualdad, comodidad y dignidad en el ámbito laboral.", date: "28/11/2025"},
      {id: "", title:"Proyecto de Resolución: Cargos por concurso público para los cargos de Secretario/a, Prosecretario/a y Tesorero/a del Concejo Deliberante de Juan Bautista Alberd", description: "Convocamos a concurso público abierto exclusivo para personas domiciliadas en Alberdi. Proceso transparente, imparcial y objetivo, garantizando igualdad de oportunidades. Un jurado evaluador independiente, conformado por instituciones locales.", date: "18/12/2025"},
      {id: "", title:"Proyecto de Resolución: Mejoramiento y acondicionamiento prioritario de la pileta del Complejo Municipal de Juan Bautista Alberdi", description: "Impulsamos el mejoramiento integral de la pileta del Complejo Municipal de Juan Bautista Alberdi, priorizando condiciones de seguridad, higiene y confort para vecinos, familias y deportistas. El proyecto contempla la incorporación de sombra, reparación de duchas y espacios de higiene, instalación de bancos, mejora del entorno y acondicionamiento general, garantizando un espacio adecuado para la recreación, el deporte y el desarrollo de actividades durante la temporada de verano.", date: "18/11/2025"},
      {id: "", title:"Proyecto de Ordenanza: Creación del programa de incentivo a la buena imagen comercial", description: "Promovemos comercios más ordenados, limpios y atractivos, que fortalecen nuestra ciudad y mejoran la experiencia de todos. Un programa de beneficios tributarios para los comercios que mantengan en buen estado.", date: "-"},
      {id: "", title:"Proyecto de Ordenanza: Seguimiento y control de ordenanzas vigentes", description: "Impulsamos un sistema que permite conocer el estado real de cumplimiento de las normas municipales, fortaleciendo la transparencia y el control institucional.", date: "18/12/2025"},
      {id: "", title:"Proyecto de Ordenanza: Cartelería de ingreso a localidades del municipio", description: "Impulsamos la creación de un sistema de cartelería para identificar de manera clara y oficial el ingreso a cada localidad, fortaleciendo la identidad y el orden territorial.", date: "18/12/2025"},
      {id: "", title:"Proyecto de Ordenanza: Tenencia responsable y defensor de los derechos de los animales", description:"Promovemos el cuidado responsable de los animales, fortaleciendo políticas públicas que previenen el maltrato y mejoran la convivencia en nuestra ciudad.", date:"-"},
      {id: "", title:"Proyecto de Resolución: Informe sobre obras públicas y programas municipales", description:"Solicitamos información sobre el estado de ejecución de obras y programas municipales para garantizar transparencia y seguimiento de la gestión.", date:"-"},
      {id: "", title:"Proyecto de Resolución: Informe sobre programas de vivienda en Alberdi", description:"Solicitamos información clara sobre los programas habitacionales en la ciudad para fortalecer las políticas de acceso a la vivienda.", date:"-"},
      {id: "", title:"Proyecto de Ordenanza: Puesta en valor y mejoramiento del Cementerio Municipal", description:"Buscamos mejorar las condiciones del cementerio para brindar un espacio digno, accesible y en mejores condiciones para todos los vecinos.", date:"-"},
      {id: "", title:"Proyecto de Ordenanza: Prevención de inundaciones y cuidado del sistema de drenaje", description:"Impulsamos la creación de un programa municipal para prevenir inundaciones y promover el cuidado de desagües y canales en la ciudad.", date:"-"},
      {id: "", title:"Proyecto de Ordenanza: Consejo Consultivo de Prevención y Salud Mental Comunitaria", description:"Impulsamos la creación de un espacio permanente de trabajo conjunto para prevenir el consumo problemático y fortalecer la salud mental en nuestra comunidad. Luego del intercambio en el recinto y escuchando las opiniones de todos los bloques y vecinos, se decidió transformar el proyecto en un CONSEJO CONSULTIVO PERMANENTE, garantizando un trabajo sostenido y articulado durante todo el año.", date:"-"},
      {id:"21", title:"Proyecto de Resolución: Verificación Técnica Vehicular (VTV) para Juan Bautista Alberdi", description:"Impulsamos la implementación de operativos de VTV en la ciudad para mejorar la seguridad vial y facilitar el acceso de todos los vecinos.", date:"-"},
      {id:"26", title:"Proyecto de Resolución: Solicitud de ejecución presupuestaria 2026", description:"Promovemos la transparencia, el control de los recursos públicos y el acceso a la información para que los vecinos conozcan cómo se administran los fondos municipales.", date:"12/06/2026"},
      {id:"27", title:"Proyecto de Resolución: Informe y recuperación del Mercado Municipal", description:"Impulsamos la transparencia y la recuperación de una obra clave para el desarrollo económico de Juan Bautista Alberdi, promoviendo oportunidades para comerciantes, emprendedores y feriantes locales.", date:"12/06/2026"},
      {id:"28", title:"Proyecto de Resolución: Recuperación y puesta en valor de la Biblioteca Belgrano", description:"Promovemos la protección, modernización y fortalecimiento de una de las instituciones culturales más importantes de nuestra ciudad.", date:"-"},
      {id:"29", title:"Proyecto de Resolución: Modernización de la Terminal de Ómnibus y mejoras para los pasajeros", description:"Promovemos mejoras en la Terminal de Ómnibus para brindar mayor comodidad, seguridad y mejores condiciones de espera a vecinos y visitantes.", date:"01/06/2026"},
      {id:"30", title:"Proyecto de Resolución: Solicitud de informe direccion de servicios publicos", description:"Promovemos la transparencia institucional y el acceso a la información pública para fortalecer el funcionamiento municipal y garantizar mejores condiciones laborales para los trabajadores.", date:"12/06/2026"},
      {id:"31", title:"Proyecto de Ordenanza: Régimen de integridad administrativa", description:"Impulsamos una administración pública basada en la transparencia, igualdad de oportunidades y profesionalización del empleo, reconociendo su compromiso diario y generando condiciones para su desarrollo, crecimiento y bienestar.", date:"23/07/2026"},
      {id:"32", title:"Proyecto de Ordenanza: Régimen de respuesta institucional a las iniciativas del Honorable Concejo Deliberante", description:"Promovemos una relación institucional responsable entre el Departamento Ejecutivo y el Honorable Concejo Deliberante, garantizando respuestas oportunas a los proyectos presentados por los concejales.", date:"23/07/2026"},
      {id:"33", title:"Proyecto de Ordenanza: Adhesión a los principios y disposiciones de la Ley Nacional 27.535 — Programa Municipal de Promoción, Desarrollo y Fortalecimiento del Folclore", description:"Solicitamos la adhesión del Municipio de Juan Bautista Alberdi a los principios y disposiciones de la Ley Nacional 27.535 en todo lo que resulte de competencia municipal de promoción, desarrollo y fortalecimiento del folclore. Apostamos a nuestra cultura, acompañamos a nuestros artistas y generamos más oportunidades de formación y empleo.", date:"23/07/2026"},
      {id:"34", title:"Proyecto de Resolución: Solicitud de informe sobre el estado, situación y cumplimiento del destino de los terrenos donados mediante Ordenanza Municipal N.º 12/2019", description:"Solicitamos al Departamento Ejecutivo Municipal que informe sobre el estado actual, la situación dominial, catastral, administrativa y material de los terrenos donados mediante Ordenanza Municipal N.º 12/2019, destinados exclusivamente a la construcción de una escuela pública y una plaza pública.", date:"12/06/2026"},
      {id:"35", title:"Proyecto de Resolución: Impulso para la creación y puesta en valor de la Plaza Recreativa y Comunitaria del Bajo Marapa", description:"Una plaza para el Bajo Marapa, un lugar para crecer, compartir y disfrutar en comunidad.", date:"-"},
      {id:"36", title:"Proyecto de Resolución: Grupo Alberdiano de Escritores", description:"Gracias por enriquecer la identidad y la historia de nuestra ciudad. El reconocimiento público se realizará en el marco de los actos y actividades oficiales organizados por la Municipalidad con motivo de los festejos del 29 de agosto de 2026, fecha del natalicio de Juan Bautista Alberdi. Se contempla la entrega de un diploma de reconocimiento institucional al Grupo Alberdiano de Escritores.", date:"-"},

    ]
  },
  10: { // Marcelo Ogas
    bio: `Sergio Marcelo Ogas nació el 12 de junio de 1972, en la localidad de El Baden, donde residió junto a su familia hasta los cinco años de edad. Es hijo de José Feliciano Ogas y María Otilia Ibáñez. Desde entonces, se radicó en el Barrio Oeste de la ciudad de Juan Bautista Alberdi, localidad con la que mantiene un profundo vínculo personal, social, laboral y comunitario.
Desde muy joven desarrolló su trayectoria laboral vinculada a la actividad azucarera. En el año 1992 ingresó como obrero del Ingenio Marapa, iniciando una extensa trayectoria dentro de la actividad industrial azucarera y del movimiento obrero organizado.
Su compromiso con la representación de los trabajadores lo llevó a asumir distintas responsabilidades dentro del ámbito gremial. Desde diciembre de 2016 se desempeña como Secretario General del Sindicato de Obreros de Fábrica y Surco del Ingenio Marapa, función que ejerce hasta la actualidad. Asimismo, desarrolla responsabilidades como Secretario Gremial de la Federación Obrera Tucumana de la Industria Azucarera (FOTIA) y se desempeña como Tesorero de la Obra Social del Personal de la Actividad Azucarera (OSPAAT), vinculada a FOTIA.
En el ámbito político, Sergio Marcelo Ogas se encuentra afiliado al Partido Justicialista desde el año 1992, desarrollando a lo largo de los años una trayectoria vinculada a la participación política y a la representación de los vecinos de Juan Bautista Alberdi.
Su recorrido institucional como representante electo comenzó con su incorporación al Honorable Concejo Deliberante de Juan Bautista Alberdi, desempeñándose como concejal durante el período 2007–2011 y renovando su mandato para el período 2011–2015. Posteriormente, regresó al ámbito legislativo municipal para el período 2023–2027 y, tras el proceso de reorganización institucional del Municipio desarrollado durante el año 2025, fue nuevamente electo para el período 2025–2027, continuando actualmente su labor como Presidente del Honorable Concejo Deliberante de la ciudad de Juan Bautista Alberdi.
A lo largo de su trayectoria, ha construido un perfil caracterizado por la participación activa en los ámbitos laboral, gremial, político e institucional, con especial énfasis en la representación de los trabajadores y en la defensa de los intereses de la comunidad.
En el plano personal, está casado con Estela del Valle Russo, con quien tiene dos hijas. Su historia de vida se encuentra estrechamente ligada a Juan Bautista Alberdi, al trabajo en la industria azucarera y a la actividad gremial y política, ámbitos desde los cuales ha desarrollado gran parte de su compromiso con la comunidad.
Actualmente, continúa desempeñándose como Presidente del Honorable Concejo Deliberante de Juan Bautista Alberdi, desde donde participa en la conducción institucional del cuerpo legislativo municipal, reafirmando una trayectoria de más de tres décadas vinculada al trabajo, la representación gremial y la vida institucional de la ciudad.
`,
    commissions: [],
    projects: [
      { id: "", title: "Pedido de informe sobre agua potable", description: " Los Guayacanes: solicitud de información sobre el avance del proyecto de extensión de la red de agua potable.", date:"-"},
      { id: "", title: "Red cloacal - Barrio 1.º de Mayo", description: "Estudio técnico, proyecto y presupuesto para ampliar la red cloacal en calle Victoria María Eugenia, entre Pte. Néstor Kirchner y Club La Querencia.", date: "12/05/2026", status: "Aprobado" },
      { id: "", title: "Alumbrado público", description: "Calles Córdoba, Alvear y Marañón: colocación y reposición de luminarias para mejorar la seguridad y circulación.", date:"-"},
      { id: "", title: "Colocación de adoquines", description: "Esquina Belgrano y Echeverría: reparación de pérdida de agua y pavimentación con adoquines para evitar hundimientos y mejorar la circulación.", date:"-"},
      { id: "", title: "Plan de mejoras para la Ruta Nacional 38", description: "Reparación de iluminación, refuerzo de señalización vial y aumento de controles de tránsito y cargas pesadas.", date:"-"},
      { id: "", title: "Tapas de cloacas y cámaras de inspección", description: "Relevamiento, reparación y nivelación de tapas deterioradas o hundidas para mejorar la seguridad vial y peatonal.", date:"-"},
      { id: "", title: "Dársena - Escuela Normal", description: "Estudio, proyecto y presupuesto para la construcción de una dársena sobre calle Lídoro J. Quinteros, frente a la institución, para ordenar el ascenso y descenso de pasajeros.", date:"-"},
      { id: "", title: "Dársena de estacionamiento - Calle Lídoro J. Quinteros", description: "Estudio y construcción de una dársena para ordenar el estacionamiento y mejorar la circulación vehicular.", date:"-"},
      { id: "", title: "Iluminación en Ruta Nacional 38", description: "Pedido de cumplimiento de la resolución para gestionar la instalación de iluminación desde la cancha de Las Carreras hasta Villa Belgrano.", date:"-"},
      { id: "", title: "Infraestructura básica - Barrios y zonas rurales", description: "Obras de enripiado y nivelación de calles, extensión de la red eléctrica y provisión de agua potable.", date:"-"},
      { id: "", title: "Semáforos - Avenida Lucas Córdoba y Alvear", description: "Instalación de semáforos y control del tránsito para prevenir accidentes y ordenar la circulación vehicular.", date:"-"},
      { id: "", title: "Semaforización - Calles 25 de Mayo y Alvear", description: "estudio técnico para instalar semáforos y reforzar la  señalización vial.", date:"-"},
      { id: "", title: "Modernización tecnológica municipal", description: "Evaluación de la infraestructura informática y creación de un departamento de sistemas para digitalizar procesos y mejorar la atención ciudadana..", date:"-"},
      { id: "", title: "Agua potable - Los Guayacanes", description: "Ampliación y tendido de la red de agua potable en los tramos faltantes de la localidad y la escuela.", date:"-"},
      { id: "", title: "Muro de contención - Canal de Yaquillo", description: "Estudio y construcción de un muro para evitar desbordes y proteger los domicilios cercanos.", date:"-"}

    ]
  },
  11: { // Miguel Gallego
    bio: "Miguel Gallego se desempeña como Secretario Parlamentario del Honorable Concejo Deliberante de Juan Bautista Alberdi. Su rol es coordinar y brindar apoyo administrativo y legislativo a las sesiones de los concejales.",
  
  },
  12: { // Graciela Mercado
    bio: "Graciela Mercado ejerce las funciones de Prosecretaria Parlamentaria en el Honorable Concejo Deliberante, asistiendo en el orden del día y el registro de las actas de sesiones.", 
  }
};