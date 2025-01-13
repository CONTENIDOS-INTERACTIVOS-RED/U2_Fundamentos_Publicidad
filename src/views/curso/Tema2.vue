<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Segmentación de mercados: criterios y métodos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-color-4.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La segmentación de mercados, es un proceso estratégico esencial en marketing, que permite a las empresas dividir un mercado amplio y heterogéneo en grupos más pequeños, homogéneos y accionables. Este enfoque facilita la creación de ofertas personalizadas que maximizan la satisfacción del cliente y el retorno de inversión empresarial. A través de la segmentación, las empresas pueden identificar y priorizar sus públicos objetivos, optimizando sus recursos y estrategias de marketing.

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Criterios de segmentación

      p(data-aos="fade-left").mb-4  Los criterios de segmentación pueden ser: demográficos, psicográficos, conductuales, geográficos.

      h3(data-aos="fade-left") Demográficos

      p(data-aos="fade-left").mb-4  El criterio demográfico, se basa en características cuantitativas y tangibles de los consumidores, tales como: edad, sexo, estado civil, nivel de ingresos, ocupación, educación, religión, etc.

      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                  template(v-slot:imagen)
                    figure
                      img(src="@/assets/curso/tema2/info1.png", alt="", style="max-width: 620px;").mx-auto

                  .bg-color-white.box-shadow.p-3(x="50%" y="3%" numero="+")
                    h5 Género
                    p Enfocado en diferencias relacionadas con la moda, productos de belleza y artículos tecnológicos. Por ejemplo, los estudios muestran que las mujeres tienden a priorizar las características emocionales y estéticas en sus compras, mientras que los hombres pueden estar más orientados hacia la funcionalidad (Céspedes Sáenz, 2010).

                 
                  .bg-color-white.box-shadow.p-3(x="23%" y="80%" numero="+")
                    h5 Edad
                    p Este factor influye significativamente en las necesidades y preferencias. Por ejemplo, los productos para niños se diferencian sustancialmente de los destinados a los adultos mayores, debido a sus usos y atributos específicos.
                  
                  .bg-color-white.box-shadow.p-3(x="78%" y="80%" numero="+")
                    h5 Ingresos
                    p Este criterio segmenta a los consumidores en base a su capacidad adquisitiva, influyendo en el consumo de productos premium o económicos. Por ejemplo, durante una recesión económica, los consumidores con ingresos más bajos priorizan artículos básicos sobre bienes de lujo (Kotler et al., 2021).
                    

      h3(data-aos="fade-left") Psicográficos

      p(data-aos="fade-left").mb-4  Este criterio explora aspectos relacionados con los valores, la personalidad y el estilo de vida del consumidor.

      #Tarjetas1.bg-full-width.bg-fondo-1.mb-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/2.svg"
                  alt="Barreras"
                  style="width: 90px"
                )
                h5.mb-2.text-center Valores
                p.mb-0.text-center Los consumidores que valoran la sostenibilidad, por ejemplo, tienden a preferir marcas que promuevan prácticas éticas y responsables, como el uso de materiales reciclados o el comercio justo.

            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/3.svg"
                  alt="Información"
                  style="width: 90px"
                )
                h5.mb-2.text-center Estilo de vida
                p.mb-0.text-center Este criterio define cómo los consumidores utilizan su tiempo y recursos. Según Cortés Cabrera (2023), los consumidores activos y deportistas, buscan productos específicos que se ajusten a sus rutinas, como suplementos o ropa técnica.

            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/4.svg"
                  alt="Producto"
                  style="width: 90px"
                )
                h5.mb-2.text-center Intereses
                p.mb-0.text-center Identificar nichos, como aficionados a la tecnología, permite desarrollar productos o servicios que cumplan con expectativas específicas, promoviendo una mayor conexión emocional con las marcas.


      h3(data-aos="fade-left") Conductuales

      .row.align-items-center.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 El análisis conductual se enfoca en cómo los consumidores interactúan con los productos o servicios:

          LineaTiempoD.color-primario.large(data-aos="fade-left")
            p(numero="1" titulo="Beneficios buscados") La funcionalidad, calidad o status asociado, son motivaciones comunes. Por ejemplo, los consumidores que buscan eficiencia energética, seleccionarán dispositivos electrónicos que reduzcan el consumo de electricidad.
            p(numero="2" titulo="Lealtad") Segmentar a los clientes, según su grado de fidelidad, permite diseñar estrategias diferenciadas. Por ejemplo, programas de recompensas para consumidores frecuentes, pueden incentivar la permanencia y aumentar el valor del cliente a largo plazo.
            p(numero="3" titulo="Frecuencia de uso") Los usuarios regulares suelen recibir ofertas específicas que refuercen el uso continuo, mientras que los consumidores ocasionales, podrían ser incentivados para aumentar su frecuencia de compra.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0


      h3(data-aos="fade-left") Geográficos
      p(data-aos="fade-left").mb-4  La segmentación geográfica toma en cuenta la ubicación y el entorno físico del consumidor:

      .bg-full-width.bg-fondo-1
        .px-4.px-md-5.pb-md-3

          .row.justify-content-center.align-items-stretch
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Ubicación
                  p.mb-0 Las estrategias locales, como promociones regionales, son fundamentales para conectar con consumidores específicos.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/7.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Clima
                  p.mb-0 Influye en productos estacionales. Por ejemplo, en regiones cálidas, las bebidas frías tienen mayor demanda que en climas fríos.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Densidad poblacional
                  p.mb-0 En áreas urbanas, los productos de conveniencia y servicios de entrega, suelen tener mayor éxito, mientras que en zonas rurales, las estrategias pueden enfocarse en puntos de venta físicos, específicos.

      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Importancia de la segmentación de mercados

      p(data-aos="fade-left").mb-4  La segmentación de mercados beneficia a las empresas en múltiples dimensiones:


      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Personalización y relevancia" :icon="require('@/assets/bullets/icon-tab-c-1-2.svg')")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Personalización y relevancia
              p Ofrecer productos y servicios alineados con las necesidades de cada segmento, fortalece la relación con los clientes y mejora su satisfacción.
          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/9.png', alt='')

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Eficiencia en el uso de recursos" :icon="require('@/assets/bullets/icon-tab-c-2-2.svg')")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Eficiencia en el uso de recursos
              p Al focalizar esfuerzos en los segmentos con mayor potencial, las empresas optimizan su presupuesto y aumentan el retorno de inversión.

          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/10.png', alt='')

        .tabs-content.border.px-4.p-md-5.py-3(titulo="Competitividad" :icon="require('@/assets/bullets/icon-tab-c-2-2.svg')")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Competitividad
              p Permite identificar oportunidades de diferenciación en mercados saturados, brindando una ventaja estratégica.

          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/11.png', alt='')

      p(data-aos="fade-left").mb-4 Según UAPA (2023), la segmentación no solo mejora la efectividad de las estrategias de marketing, sino que también facilita el desarrollo de relaciones más profundas y significativas con los consumidores.


      .bg-full-width.bg-color-2.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/12.png', alt='')
            .col-lg-7
              h2.mb-4(data-aos="flip-up") Ejemplo de aplicación práctica 
              p.mb-4(data-aos="fade-right") La segmentación de mercados y el análisis del comportamiento del consumidor son elementos clave en el diseño de estrategias de marketing que conecten con las necesidades y valores de diferentes públicos. En el PDF Ejemplo de aplicación práctica, se presentan casos reales que ilustran cómo empresas como Apple han implementado estrategias basadas en criterios demográficos, psicográficos, conductuales y geográficos. Estos ejemplos destacan cómo las marcas pueden integrar prácticas responsables, sostenibilidad e innovación para maximizar su impacto en mercados clave y fortalecer su reputación.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_T1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Ejemplo de aplicación práctica 

      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Métodos avanzados de segmentación


      .row.mb-5
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La segmentación avanzada, se ha convertido en una herramienta esencial en el marketing contemporáneo, permitiendo a las empresas identificar patrones de consumo más y comportamientos dinámicos, detallados. 

          p(data-aos="fade-left") Con la evolución de las tecnologías digitales y la accesibilidad a grandes volúmenes de datos, ahora las organizaciones pueden profundizar en el entendimiento de sus clientes y personalizar sus estrategias, de manera efectiva.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")


      h3(data-aos="fade-left") Análisis de datos para identificar patrones y comportamientos

      .row.mb-5

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p.mb-0 Por ejemplo, Netflix utiliza algoritmos avanzados para analizar los patrones de visualización de sus usuarios, recomendando contenido personalizado basado en preferencias individuales. Este modelo no solo mejora la experiencia del cliente, sino que también aumenta significativamente la retención y lealtad de los usuarios. De manera similar, marcas como Starbucks, emplean sistemas de Big Data para ajustar sus ofertas, según los comportamientos locales, optimizando las operaciones y maximizando el impacto en mercados específicos.

          p(data-aos="fade-left").mb-4  El análisis de datos permite identificar patrones claves en los comportamientos del consumidor, facilitando decisiones estratégicas basadas en información precisa. Este enfoque va más allá de la simple recopilación de datos demográficos y conductuales. A través del análisis predictivo y técnicas de minería de datos, las empresas pueden comprender mejor el ciclo de vida del cliente, sus preferencias y sus comportamientos recurrentes. El uso estratégico de datos amplifica la capacidad de las empresas, para anticiparse a las necesidades de los consumidores.


      h3(data-aos="fade-left") Herramientas digitales

      .row.mb-5
        .col-lg-8
          .bg-color-5.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Las herramientas digitales basadas en inteligencia artificial (IA) y aprendizaje automático (ML), han revolucionado la manera en que las empresas segmentan a sus mercados. 

          p(data-aos="fade-left") Estas tecnologías procesan datos en tiempo real, permitiendo una segmentación dinámica que se adapta a las interacciones de los usuarios, en plataformas digitales. 

          p(data-aos="fade-left") Según Cortés Cabrera (2023), el uso de herramientas digitales no solo mejora la precisión de las segmentaciones, sino que también permite a las empresas responder de manera inmediata, a los cambios en las preferencias del consumidor.

          p(data-aos="fade-left") Por ejemplo:

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")



      .bg-full-width.bg-fondo-1
        .px-4.px-md-5.pb-md-3

          .row.justify-content-center.align-items-stretch
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/18.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Adobe Experience Cloud
                  p.mb-0 Integra datos de múltiples fuentes para crear perfiles de cliente en tiempo real, ajustando las campañas publicitarias a las necesidades específicas de los segmentos.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/19.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Google Analytics
                  p.mb-0 Permite realizar segmentaciones basadas en la actividad de los usuarios en sitios web, como la frecuencia de visitas, el tiempo de permanencia y el comportamiento de compra.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/20.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Amazon
                  p.mb-0 A través de su sistema de recomendaciones, segmenta a los consumidores en tiempo real según su historial de compras y búsquedas, aumentando las tasas de conversión al personalizar las ofertas en función de los intereses del cliente.


      h3(data-aos="fade-left") Métodos innovadores de segmentación

      p(data-aos="fade-left").mb-4 Además del análisis de datos y las herramientas digitales, los métodos avanzados de segmentación, incluyen el uso de tecnologías emergentes como:


      .row.align-items-center.mb-5
        .col-lg-8

          LineaTiempoD.color-primario.large(data-aos="fade-left")
            p(numero="1" titulo="Análisis geoespacial") Permite segmentar a los consumidores, según sus ubicaciones físicas. Este método es útil para campañas locales que buscan atraer clientes cercanos a puntos de venta específicos.
            p(numero="2" titulo="Análisis psicográfico avanzado") Herramientas como IBM Watson permiten analizar la personalidad, intereses y valores de los consumidores basándose en sus interacciones en redes sociales.
            p(numero="3" titulo="Segmentación predictiva") Con el apoyo de algoritmos predictivos, las empresas pueden identificar segmentos futuros y anticiparse a sus necesidades, ajustando productos y servicios con mayor eficacia.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/21.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0


      .bg-full-width.bg-color-2.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/22.png', alt='')
            .col-lg-7
              h2.mb-4(data-aos="flip-up") Ejemplo Samsung 
              p.mb-4(data-aos="fade-right") La segmentación de mercados y el uso de tecnologías avanzadas son fundamentales para personalizar la experiencia del cliente y maximizar el impacto de las estrategias de marketing. En el PDF Ejemplo Samsung, se analiza cómo esta empresa ha integrado Big Data e inteligencia artificial para identificar patrones de consumo, realizar segmentaciones en tiempo real y lanzar productos innovadores como los Galaxy Z Fold6 y Z Flip6. Este enfoque permite a Samsung fortalecer su posición en el mercado global, mejorar la satisfacción del cliente y responder eficazmente a las demandas del mercado.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_T1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Ejemplo Samsung 

      p Las ventajas de los métodos avanzados de segmentación, son:


      .bg-full-width.bg-fondo-2
        .ps-5

          .row.justify-content-center.align-items-stretch

            .col-lg-6(data-aos="fade-left")
              .pt-5.ps-5
                
                ol.lista-ol(data-aos="fade-up").mt-4
                  li.mb-4
                    .lista-ol--cuadro__vineta
                      span 1
                    | #[strong Personalización profunda.] Permite ajustar mensajes y ofertas a las necesidades específicas de cada segmento, maximizando la relevancia de las campañas.
                  li.mb-4
                    .lista-ol--cuadro__vineta
                      span 2
                    | #[strong Eficiencia en recursos.] Focaliza los esfuerzos de marketing, en segmentos de alto potencial, optimizando los costos.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | #[strong Adaptabilidad.] Responde a los cambios en las preferencias del consumidor en tiempo real, mejorando la competitividad en mercados dinámicos.



            .col-lg-6(data-aos="zoom-in")
              img.img-fluid(src='@/assets/curso/tema2/23.svg', style="max-width:506px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0


      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/690597?fs_q=Principios__de__mercadeo&prev=fs" target="_blank" rel="noopener noreferrer") Céspedes Sáenz, A. (2010). Principios de mercadeo (5ª ed.). Ecoe Ediciones.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/270387" target="_blank" rel="noopener noreferrer") Cortés Cabrera, J. J. (2023). Guía práctica de Marketing para estudiantes y docentes universitarios. Fundación Universitaria San Mateo.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/185006" target="_blank" rel="noopener noreferrer") Giraldo Oliveros, M. E., Ortiz Velásquez, M. & Castro Abello, M. D. (2021). Marketing: una versión gráfica. Universidad del Norte.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/71478" target="_blank" rel="noopener noreferrer") Kotler, P. & Kotler, M. (2016). Marketing de ciudades. LID Editorial España.

              p.d-flex.my-4
              
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/269981" target="_blank" rel="noopener noreferrer") Kotler, P., Kartajaya, H. & Setiawan, I. (2018). Marketing 4.0: transforma tu estrategia para atraer al consumidor digital. LID Editorial España.


              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicodeloriente/titulos/243900" target="_blank" rel="noopener noreferrer") UAPA. (2023). Mercadotecnia. Universidad Abierta para Adultos (UAPA).

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=Nu-bbrdYrpY" target="_blank" rel="noopener noreferrer") Emprende Aprendiendo. (2025). Así Cambiará el Marketing Digital este 2025 | 10 Estrategias Prácticas

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
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
