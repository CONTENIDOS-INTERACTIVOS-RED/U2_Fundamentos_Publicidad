<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. El proceso creativo publicitario: desde el <em>briefing</em> hasta la ejecución'")
    .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.overflow-hidden
  
      p(data-aos="fade-left").mb-5 En esta primera parte, conoceremos los conceptos básicos de la publicidad y sus principales objetivos.
  

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] El #[em briefing] publicitario


      .bg-full-width.bg-fondo-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-8
              .py-4.px-5.bg-color-3(data-aos="fade-right").h-100
                ul.lista-ul
                  li.mb-4
                    i.fas.fa-check-circle
                    | El #[em brief] o #[em briefing] publicitario, es la base o punto de partida para una campaña publicitaria y se transforma en el recurso de datos preliminares para que el publicista y los creadores de la campaña, puedan elaborar estrategias de comunicación, conceptos creativos y la estructura de todos los mensajes. Por lo tanto, conforme al funcionamiento habitual de un proceso publicitario, la empresa debe llevar a cabo el #[em brief] y, puntualmente, el departamento de marketing, tras la recopilación de toda la información que será proporcionada a los expertos del sector.
                  li.mb-2
                    i.fas.fa-check-circle
                    | El brieﬁng es un informe que selecciona y ordena la información estratégica. Y esto significa que es más que un resumen informativo, que dentro del briefing encontraremos un análisis y las instrucciones precisas que se deben tener en cuenta.

            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/1.png", alt="", data-aos="zoom-in")



          .row.justify-content-center.align-items-stretch
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/2.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Primero
                  p.mb-0 Debe ser claro, fácil de entender para todos los involucrados.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/3.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Segundo
                  p.mb-0 Deber ser conciso, contener únicamente la información relevante.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/4.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Tercero
                  p.mb-0 Debe tener un enfoque claro, es decir con objetivos precisos y alineados con la estrategia del cliente.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/5.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Cuarto
                  p.mb-0 Debe ser motivador, inspirador, creativo y generador de ideas. 


      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Es así como el cliente es el responsable de preparar el brief y la agencia publicitaria, junto con el departamento de marketing de la empresa, son los encargados de recopilar toda la información relevante para la ejecución del mismo, tales como: datos sobre el producto, el público objetivo, el mercado, y lo que la empresa quiere lograr.

      p(data-aos="fade-left").mb-5 Una vez listo lo anterior, comparten esta información con los publicistas y creativos, quienes usarán el brief como base para desarrollar la campaña y, de acuerdo con esto, se selecciona el tipo de brief: 

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white(data-aos="zoom-in")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-1.png")
              .col-lg-7
                h5 Brief de primer contacto

                p Es un brief que se realiza cuando un cliente o empresa contrata por primera vez a una agencia publicitaria. Su función principal es la de realizar un diagnóstico estratégico, permitiendo a quien va a desarrollar las estrategias de comunicación, conocer la empresa desde el análisis del mercado. Tiene un enfoque general, es decir que pretende conocer más el cliente o la empresa, que un producto o servicio, en particular.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema1/slider-1.png")
              .col-lg-7
                h5 Brief táctico
                p Este tipo de brief tiene como objetivo principal establecer claramente los resultados esperados y establecer un plan estratégico de comunicación, al indicar que es una táctica, es solo una parte de un todo, es decir que para implementar un plan muchas veces, se requiere más de un brief; a diferencia del brief de primer contacto, su enfoque es específico en un producto o servicio.

      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Brief de primer contacto" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Brief de primer contacto

              .row.justify-content-center.align-items-center.mb-5
                .col-lg-6
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      | Nombre de la empresa.
                    li
                      i.fas.fa-check
                      | Misión y visión de la empresa.
                    li
                      i.fas.fa-check
                      | Objetivo principal de la empresa.
                    li
                      i.fas.fa-check
                      | Diferenciación de la empresa.
                    li
                      i.fas.fa-check
                      | Promesas secundarias.
                    li
                      i.fas.fa-check
                      | Mercado objetivo.
                    li
                      i.fas.fa-check
                      | Portafolio de productos o servicios.
                .col-lg-6
                  ul.lista-ul

                    li
                      i.fas.fa-check
                      | Antecedentes publicitarios.
                    li
                      i.fas.fa-check
                      | Necesidades publicitarias.
                    li
                      i.fas.fa-check
                      | Resultados esperados con la publicidad.
                    li
                      i.fas.fa-check
                      | Competencia.
                    li
                      i.fas.fa-check
                      | Políticas de la empresa.
                    li
                      i.fas.fa-check
                      | Posicionamiento.
                    li
                      i.fas.fa-check
                      | Contacto.
          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema2/tab-1.png", alt="")

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Brief táctico" :icon="require('@/assets/bullets/icon-tab-c-2.svg')")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Brief táctico
              .row.justify-content-center.mb-5
                .col-lg-6
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      | Identificación de la campaña.
                    li
                      i.fas.fa-check
                      | Necesidad de la marca.
                    li
                      i.fas.fa-check
                      | Objetivos de la campaña.
                    li
                      i.fas.fa-check
                      | Mercado objetivo.
                    li
                      i.fas.fa-check
                      | Target comunicacional.
                .col-lg-6
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      | Mensaje a comunicar.
                    li
                      i.fas.fa-check
                      | Piezas a desarrollar y guías de ejecución.
                    li
                      i.fas.fa-check
                      | Cronograma de actividades a desarrollar.
                    li
                      i.fas.fa-check
                      | Aspectos técnicos y legales.
          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema2/tab-2.png", alt="")

      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Desarrollo del concepto creativo
      
      .row.mb-5
        .col-lg-8
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El concepto creativo es la idea central que da coherencia y dirección a toda la campaña. Según Coll Rubio & Micó Sanz (2018), un buen concepto creativo debe ser claro, memorable y capaz de conectar emocionalmente con el público.

          p(data-aos="fade-left") El primer modelo sobre el proceso creativo, fue planteado en 1910 por John Dewey, y se basaba en cinco etapas: 

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")


      .bg-full-width.bg-fondo-2.mb-5
        .px-lg-5

          .row.justify-content-center.align-items-stretch

            .col-lg-6(data-aos="fade-left")
              .pt-5
                p.mb-1 #[strong Etapa 1]	Encuentro con la dificultad o problema. 
                p.mb-1 #[strong Etapa 2]	Localización y definición del problema. 
                p.mb-1 #[strong Etapa 3]	Planteamiento de posibles soluciones. 
                p.mb-1 #[strong Etapa 4]	Desarrollo de las soluciones y análisis de las consecuencias. 
                p.mb-1 #[strong Etapa 5]	Aceptación de la solución propuesta.


            .col-lg-4(data-aos="zoom-in")
              img.img-fluid(src="@/assets/curso/tema2/9.svg", style="max-width:295px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

      p(data-aos="fade-left") Es así como, desde diferentes autores, se ha concluido que la creatividad parte de un problema, para poderle dar solución al mismo; Gutiérrez Colmener (2014), relaciona que, con relación a la empresa, las áreas que se deben explorar para identificar problemas, son: 

      .bg-full-width.bg-fondo-6
        .px-4.px-md-5.py-5
          .row.justify-content-center.mb-5

            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/10.png", alt="").mx-auto

            .col-lg-8

              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema2/11.svg" alt="AvatarTop" , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 La estrategia
                  p.text-center Identificar sucesos que han anulado las ventajas competitivas, sobre las que se asentaba el negocio.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema2/12.svg" alt="AvatarTop" , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 El precio
                  p.text-center Valor monetario que se le da al producto o servicio.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema2/13.svg" alt="AvatarTop" , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 El mercado
                  p.text-center Suelen ser muy dinámicos. Su estructura, sus componentes, sus precios, varían constantemente.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema2/14.svg" alt="AvatarTop" , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 El producto
                  p.text-center Los productos tienen un ciclo de vida, lo cual quiere decir que, en algún momento, comienzan a envejecer.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema2/15.svg" alt="AvatarTop" , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 La organización
                  p.text-center Detectar los problemas que afectan a las organizaciones.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema2/16.svg" alt="AvatarTop" , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Los procesos de gestión
                  p.text-center Estar al día de las posibles mejoras de dichos procesos.

          p(data-aos="fade-left") Para el desarrollo del concepto creativo, los equipos deben detectar y prever los problemas para trabajar y afrontarlos desde un concepto creativo; para esto pueden utilizar diversas metodologías que fomentan la innovación. Guilera y Garrell (2021), presentan diversas técnicas para fomentar la creatividad en el desarrollo de productos y servicios, entre las cuales se pueden enunciar: 


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white(data-aos="zoom-in")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-1-2.png")
              .col-lg-7
                h5 Brainstorming

                p Reuniones donde los participantes generan ideas, libremente, sobre un tema o problema, sin críticas ni evaluaciones inmediatas, para fomentar la creatividad colectiva, a través de lluvia de ideas.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-2-2.png")
              .col-lg-7
                h5 Mapas mentales
                p Diagramas que representan ideas, conceptos y sus interrelaciones, facilitando la organización y generación de nuevas ideas.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-3-2.png")
              .col-lg-7
                h5 SCAMPER
                p Una técnica que invita a modificar ideas existentes, mediante acciones como Sustituir, Combinar, Adaptar, Modificar, Poner en otros usos, Eliminar y Reorganizar.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-4-2.png")
              .col-lg-7
                h5 Pensamiento lateral
                p Método que busca resolver problemas mediante enfoques indirectos y creativos, alejándose de patrones de pensamiento tradicionales.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-5-2.png")
              .col-lg-7
                h5 Seis sombreros para pensar
                p Propuesta de Edward de Bono que asigna diferentes perspectivas (emocional, informativa, creativa, etc.) o "sombreros" imaginarios, ayudando a analizar problemas desde múltiples ángulos.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-6-2.png")
              .col-lg-7
                h5 Analogías y metáforas
                p Uso de comparaciones para trasladar soluciones de un contexto a otro, facilitando la generación de ideas innovadoras.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-7-2.png")
              .col-lg-7
                h5 Técnicas de inversión
                p Consiste en invertir supuestos o planteamientos, para explorar nuevas posibilidades y soluciones.
      
      
      p(data-aos="fade-left") Estas técnicas, entre otras, son fundamentales para impulsar la innovación y la creatividad en el desarrollo de productos y servicios inteligentes y sostenibles.cnicas para fomentar la creatividad en el desarrollo de productos y servicios, entre las cuales se pueden enunciar: 

      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-8
          .py-4.px-5.bg-color-3(data-aos="fade-right").h-100
            p.mb-4 Coll Rubio, P. & Micó Sanz, J. L. (2018), en su libro Estrategias de publicidad y relaciones públicas en la era digital, desarrollan el ejemplo claro de concepto creativo de Fotocasa: “portal inmobiliario que nació en el 2004, de la fusión de dos portales, Anuntis y Vivendum. Actualmente, pertenece a Schibsted Spain, compañía de anuncios clasificados y ofertas de empleo más grande y diversificada de España, que cuenta con otros portales como InfoJobs, Vibbo, Coches.net y Milanuncios, y que forma parte de la multinacional noruega Schibsted Media Group, presente en más de 30 países, donde trabajan 6.800 empleados. El portal de Fotocasa recibe más de un millón de visitas mensuales; el equipo de marketing está conformado por un grupo de profesionales senior internos, liderados por Montse Lavilla, que están al frente de áreas como el diseño, la comunicación, las redes sociales o la publicidad para planificar y coordinar las acciones de comunicación”. 

            a.anexo.mb-4.bg-white.w-fit(href="https://www.fotocasa.es/es/quienes-somos/" target="_blank")
              .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <strong>Sitio web. </strong> Fotocasa

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/17.png", alt="", data-aos="zoom-in")


      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Producción y ejecución 

      .bg-full-width.bg-color-2
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema2/18.png", alt="")
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Producción y ejecución 

              p.mb-4(data-aos="fade-right") En el PDF Producción y ejecución, se detallan las fases clave de este proceso, desde la planificación de recursos y la creación de contenido hasta la edición final y validación de materiales. Además, se analizan los roles de los departamentos creativos, técnicos y logísticos, destacando la importancia de la colaboración interdisciplinaria para mantener la coherencia y calidad en cada etapa.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Producción y ejecución 


      //emPIEZA AQUI
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
