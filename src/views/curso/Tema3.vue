<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Planificación estratégica y medios en publicidad'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p(data-aos="fade-left").mb-5 En esta primera parte, conoceremos los conceptos básicos de la publicidad y sus principales objetivos.
  

      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Definición de objetivos y segmentación
  

      .row.mb-5
        .col-lg-8
          .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
            p.mb-0 Según Medina (2016), los objetivos publicitarios establecen qué se quiere lograr con una campaña, sirviendo como guía para el desarrollo de estrategias y tácticas.
          
          p(data-aos="fade-left") Los objetivos, además, son una metodología para establecer metas claras y alcanzables; un ejemplo de esta metodología son los objetivos SMART, los cuales establecen que deben ser: 
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in").mb-4.mb-lg-0

            
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Marketing tradicional y digital',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué factor social afecta las decisiones basadas en roles dentro de una sociedad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Percepción',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Roles sociales',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Motivación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Estilo de vida',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué estrategia ayuda a las empresas a adaptarse rápidamente a las demandas del mercado?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Segmentación en tiempo real',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Producción masiva',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Publicidad genérica',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Encuestas tradicionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué etapa del proceso de decisión del consumidor implica evaluar opciones?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reconocimiento del problema',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Evaluación de alternativas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decisión de compra',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Comportamiento post-compra',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué tipo de segmentación considera el clima y la densidad poblacional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Conductual',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Psicográfica',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Geográfica',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Demográfica',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué herramienta permite visualizar la posición de las marcas frente a sus competidores?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Análisis predictivo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Mapas de posicionamiento',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Publicidad en redes sociales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Big data',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
