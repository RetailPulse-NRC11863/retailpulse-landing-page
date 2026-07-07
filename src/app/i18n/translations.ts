export type Language = 'es' | 'en';

type BenefitItem = {
  className: string;
  detail: string;
  illustration: string;
  title: string;
};

type BenefitGroup = {
  items: BenefitItem[];
  title: string;
};

type FeatureItem = {
  description: string;
  title: string;
};

type FaqItem = {
  answer: string;
  question: string;
};

type PricingPlan = {
  description: string;
  features: string[];
  id: string;
  name: string;
  price: string;
};

type TeamMember = {
  avatar: string;
  name: string;
  role: string;
};

type TestimonialItem = {
  author: string;
  quote: string;
};

export type TranslationContent = {
  about: {
    paragraphs: string[];
    team: TeamMember[];
    title: string;
  };
  benefits: {
    groups: BenefitGroup[];
    title: string;
  };
  contact: {
    description: string;
    form: {
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      submit: string;
    };
    title: string;
  };
  faq: {
    items: FaqItem[];
    title: string;
  };
  features: {
    intro: string;
    items: FeatureItem[];
    title: string;
  };
  footer: {
    bottom: string;
    brandDescription: string;
    brandTitle: string;
    contactTitle: string;
    email: string;
    faqLink: string;
    linksTitle: string;
    location: string;
    phone: string;
  };
  header: {
    brandAriaLabel: string;
    languageSwitcherAriaLabel: string;
    login: string;
    nav: {
      about: string;
      benefits: string;
      contact: string;
      faq: string;
      home: string;
      pricing: string;
    };
    navAriaLabel: string;
  };
  hero: {
    actions: {
      demo: string;
      explore: string;
    };
    copy: string;
    eyebrow: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
    title: string;
  };
  pricing: {
    cta: string;
    intro: string;
    plans: PricingPlan[];
    title: string;
  };
  testimonials: {
    items: TestimonialItem[];
    title: string;
  };
  topStrip: string;
};

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  es: {
    topStrip: 'Llevamos la inteligencia del e-commerce a tus pasillos.',
    header: {
      brandAriaLabel: 'Ir al inicio',
      navAriaLabel: 'Navegacion principal',
      languageSwitcherAriaLabel: 'Selector de idioma',
      login: 'Login',
      nav: {
        home: 'Inicio',
        about: 'Nosotros',
        faq: 'Preguntas frecuentes',
        benefits: 'Beneficios',
        pricing: 'Planes',
        contact: 'Contacto'
      }
    },
    hero: {
      eyebrow: 'Plataforma SaaS para retail fisico',
      title: 'Digitaliza tu tienda fisica con inteligencia de e-commerce.',
      copy:
        'RetailPulse conecta analitica de trafico, mapas de calor y asistencia al comprador para transformar la experiencia en tienda y mejorar la conversion.',
      actions: {
        explore: 'Explorar funcionalidades',
        demo: 'Solicitar demo'
      },
      stats: [
        {
          value: '+22%',
          label: 'mejora potencial en conversion por zona'
        },
        {
          value: '2 segmentos',
          label: 'duenos de tienda y compradores finales'
        },
        {
          value: '100% web',
          label: 'sin instalacion adicional en celulares'
        }
      ]
    },
    features: {
      title: 'Funcionalidades clave',
      intro: 'Una vista simple de lo esencial para la primera entrega de la landing page.',
      items: [
        {
          title: 'Monitoreo en tiempo real',
          description:
            'Visualiza trafico y permanencia por zonas para detectar cuellos de botella.'
        },
        {
          title: 'Mapas de calor',
          description:
            'Identifica zonas calientes y frias para optimizar layout, stock y promociones.'
        },
        {
          title: 'Alertas inteligentes',
          description:
            'El personal recibe avisos inmediatos frente a saturacion o falta de atencion.'
        },
        {
          title: 'Asistencia al comprador',
          description:
            'Consulta de stock, ubicacion y promociones desde un quiosco web en tienda.'
        }
      ]
    },
    about: {
      title: 'Nosotros',
      paragraphs: [
        'RetailPulse nace para cerrar la brecha entre el e-commerce y la tienda fisica. Llevamos datos operativos en tiempo real al punto de venta para decisiones mas precisas.',
        'Nuestra primera version prioriza una interfaz clara, util y enfocada en resultados inmediatos para administradores y compradores.'
      ],
      team: [
        {
          avatar: 'J',
          name: 'Jesus',
          role: 'Frontend'
        },
        {
          avatar: 'A',
          name: 'Anghelo',
          role: 'Backend'
        },
        {
          avatar: 'J',
          name: 'Jose',
          role: 'Arquitectura'
        },
        {
          avatar: 'L',
          name: 'Luis',
          role: 'Analitica'
        },
        {
          avatar: 'F',
          name: 'Fabio',
          role: 'Producto'
        }
      ]
    },
    benefits: {
      title: 'Beneficios',
      groups: [
        {
          title: 'Para el Administrador de Tienda',
          items: [
            {
              className: 'benefit-illustration benefit-illustration-admin-layout',
              illustration: 'Layout',
              title: 'Optimizacion del Layout mediante Mapas de Calor:',
              detail:
                'Visualiza el flujo real de tus clientes a traves de representaciones graficas de intensidad. Identifica "zonas frias" y "zonas calientes" para redistribuir productos de baja rotacion y maximizar la rentabilidad de cada metro cuadrado de tu local.'
            },
            {
              className: 'benefit-illustration benefit-illustration-admin-alerts',
              illustration: 'Alertas',
              title: 'Gestion Operativa Agil con Alertas en Tiempo Real:',
              detail:
                'Recibe notificaciones inmediatas ante quiebres de stock o aglomeraciones en pasillos especificos. Coordina a tu personal de piso de manera eficiente, asegurando que ninguna zona quede desatendida y reduciendo las ventas perdidas por falta de reposicion.'
            }
          ]
        },
        {
          title: 'Para el Comprador en Tienda',
          items: [
            {
              className: 'benefit-illustration benefit-illustration-buyer-nav',
              illustration: 'Ruta',
              title: 'Navegacion Inteligente y Ubicacion de Productos:',
              detail:
                'Elimina la frustracion de buscar pasillo por pasillo. Mediante el quiosco interactivo, el cliente puede visualizar la ruta mas rapida hacia el articulo que busca, facilitando un recorrido de compra fluido y sin complicaciones.'
            },
            {
              className: 'benefit-illustration benefit-illustration-buyer-stock',
              illustration: 'Stock',
              title: 'Autonomia Total en Consulta de Stock y Precios:',
              detail:
                'Brinda al comprador la capacidad de verificar disponibilidad y costos al instante con solo ingresar su DNI. Al fomentar el autoservicio, reducimos la carga de consultas repetitivas al personal y mejoramos la satisfaccion general del cliente.'
            }
          ]
        }
      ]
    },
    pricing: {
      title: 'Planes para empezar con RetailPulse',
      intro:
        'Selecciona el plan que mejor se adapta a tu tienda y continua el registro directamente en la aplicacion web.',
      cta: 'Seleccionar plan',
      plans: [
        {
          id: 'starter',
          name: 'Starter',
          price: 'S/ 49 al mes',
          description: 'Para tiendas pequenas que quieren digitalizar inventario y busqueda asistida.',
          features: ['Catalogo y stock base', 'Kiosko de busqueda', 'Configuracion de tienda']
        },
        {
          id: 'growth',
          name: 'Growth',
          price: 'S/ 99 al mes',
          description: 'Para negocios que necesitan operar con alertas, tareas y metricas por zona.',
          features: ['Alertas operativas', 'Tareas para staff', 'Dashboard administrativo']
        },
        {
          id: 'premium',
          name: 'Premium',
          price: 'S/ 149 al mes',
          description: 'Para tiendas que quieren analitica avanzada, conversion y recomendaciones.',
          features: ['Mapas de calor', 'Recomendaciones comerciales', 'Reportes de conversion']
        }
      ]
    },
    testimonials: {
      title: 'Testimonios',
      items: [
        {
          quote:
            '"Antes tomabamos decisiones por intuicion. Con los mapas de calor empezamos a mover productos con criterio y vimos mejoras desde el primer mes."',
          author: 'Carlos Mendoza, Gerente de tienda'
        },
        {
          quote:
            '"Ahora encuentro productos y stock en minutos. El quiosco me ahorra tiempo y mejora mi experiencia de compra."',
          author: 'Lucia Ramos, Cliente'
        }
      ]
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: 'Que es RetailPulse y como ayuda a mi negocio?',
          answer:
            'Es una plataforma SaaS que transforma el trafico de tienda en datos accionables para mejorar conversion y experiencia de compra.'
        },
        {
          question: 'Necesito instalar una app movil?',
          answer:
            'No. El sistema funciona en web. Administradores y compradores acceden desde interfaces responsive.'
        },
        {
          question: 'Como se generan las alertas para mi personal?',
          answer:
            'El sistema analiza densidad y tiempos de espera; si detecta riesgo operativo, se envian notificaciones en tiempo real.'
        },
        {
          question: 'Los datos personales estan seguros?',
          answer:
            'Si. Se aplican controles de seguridad y buenas practicas para proteger la informacion del negocio y de los compradores.'
        }
      ]
    },
    contact: {
      title: 'Contactanos',
      description:
        'Si quieres una demo o tienes dudas para tu primera implementacion, dejanos tus datos y te respondemos.',
      form: {
        nameLabel: 'Nombre y apellidos',
        namePlaceholder: 'Tu nombre',
        phoneLabel: 'Telefono',
        phonePlaceholder: '999 999 999',
        emailLabel: 'Email',
        emailPlaceholder: 'correo@empresa.com',
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Cuentanos en que te ayudamos',
        submit: 'Enviar consulta'
      }
    },
    footer: {
      brandTitle: 'RetailPulse',
      brandDescription: 'Analitica de e-commerce aplicada a tiendas fisicas.',
      linksTitle: 'Links',
      faqLink: 'FAQ',
      contactTitle: 'Contacto',
      email: 'teamup@retailpulse.pe',
      phone: '+51 999 456 780',
      location: 'Lima, Peru',
      bottom: 'Copyright (c) {{year}} RetailPulse.'
    }
  },
  en: {
    topStrip: 'We bring e-commerce intelligence to your store aisles.',
    header: {
      brandAriaLabel: 'Go to home',
      navAriaLabel: 'Main navigation',
      languageSwitcherAriaLabel: 'Language selector',
      login: 'Login',
      nav: {
        home: 'Home',
        about: 'About',
        faq: 'FAQ',
        benefits: 'Benefits',
        pricing: 'Plans',
        contact: 'Contact'
      }
    },
    hero: {
      eyebrow: 'SaaS platform for physical retail',
      title: 'Digitize your physical store with e-commerce intelligence.',
      copy:
        'RetailPulse connects traffic analytics, heatmaps, and buyer assistance to transform in-store experience and improve conversion.',
      actions: {
        explore: 'Explore features',
        demo: 'Request demo'
      },
      stats: [
        {
          value: '+22%',
          label: 'potential conversion uplift by zone'
        },
        {
          value: '2 segments',
          label: 'store owners and end buyers'
        },
        {
          value: '100% web',
          label: 'no extra mobile app installation'
        }
      ]
    },
    features: {
      title: 'Key features',
      intro: 'A simple view of the essentials for the first landing page release.',
      items: [
        {
          title: 'Real-time monitoring',
          description: 'Visualize traffic and dwell time by zone to detect bottlenecks.'
        },
        {
          title: 'Heatmaps',
          description: 'Identify hot and cold zones to optimize layout, stock, and promotions.'
        },
        {
          title: 'Smart alerts',
          description:
            'Staff receives immediate notifications when saturation or unattended areas appear.'
        },
        {
          title: 'Buyer assistance',
          description:
            'Check stock, location, and promotions from an in-store web kiosk interface.'
        }
      ]
    },
    about: {
      title: 'About us',
      paragraphs: [
        'RetailPulse was created to close the gap between e-commerce and physical retail. We bring real-time operational data to the point of sale for sharper decisions.',
        'Our first version prioritizes a clear, useful interface focused on immediate outcomes for admins and buyers.'
      ],
      team: [
        {
          avatar: 'J',
          name: 'Jesus',
          role: 'Frontend'
        },
        {
          avatar: 'A',
          name: 'Anghelo',
          role: 'Backend'
        },
        {
          avatar: 'J',
          name: 'Jose',
          role: 'Architecture'
        },
        {
          avatar: 'L',
          name: 'Luis',
          role: 'Analytics'
        },
        {
          avatar: 'F',
          name: 'Fabio',
          role: 'Product'
        }
      ]
    },
    benefits: {
      title: 'Benefits',
      groups: [
        {
          title: 'For store managers',
          items: [
            {
              className: 'benefit-illustration benefit-illustration-admin-layout',
              illustration: 'Layout',
              title: 'Layout optimization through heatmaps:',
              detail:
                'Visualize your customer flow through intensity maps. Identify hot and cold zones to redistribute low-rotation products and maximize the profitability of every square meter.'
            },
            {
              className: 'benefit-illustration benefit-illustration-admin-alerts',
              illustration: 'Alerts',
              title: 'Agile operations with real-time alerts:',
              detail:
                'Receive immediate notifications about stock breaks or aisle crowding. Coordinate floor staff efficiently, keep areas covered, and reduce lost sales due to delayed replenishment.'
            }
          ]
        },
        {
          title: 'For in-store buyers',
          items: [
            {
              className: 'benefit-illustration benefit-illustration-buyer-nav',
              illustration: 'Route',
              title: 'Smart navigation and product location:',
              detail:
                'Remove the frustration of searching aisle by aisle. Through an interactive kiosk, buyers can see the fastest route to the product they need for a smooth shopping journey.'
            },
            {
              className: 'benefit-illustration benefit-illustration-buyer-stock',
              illustration: 'Stock',
              title: 'Full autonomy for stock and pricing checks:',
              detail:
                'Let buyers verify availability and prices instantly by entering their ID. By promoting self-service, repeated questions to staff decrease and customer satisfaction improves.'
            }
          ]
        }
      ]
    },
    pricing: {
      title: 'Plans to start with RetailPulse',
      intro:
        'Choose the plan that fits your store and continue registration directly in the web application.',
      cta: 'Select plan',
      plans: [
        {
          id: 'starter',
          name: 'Starter',
          price: 'S/ 49 per month',
          description: 'For small stores that want to digitize inventory and assisted search.',
          features: ['Basic catalog and stock', 'Search kiosk', 'Store setup']
        },
        {
          id: 'growth',
          name: 'Growth',
          price: 'S/ 99 per month',
          description: 'For businesses that need alerts, staff tasks, and zone metrics.',
          features: ['Operational alerts', 'Staff tasks', 'Admin dashboard']
        },
        {
          id: 'premium',
          name: 'Premium',
          price: 'S/ 149 per month',
          description: 'For stores that want advanced analytics, conversion, and recommendations.',
          features: ['Heatmaps', 'Commercial recommendations', 'Conversion reports']
        }
      ]
    },
    testimonials: {
      title: 'Testimonials',
      items: [
        {
          quote:
            '"We used to make decisions by intuition. With heatmaps, we started moving products with data-backed criteria and saw improvements in the first month."',
          author: 'Carlos Mendoza, Store manager'
        },
        {
          quote:
            '"Now I find products and stock in minutes. The kiosk saves me time and improves my shopping experience."',
          author: 'Lucia Ramos, Customer'
        }
      ]
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'What is RetailPulse and how does it help my business?',
          answer:
            'It is a SaaS platform that turns in-store traffic into actionable insights to improve conversion and shopping experience.'
        },
        {
          question: 'Do I need to install a mobile app?',
          answer:
            'No. The system is web-based. Admins and buyers access it from responsive interfaces.'
        },
        {
          question: 'How are staff alerts generated?',
          answer:
            'The platform analyzes density and waiting times; when operational risk is detected, real-time alerts are sent.'
        },
        {
          question: 'Is personal data secure?',
          answer:
            'Yes. Security controls and good practices are applied to protect both business and buyer information.'
        }
      ]
    },
    contact: {
      title: 'Contact us',
      description:
        'If you want a demo or have questions for your first implementation, leave your details and we will reply shortly.',
      form: {
        nameLabel: 'Full name',
        namePlaceholder: 'Your name',
        phoneLabel: 'Phone',
        phonePlaceholder: '999 999 999',
        emailLabel: 'Email',
        emailPlaceholder: 'email@company.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell us how we can help',
        submit: 'Send request'
      }
    },
    footer: {
      brandTitle: 'RetailPulse',
      brandDescription: 'E-commerce analytics applied to physical stores.',
      linksTitle: 'Links',
      faqLink: 'FAQ',
      contactTitle: 'Contact',
      email: 'teamup@retailpulse.pe',
      phone: '+51 999 456 780',
      location: 'Lima, Peru',
      bottom: 'Copyright (c) {{year}} RetailPulse.'
    }
  }
};
