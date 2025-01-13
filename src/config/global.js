export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: ' Comportamiento del consumidor y segmentación de mercados',
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
        titulo: 'Comportamiento del consumidor y segmentación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Factores que influyen en el comportamiento del consumidor',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Segmentación de mercados: criterios y métodos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Criterios de segmentación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Importancia de la segmentación de mercados',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Métodos avanzados de segmentación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Identificación de mercados objetivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Selección y priorización de mercados objetivo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Análisis de variables de rentabilidad, accesibilidad y crecimiento',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Herramientas de análisis y posicionamiento',
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
      termino: 'Análisis predictivo',
      significado:
        'Técnica que utiliza datos, algoritmos y aprendizaje automático, para prever comportamientos futuros.',
    },
    {
      termino: 'Big Data',
      significado:
        'Conjunto de datos masivos y complejos que requieren herramientas avanzadas para su análisis y gestión.',
    },
    {
      termino: 'Clase social',
      significado:
        'Nivel socioeconómico basado en ingresos, ocupación y educación, que influye en las decisiones de compra.',
    },
    {
      termino: 'Comportamiento del consumidor',
      significado:
        'Proceso mediante el cual las personas seleccionan, compran y usan bienes o servicios, para satisfacer necesidades.',
    },
    {
      termino: 'Economía circular',
      significado:
        'Modelo que busca reducir, reutilizar y reciclar recursos, para minimizar el impacto ambiental.',
    },
    {
      termino: 'Inteligencia Artificial (IA)',
      significado:
        'Tecnología que simula procesos humanos como aprendizaje y toma de decisiones, en sistemas computacionales.',
    },
    {
      termino: 'Mapas de posicionamiento',
      significado:
        'Herramientas visuales que representan la percepción del consumidor, sobre productos o marcas en relación con la competencia.',
    },
    {
      termino: 'Marketing 4.0',
      significado:
        'Enfoque que combina estrategias tradicionales y digitales, centrado en la experiencia del cliente y la conectividad.',
    },
    {
      termino: 'Percepción',
      significado:
        'Proceso mental mediante el cual los consumidores interpretan estímulos externos como productos, marcas o mensajes publicitarios.',
    },
    {
      termino: 'Psicografía',
      significado:
        'Segmentación basada en valores, estilo de vida y personalidad de los consumidores.',
    },
    {
      termino: 'Responsabilidad Social Corporativa (RSC)',
      significado:
        'Prácticas empresariales que integran objetivos sociales y ambientales, en su operación y estrategias.',
    },
    {
      termino: 'Segmentación conductual',
      significado:
        'Clasificación de consumidores, según su comportamiento, como frecuencia de uso, beneficios buscados o nivel de lealtad.',
    },
    {
      termino: 'Segmentación demográfica',
      significado:
        'División de mercados basada en características como edad, género, ingresos o estado civil.',
    },
    {
      termino: 'Segmentación geográfica',
      significado:
        'División de mercados, según la ubicación física o características geográficas de los consumidores.',
    },
    {
      termino: 'Segmentación psicográfica',
      significado:
        'Segmentación que estudia los valores, intereses, actitudes y estilo de vida, de los consumidores.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Capacidad de satisfacer las necesidades presentes sin comprometer los recursos, para generaciones futuras.',
    },
    {
      termino: 'Tendencias de consumo',
      significado:
        'Cambios en los hábitos y preferencias de compra, influenciados por factores sociales, culturales y tecnológicos.',
    },
    {
      termino: 'Valor percibido',
      significado:
        'Evaluación subjetiva de los consumidores, sobre los beneficios y costos de un producto o servicio.',
    },
    {
      termino: 'Variables de segmentación',
      significado:
        'Factores utilizados para dividir un mercado en segmentos, como demografía, geografía, psicografía y comportamiento.',
    },
  ],
}
