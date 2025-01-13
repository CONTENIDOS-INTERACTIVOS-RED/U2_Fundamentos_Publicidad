export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Estructura y procesos de la publicidad',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Agencias de publicidad: roles y funciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estructura organizativa',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Agencias y marcas',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'El proceso creativo publicitario: desde el briefing hasta la ejecución',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'El briefing publicitario',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Desarrollo del concepto creativo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Producción y ejecución',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Planificación estratégica y medios en publicidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición de objetivos y segmentación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Selección de medios y canales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Medición y evaluación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Agencia',
      significado:
        'Organización que planifica, crea y ejecuta campañas publicitarias, para marcas y clientes.',
    },
    {
      termino: 'Brief',
      significado:
        'Documento guía que contiene información clave sobre los objetivos, el público y los mensajes de una campaña publicitaria.',
    },
    {
      termino: 'Creatividad',
      significado:
        'Capacidad para generar ideas originales y efectivas en la resolución de problemas o en la creación de mensajes publicitarios.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Plan de acción diseñado para alcanzar objetivos específicos de manera efectiva.',
    },
    {
      termino: 'Investigación de mercados',
      significado:
        'Proceso de recopilar y analizar datos para entender el comportamiento, necesidades y preferencias del público objetivo.',
    },
    {
      termino: 'KPIs (Indicadores Claves de Desempeño)',
      significado:
        'Métricas utilizadas para medir el éxito de una campaña publicitaria.',
    },
    {
      termino: 'Marca',
      significado:
        'Identidad única de un producto, servicio o empresa que lo diferencia en el mercado.',
    },
    {
      termino: 'Medios digitales',
      significado:
        'Plataformas en línea, como redes sociales, buscadores y sitios web, utilizadas para difundir mensajes publicitarios.',
    },
    {
      termino: 'Medios tradicionales',
      significado:
        'Canales publicitarios como televisión, radio y prensa, usados para llegar a grandes audiencias.',
    },
    {
      termino: 'Mercado objetivo',
      significado:
        'Segmento de consumidores con características comunes, que una marca busca alcanzar.',
    },
    {
      termino: 'Pieza creativa',
      significado:
        'Elemento visual, escrito o audiovisual diseñado para transmitir un mensaje publicitario.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Percepción que los consumidores tienen de una marca en relación con sus competidores.',
    },
    {
      termino: 'Publicidad',
      significado:
        'Actividad de comunicación que busca promover un producto, servicio o idea a través de diversos medios para influir en el comportamiento del público.',
    },
    {
      termino: 'Redactor',
      significado:
        'Profesional que crea textos persuasivos y creativos para anuncios, campañas y contenido publicitario.',
    },
    {
      termino: 'ROI (Return on Investment)',
      significado:
        'Métrica que mide el beneficio obtenido en relación con la inversión realizada en una campaña.',
    },
    {
      termino: 'Startups',
      significado:
        'Empresas emergentes con modelos de negocio innovadores, generalmente enfocadas en el crecimiento rápido.',
    },
    {
      termino: 'Target',
      significado:
        'Grupo específico de personas a quienes se dirige una campaña publicitaria.',
    },
    {
      termino: 'Tasa de conversión',
      significado:
        'Porcentaje de usuarios que realizan una acción deseada, como una compra o un registro.',
    },
    {
      termino: 'Versatilidad',
      significado:
        'Capacidad de adaptarse a diferentes contextos y desafíos con facilidad.',
    },
  ],
}
