import { form } from "framer-motion/client";
import sergiomuray from "./assets/concejales/concejal5.jpg";

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
        id: 1,
        name: "Marcelo Ogas",
        fullname: "Marcelo Ogas",
        role: "Presidente",
        block: "Tucumán Primero",
        email: "marceloogas@hcdalberdi.com.ar",
        image: "src/assets/concejales/presidente.png",
        socials: { facebook: "#", instagram: "https://www.instagram.com/" }
    },
    {
        id: 2,
        name: "Adolfo Diaz Chavero",
        fullname: "Hector Adolfo Diaz Chavero",
        role: "Vicepresidente I",
        block: "Cambia Alberdi",
        email: "chavero@hcdalberdi.com.ar",
        image: "src/assets/concejales/cocejal2.jpg",
        socials: { facebook: "#", instagram: "https://www.instagram.com/adolfo.diazchavero" }
    },
    {
        id: 3,
        name: "Cintia Melik Matar",
        fullname: "Cintia Carolina Melik Matar",
        role: "Vicepresidente II",
        block: "Construyendo Futuro",
        email: "cmelikmatar@hcdalberdi.com.ar",
        image: "src/assets/concejales/default.jpg",
        socials: { facebook: "#", instagram: "https://www.instagram.com/cintia.concejal" }
    },
    {
        id: 4,
        name: "Martina Siri",
        fullname: "Martina Siri",
        role: "Concejal",
        block: "Cambia Alberdi",
        email: "martinasiri@hcdalberdi.com.ar",
        image: "/src/assets/concejales/concejal1.jpg",
        socials: { facebook: "#", instagram: "https://www.instagram.com/mar.siri" }
    },
    {
        id: 5,
        name: "Ana Campos",
        fullname: "Ana Campos",
        role: "Concejal",
        block: "Tucumán Primero",
        email: "anacampos@hcdalberdi.com.ar",
        image: "src/assets/concejales/default.jpg",
        socials: { facebook: "#", instagram: "https://www.instagram.com/" }
    },
    {
        id: 6,
        name: "José Calderón",
        fullname: "José Calderón",
        role: "Concejal",
        block: "Alberdi Primero",
        email: "josecalderon@hcdalberdi.com.ar",
        image: "src/assets/concejales/concejal4.jpg",
        socials: { facebook: "#", instagram: "https://www.instagram.com/calderon.josemario" }
    },
    {
        id: 7,
        name: "Ramiro Aguilera",
        fullname: "Ramiro Aguilera",
        role: "Concejal",
        block: "Cambia Alberdi",
        email: "ramiroaguilera@hcdalberdi.com.ar",
        image: "src/assets/concejales/concejal3.jpg",
        socials: { facebook: "#", instagram: "https://www.instagram.com/ramiroaguilera94" }
    },
    {
        id: 8,
        name: "Sergio Muray",
        fullname: "Sergio Muray",
        role: "Concejal",
        block: "Justicia y Kompromiso",
        email: "sergiomuray@hcdalberdi.com.ar",
        image: sergiomuray,
        socials: { facebook: "#", instagram: "https://www.instagram.com/sergio.muray.2025" }
    },
    {
        id: 9,
        name: "Nanci Cuenca",
        fullname: "Nanci Cuenca",
        role: "Concejal",
        block: "Trabajando por Alberdi",
        email: "nancycuenca@hcdalberdi.com.ar",
        image: "src/assets/concejales/default.jpg",
        socials: { facebook: "#", instagram: "https://www.instagram.com/nanci.cuenca.39" }
    },
    {
        id: 10,
        name: "José Romano",
        fullname: "José Romano",
        role: "Concejal",
        block: "Tucumán Primero",
        email: "joseromano@hcdalberdi.com.ar",
        image: "src/assets/concejales/default.jpg",
        socials: { facebook: "#", instagram: "https://www.instagram.com/" }
    }
];


export const profilesData = {
  1: { // José Romano
    bio: "José Romano cuenta con más de 15 años de trayectoria en el sector público y el desarrollo comunitario. Apasionado por la transparencia legislativa y la participación ciudadana, ha liderado múltiples iniciativas para modernizar el concejo y digitalizar los procesos legislativos.",
       commissions: [
      "Presupuesto y Hacienda",
      "Obras Públicas y Transporte",
      "Legislación y Peticiones"
    ],
    projects: [
      { id: "EXP-102-2026", title: "Digitalización Integral del HCD", description: "Proyecto para despapelizar el Concejo Deliberante e implementar firmas digitales para ordenanzas.", date: "12/03/2026", status: "Aprobado" },
      { id: "EXP-154-2026", title: "Presupuesto Participativo Vecinal", description: "Creación de un fondo municipal donde los vecinos eligen directamente qué obras barriales priorizar.", date: "05/05/2026", status: "En Comisión" }
    ]
  },
  2: { // Adolfo Diaz Chavero
    bio: "Adolfo Diaz Chavero es abogado especializado en derecho administrativo. Su enfoque se centra en el ordenamiento urbano sustentable y en la optimización de los servicios públicos municipales, promoviendo el crecimiento ordenado de la ciudad.",
    commissions: [
      "Relaciones Laborales, Política Ocupacional, Seguridad e Higiene en el Trabajo",
      "Preservación del Patrimonio de la Ciudad",
      "Políticas de Género, Mujeres y Diversidad"
    ],
    projects: [
      { id: "EXP-110-2026", title: "Plan de Movilidad Sustentable", description: "Creación de ciclovías interconectadas y estaciones de carga pública para vehículos eléctricos.", date: "22/03/2026", status: "Aprobado" },
      { id: "EXP-201-2026", title: "Regularización Dominial de Barrios Vulnerables", description: "Programa de asistencia jurídica gratuita para vecinos en proceso de escrituración de sus hogares.", date: "10/06/2026", status: "En Comisión" }
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
    bio: "Martina Siri es una joven referente del diseño urbano y la ecología. Promueve legislaciones vinculadas a la gestión de residuos urbanos, energías renovables en edificios públicos y el fomento de espacios verdes accesibles.",
    commissions: [
      "Obras Públicas y Transporte",
      "Educación y Cultura, Turismo y Deportes, Salud y Conservación Ambiental",
      "Preservación del Patrimonio de la Ciudad",
      "Legislación y Peticiones",
      "Políticas de Género, Mujeres y Diversidad"
    ],
    projects: [
      { id: "EXP-105-2026", title: "Alberdi Recicla", description: "Programa de separación en origen de residuos secos y húmedos con incentivos tributarios comerciales.", date: "15/03/2026", status: "Aprobado" },
      { id: "EXP-210-2026", title: "Prohibición de Plásticos de Un Solo Uso", description: "Ordenanza para erradicar progresivamente bolsas y sorbetes plásticos en comercios del municipio.", date: "15/07/2026", status: "En Comisión" }
    ]
  },
  5: { // Ana Campos
    bio: "Ana Campos es educadora con amplia experiencia en la gestión escolar de la región. Su labor legislativa prioriza el fortalecimiento de los centros comunitarios de educación no formal y la integración digital en los barrios periféricos.",
     commissions: [
      "Presupuesto y Hacienda",
      "Obras Públicas y Transporte",
      "Educación y Cultura, Turismo y Deportes, Salud y Conservación Ambiental",
      "Relaciones Laborales, Política Ocupacional, Seguridad e Higiene en el Trabajo",
      "Políticas de Género, Mujeres y Diversidad"
    ],
    projects: [
      { id: "EXP-088-2026", title: "Conectividad en Puntos de Encuentro Comunitarios", description: "Acceso a internet libre en plazas principales de barrios periféricos para tareas escolares.", date: "20/02/2026", status: "Aprobado" },
      { id: "EXP-167-2026", title: "Beca al Mérito Deportivo y Académico", description: "Asignación económica anual para deportistas infantojuveniles destacados de escasos recursos.", date: "15/05/2026", status: "En Comisión" }
    ]
  },
  6: { // José Calderón
    bio: "José Calderón proviene del ámbito del comercio y el emprendimiento local. Promueve la reducción de tasas burocráticas para nuevos comercios y la creación de un polo tecnológico para retener el talento joven en Alberdi.",
    commissions: [
      "Obras Públicas y Transporte",
      "Educación y Cultura, Turismo y Deportes, Salud y Conservación Ambiental",
      "Relaciones Laborales, Política Ocupacional, Seguridad e Higiene en el Trabajo",
      "Preservación del Patrimonio de la Ciudad",
      "Legislación y Peticiones"
    ],
    projects: [
      { id: "EXP-115-2026", title: "Habilitación Comercial Simplificada", description: "Proceso express digital para habilitar comercios minoristas de bajo riesgo en menos de 48 horas.", date: "05/04/2026", status: "Aprobado" },
      { id: "EXP-199-2026", title: "Fomento al Empleo Joven", description: "Descuento del impuesto a los ingresos brutos locales para comercios que contraten menores de 25 años.", date: "01/06/2026", status: "En Comisión" }
    ]
  },
  7: { // Ramiro Aguilera
    bio: "Ramiro Aguilera posee una sólida trayectoria en planeamiento de infraestructura urbana. Aboga por mejoras viales integrales, repavimentación y la ampliación de los servicios de agua potable y cloacas en la periferia de la ciudad.",
    commissions: [
      "Presupuesto y Hacienda",
      "Relaciones Laborales, Política Ocupacional, Seguridad e Higiene en el Trabajo",
      "Legislación y Peticiones"
    ],
    projects: [
      { id: "EXP-121-2026", title: "Plan Maestro de Iluminación LED", description: "Reemplazo de luminarias antiguas por tecnología LED inteligente en todos los corredores escolares.", date: "10/04/2026", status: "Aprobado" },
      { id: "EXP-230-2026", title: "Red de Desagües Pluviales Zona Oeste", description: "Plan general de infraestructura para prevenir inundaciones en las avenidas colectoras.", date: "02/08/2026", status: "En Comisión" }
    ]
  },
  8: { // Sergio Muray
    bio: "Sergio Muray cuenta con amplia experiencia en seguridad ciudadana y defense civil. Su gestión busca incorporar tecnología y participación ciudadana mediante foros barriales de seguridad y sistemas cooperativos de alerta.",
    commissions: [],
    projects: [
      { id: "EXP-130-2026", title: "Ojos en Alerta - Alberdi", description: "Plataforma de comunicación directa vía mensajería instantánea entre vecinos y el centro de monitoreo.", date: "18/04/2026", status: "Aprobado" },
      { id: "EXP-177-2026", title: "Instalación de Alarmas Comunitarias", description: "Subsidios para la instalación de sistemas de alarmas en consorcios vecinales vulnerables.", date: "20/05/2026", status: "En Comisión" }
    ]
  },
  9: { // Nanci Cuenca
    bio: "Nanci Cuenca es una activa promotora de la cultura y la memoria histórica de Alberdi. Trabaja de cerca con colectivos artísticos locales, bibliotecas populares y artesanos para consolidar la identidad cultural de la comuna.",
    commissions: [
      "Presupuesto y Hacienda",
      "Obras Públicas y Transporte",
      "Educación y Cultura, Turismo y Deportes, Salud y Conservación Ambiental",
      "Relaciones Laborales, Política Ocupacional, Seguridad e Higiene en el Trabajo",
      "Preservación del Patrimonio de la Ciudad",
      "Políticas de Género, Mujeres y Diversidad"
    ],
    projects: [
      { id: "EXP-140-2026", title: "Paseo de Artesanos y Emprendedores Permanente", description: "Creación de una estructura fija para ferias de fin de semana con equipamiento e iluminación pública.", date: "28/04/2026", status: "Aprobado" },
      { id: "EXP-222-2026", title: "Preservación del Patrimonio Arquitectónico Histórico", description: "Registro y protección legal de fachadas y edificaciones fundacionales del casco histórico.", date: "26/07/2026", status: "En Comisión" }
    ]
  },
  10: { // Marcelo Ogas
    bio: "Marcelo Ogas es deportista y promotor de actividades recreativas saludables. Su labor en el Concejo se centra en recuperar playones deportivos barriales y transformarlos en centros integradores para la salud social.",
    commissions: [],
    projects: [
      { id: "EXP-109-2026", title: "Playones Deportivos Inclusivos", description: "Puesta en valor de canchas barriales equipándolas con rampas de acceso y deportes adaptados.", date: "20/03/2026", status: "Aprobado" },
      { id: "EXP-160-2026", title: "Programa Alberdi en Movimiento", description: "Clases gratuitas de gimnasia y controles de salud semanales en plazas públicas para adultos mayores.", date: "12/05/2026", status: "Aprobado" }
    ]
  }
};