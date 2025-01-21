import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Globe, Code, Briefcase, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [language, setLanguage] = useState('es');

  const content = {
    es: {
      nav: {
        about: 'Sobre Mí',
        skills: 'Habilidades',
        projects: 'Proyectos',
        experience: 'Experiencia'
      },
      header: {
        role: 'Desarrollador Full Stack',
        location: 'Bahía Blanca, Argentina'
      },
      about: {
        title: 'Sobre Mí',
        description: 'Desarrollador Full Stack y Diseñador con una pasión vibrante por fusionar diseño y lógica. Con dos años de experiencia, he encontrado un terreno fértil para cultivar mis habilidades creativas y de resolución de problemas. Me considero una persona creativa, orientada al trabajo en equipo y con una sólida autonomía. Estoy constantemente buscando nuevos desafíos para seguir creciendo y superando expectativas en este emocionante campo.'
      }
    },
    en: {
      nav: {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience'
      },
      header: {
        role: 'Full Stack Developer',
        location: 'Bahia Blanca, Argentina'
      },
      about: {
        title: 'About Me',
        description: 'Full Stack Web Developer and Designer with a vibrant passion for merging design and logic. With two years of experience, I\'ve found fertile ground to cultivate my creative and problem-solving skills. I consider myself creative, team-oriented, and strongly autonomous. I\'m constantly seeking new challenges to continue growing and exceeding expectations in this exciting field.'
      }
    }
  };

  const skills = {
    frontend: ['React', 'Redux', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    backend: ['Node.js', 'Express', 'PHP', 'WordPress'],
    database: ['PostgreSQL', 'Sequelize', 'MySQL'],
    tools: ['Git', 'Figma', 'REST API', 'Scrum', 'Strapi', 'Cloudinary', 'Auth0']
  };

  const experience = {
    es: [
      {
        title: 'Desarrollador WordPress',
        company: 'reydelsoftware/thesoftwarekings',
        period: 'Enero 2024 - Presente',
        description: [
          'Mantenimiento de plugins',
          'Actualizaciones de estructura',
          'Carga y actualización de productos'
        ],
        link: 'https://thesoftwarekings.com'
      },
      {
        title: 'Analista de Accesibilidad',
        company: 'Banco Santander Rio',
        period: 'Septiembre 2024 - Octubre 2024',
        description: [
          'Análisis de accesibilidad para el sector de compra y canje de puntos de clientes'
        ]
      },
      {
        title: 'Desarrollador Full Stack',
        company: 'DeTernera.com',
        period: 'Junio 2024 - Presente',
        description: [
          'Desarrollo de plataforma e-commerce para productos cárnicos con delivery',
          'Implementación de tecnologías: React, Redux-toolkit, CMS Strapi',
          'Integración de MercadoPago, Nodemailer y Autenticación con Google',
          'Responsable del desarrollo web y co-encargado de todo el proyecto'
        ],
        link: 'www.deternera.com'
      },
      {
        title: 'Desarrollador Front End',
        company: 'Municipalidad de Bahía Blanca',
        period: 'Mayo 2023 - Enero 2024',
        description: [
          'Desarrollo de sistema de gestión de proyectos con carga, edición y eliminación',
          'Implementación de línea de tiempo para visualización de progreso',
          'Desarrollo de sistema para terminal de colectivos con gestión de movimientos',
          'Manejo de información de conductores, pasajeros y estado de unidades',
          'Gestión de permisos y seguridad para diferentes usuarios',
          'Desarrollo de interfaces con React, Redux-Toolkit, JavaScript, CSS3 y Figma'
        ]
      },
      {
        title: 'Teaching Assistant',
        company: 'Henry Coding Bootcamp',
        period: 'Junio 2022 - Octubre 2022',
        description: [
          'Coordinación de grupos de estudiantes',
          'Asistencia en resolución de ejercicios',
          'Promoción de colaboración grupal (Pair Programming)',
          'Propuesta de mejoras para procesos del Bootcamp'
        ]
      }
    ],
    en: [
      {
        title: 'WordPress Developer',
        company: 'reydelsoftware/thesoftwarekings',
        period: 'January 2024 - Present',
        description: [
          'Plugin maintenance',
          'Structure updates',
          'Product loading and updates'
        ],
        link: 'https://thesoftwarekings.com'
      },
      {
        title: 'Accessibility Analyst',
        company: 'Santander Rio Bank',
        period: 'September 2024 - October 2024',
        description: [
          'Accessibility analysis for customer points purchase and redemption sector'
        ]
      },
      {
        title: 'Full Stack Developer',
        company: 'DeTernera.com',
        period: 'June 2024 - Present',
        description: [
          'Development of meat products e-commerce platform with home delivery',
          'Implementation of technologies: React, Redux-toolkit, CMS Strapi',
          'Integration of MercadoPago, Nodemailer, and Google Authentication',
          'Web development lead and project co-manager'
        ],
        link: 'www.deternera.com'
      },
      {
        title: 'Front End Developer',
        company: 'Municipality of Bahía Blanca',
        period: 'May 2023 - January 2024',
        description: [
          'Development of project management system with CRUD operations',
          'Implementation of timeline for progress visualization',
          'Development of bus terminal system with movement management',
          'Management of drivers, passengers, and vehicle status information',
          'User permission management ensuring security',
          'Interface development using React, Redux-Toolkit, JavaScript, CSS3 and Figma'
        ]
      },
      {
        title: 'Teaching Assistant',
        company: 'Henry Coding Bootcamp',
        period: 'June 2022 - October 2022',
        description: [
          'Student group coordination',
          'Exercise resolution assistance',
          'Promotion of group collaboration (Pair Programming)',
          'Bootcamp process improvement proposals'
        ]
      }
    ]
  };
  
  const projects = {
    es: [
      {
        title: 'DeTernera.com',
        description: 'Plataforma e-commerce para venta de productos cárnicos con sistema de delivery.',
        stack: ['React', 'Redux-Toolkit', 'Strapi CMS', 'Node.js', 'MercadoPago'],
        link: 'www.deternera.com',
        details: [
          'Desarrollo full stack del e-commerce',
          'Integración de pagos con MercadoPago',
          'Sistema de autenticación con Google',
          'Gestión de pedidos y delivery',
          'Panel de administración completo'
        ]
      },
      {
        title: 'Desarrollador WordPress',
        description: ['Mantenimiento de plugins',
        'Actualizaciones de estructura',
        'Carga y actualización de productos'],
        stack: ['Wordpress', 'ElementorPro', 'Shoptimizer', 'WpRocket', 'Stripe'],
       link: 'https://thesoftwarekings.com',
        details: [
          'Desarrollo full stack del e-commerce',
          'Integración de pagos con Stripe/PayPal',
          'Sistema de autenticación con Google',
          'Gestión de pedidos, Polls e Idiomas',
          'Panel de administración completo'
        ]
      },
      {
        title: 'Sistema de Gestión Municipal',
        description: 'Sistema integral para la Municipalidad de Bahía Blanca.',
        stack: ['React', 'Redux-Toolkit', 'JavaScript', 'CSS3', 'Figma'],
        details: [
          'Gestión de proyectos municipales',
          'Sistema de timeline para seguimiento',
          'Control de accesos y permisos',
          'Interfaz de usuario intuitiva',
          'Módulo de reportes y estadísticas'
        ]
      },
      
      {
        title: 'Sistema Terminal de Colectivos',
        description: 'Plataforma de gestión para terminal de ómnibus de Bahía Blanca.',
        stack: ['React', 'Redux-Toolkit', 'JavaScript', 'CSS3', 'Figma'],
        details: [
          'Control de movimientos de terminal',
          'Gestión de conductores y pasajeros',
          'Sistema de reservas',
          'Monitoreo de estado de unidades',
          'Dashboard administrativo'
        ]
      },
      {
        title: 'Carta Digital Interactiva',
        description: 'Sistema de menú digital interactivo para restaurantes y bares.',
        stack: ['React', 'Redux-Toolkit', 'PostgreSQL', 'Sequelize', 'Figma'],
        clients: ['Madre', 'BairesBar', 'Don Tomas'],
        details: [
          'Sistema de pedidos en tiempo real',
          'Panel de administración',
          'Gestión de menús dinámicos',
          'Landing page y secciones de productos',
          'Carrito de compras integrado'
        ]
      },
      {
        title: 'BlockBuster',
        description: 'Plataforma de streaming con sistema de alquiler de películas y pagos.',
        stack: ['React', 'Redux-Toolkit', 'Node.js', 'TypeScript', 'Auth0', 'PayPal'],
        link: 'https://blockbuster-pf.vercel.app/',
        details: [
          'Sistema de streaming completo',
          'Integración de pagos con PayPal',
          'Autenticación de usuarios',
          'Gestión de contenido multimedia',
          'Sistema de notificaciones'
        ]
      }
    ],
    en: [
      {
        title: 'DeTernera.com',
        description: 'E-commerce platform for meat products with delivery system.',
        stack: ['React', 'Redux-Toolkit', 'Strapi CMS', 'Node.js', 'MercadoPago'],
        link: 'www.deternera.com',
        details: [
          'Full stack e-commerce development',
          'MercadoPago payment integration',
          'Google authentication system',
          'Order and delivery management',
          'Complete admin panel'
        ]
      },
      {
        title: 'Municipal Management System',
        description: 'Comprehensive system for the Municipality of Bahía Blanca.',
        stack: ['React', 'Redux-Toolkit', 'JavaScript', 'CSS3', 'Figma'],
        details: [
          'Municipal project management',
          'Timeline system for tracking',
          'Access and permissions control',
          'Intuitive user interface',
          'Reports and statistics module'
        ]
      },
      {
        title: 'Bus Terminal System',
        description: 'Management platform for Bahía Blanca bus terminal.',
        stack: ['React', 'Redux-Toolkit', 'JavaScript', 'CSS3', 'Figma'],
        details: [
          'Terminal movement control',
          'Drivers and passengers management',
          'Reservation system',
          'Vehicle status monitoring',
          'Administrative dashboard'
        ]
      },
      {
        title: 'Interactive Digital Menu',
        description: 'Interactive digital menu system for restaurants and bars.',
        stack: ['React', 'Redux-Toolkit', 'PostgreSQL', 'Sequelize', 'Figma'],
        clients: ['Madre', 'BairesBar', 'Don Tomas'],
        details: [
          'Real-time ordering system',
          'Admin dashboard',
          'Dynamic menu management',
          'Landing page and product sections',
          'Integrated shopping cart'
        ]
      },
      {
        title: 'BlockBuster',
        description: 'Streaming platform for movie rental with integrated payments.',
        stack: ['React', 'Redux-Toolkit', 'Node.js', 'TypeScript', 'Auth0', 'PayPal'],
        link: 'https://blockbuster-pf.vercel.app/',
        details: [
          'Complete streaming system',
          'PayPal payment integration',
          'User authentication',
          'Multimedia content management',
          'Notification system'
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
 {/* Header/Hero Section */}
      <button
        onClick={() => setLanguage(lang => lang === 'es' ? 'en' : 'es')}
        className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
      >
        <Globe size={20} />
        {language.toUpperCase()}
      </button>
<header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
  <div className="container mx-auto px-6">
    <h1 className="text-5xl font-bold mb-4">Franco Selvarolo Arcuri</h1>
    <h2 className="text-2xl mb-2">{content[language].header.role}</h2>
    <p className="text-lg mb-6">{content[language].header.location}</p>
    <div className="flex items-center justify-between">
      <div className="flex gap-4 flex-wrap">
        <a href="https://github.com/Fras28" className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
          <Github size={20} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/francoselvarolo/" className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
          <Linkedin size={20} /> LinkedIn
        </a>
        <a href="mailto:fselvarolo28@gmail.com" className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
          <Mail size={20} /> Email
        </a>
      </div>
    </div>
  </div>
</header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-40">
        <div className="container mx-auto px-6">
          <div className="flex justify-flex-start gap-8 py-4 overflow-auto">
            {Object.keys(content[language].nav).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-lg transition-colors text-nowrap ${
                  activeSection === section
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {content[language].nav[section]}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* About Section */}
        <section className={`mb-12 ${activeSection === 'about' ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{content[language].about.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {content[language].about.description}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`mb-12 ${activeSection === 'skills' ? 'block' : 'hidden'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className={`mb-12 ${activeSection === 'projects' ? 'block' : 'hidden'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects[language].map((project) => (
              <div key={project.title} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={16} /> 
                    {language === 'es' ? 'Ver proyecto' : 'View project'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className={`mb-12 ${activeSection === 'experience' ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              {experience[language].map((job, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-xl font-semibold text-gray-800">{job.title}</h4>
                  <p className="text-blue-600 font-medium">{job.company}</p>
                  <p className="text-gray-600 mb-2">{job.period}</p>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-gray-600">• {item}</li>
                    ))}
                  </ul>
                  {job.link && (
                    <a
                      href={job.link}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mt-2"
                    >
                      <ExternalLink size={16} />
                      {language === 'es' ? 'Ver proyecto' : 'View project'}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Franco Selvarolo Arcuri. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <div className="flex justify-center gap-4 mt-4 flex-col">
            <a href="tel:+54-291-5729501" className="hover:text-blue-400">+54-291-5729501</a>
            <a href="mailto:fselvarolo28@gmail.com" className="hover:text-blue-400">fselvarolo28@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;