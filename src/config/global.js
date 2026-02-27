export default {
  global: {
    Name: 'Comunicación telefónica y atención al cliente',
    Description:
      'La comunicación telefónica es una herramienta clave en la atención al cliente y la proyección de la imagen organizacional. Requiere habilidades como escucha activa, uso adecuado de la voz, lenguaje positivo y manejo del silencio. Un asesor bien preparado puede identificar necesidades, gestionar situaciones complejas y fortalecer la relación con los clientes mediante un trato respetuoso, claro y profesional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comunicación telefónica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'El papel del asesor en la comunicación telefónica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Componentes de la comunicación telefónica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Etapas de una llamada telefónica',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Conductas y tipologías de clientes',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas telefónicas básicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principios de la escucha activa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Modales telefónicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Preguntas informativas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Técnicas de sondeo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Comunicación por recapitulación',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Atención al cliente',
      significado:
        'conjunto de acciones orientadas a responder necesidades, inquietudes o solicitudes del cliente mediante un trato respetuoso y profesional.',
    },
    {
      termino: 'Asesor o asesora telefónica',
      significado:
        'persona responsable de atender llamadas, orientar al cliente y representar a la empresa durante la comunicación telefónica.',
    },
    {
      termino: 'Comunicación telefónica',
      significado:
        'proceso de intercambio de información a través del teléfono, en el que la voz y el lenguaje verbal permiten transmitir mensajes y proyectar la imagen de la organización.',
    },
    {
      termino: 'Escucha activa',
      significado:
        'habilidad que implica escuchar, analizar, interpretar y responder al mensaje del cliente demostrando comprensión e interés.',
    },
    {
      termino: 'Lenguaje verbal',
      significado:
        'uso de palabras y expresiones para comunicar ideas de manera clara y adecuada durante la llamada.',
    },
    {
      termino: 'Recapitulación',
      significado:
        'técnica comunicativa que permite repetir con otras palabras la información del cliente para confirmar su correcta comprensión.',
    },
    {
      termino: 'Silencio',
      significado:
        'pausa comunicativa que, bien utilizada, facilita la reflexión y la participación del cliente.',
    },
    {
      termino: 'Sondeo',
      significado:
        'técnica que consiste en realizar preguntas para obtener información relevante sobre el motivo de la llamada.',
    },
    {
      termino: 'Sonrisa telefónica:',
      significado:
        'actitud positiva que se percibe a través de la voz y genera un clima cordial durante la llamada.',
    },
    {
      termino: 'Voz',
      significado:
        'principal herramienta de la comunicación telefónica que transmite emociones, seguridad y confianza al interlocutor.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguirre, C. (2010). Técnicas y elementos de la comunicación telefónica. ',
      link: 'http://sweetxxvengance.blogspot.com.co/2010_09_01_archive.html',
    },
    {
      referencia: 'Baeza, C. (2010). Comunicación telefónica',
      link: 'http://claudiatelefonia.blogspot.com.co/',
    },
    {
      referencia: 'CETA. (2012). La tecnología como herramienta terapéutica. ',
      link: 'https://cetadevenezuela.wordpress.com/author/cetadevenezuela/',
    },
    {
      referencia: 'Designroc. (2016). Curso avanzado de escucha activa. ',
      link: '',
    },
    {
      referencia:
        'Escallón, E. (2007). Escuchar, comprender y mejorar las relaciones. Ministerio de Educación Nacional. ',
      link: 'http://www.mineducacion.gov.co/1621/article-122245.html',
    },
    {
      referencia: 'Foromarketing. (2016). Pregunta alternativa. ',
      link: ' http://www.foromarketing.com/diccionario/pregunta-alternativa/',
    },
    {
      referencia:
        'Gatti, F. (2013). Técnicas y elementos de la comunicación telefónica. ',
      link:
        'https://comunicaciones104.files.wordpress.com/2013/05/cortesia_telefonica.pdf',
    },
    {
      referencia:
        'González, J. (2020). Tipos de preguntas cerradas y abiertas: ventajas y desventajas. ',
      link: 'https://eduteka.icesi.edu.co/articulos/PruebasAbiertasCerradas',
    },
    {
      referencia: 'Reyes, C. P. (2016). Buenos modales al teléfono: operador. ',
      link: '',
    },
    {
      referencia: 'Suárez, D. (2012). Preguntas abiertas y cerradas. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Oscar Hernán Fuentes Hernández',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial – Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Ricardo Ortiz Puentes',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
