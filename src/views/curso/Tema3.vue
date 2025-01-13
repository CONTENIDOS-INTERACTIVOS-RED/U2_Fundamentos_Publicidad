<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Planificación estratégica y medios en publicidad'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p(data-aos="fade-left").mb-5 A continuación, estudiaremos los elementos en la planificación estratégica y los medios de publicidad.
  

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
      
      .bg-full-width.bg-fondo-7.mb-5
        .px-lg-5

          .row.justify-content-center

            .col-lg-7.order-2(data-aos="fade-left")
              .pt-5
                p.mb-1 <b>Específicos (<em>Specific</em>)</b>. Claros y detallados.
                p.mb-1 <b>Medibles (<em>Measurable</em>)</b>.	Cuantificables para evaluar el éxito.
                p.mb-1 <b>Alcanzables (<em>Achievable</em>)</b>.	Realistas, según los recursos disponibles.
                p.mb-1 <b>Relevantes (<em>Relevant</em>)</b>.	Relacionados con las metas del negocio.
                p.mb-1 <b>Temporales (<em>Time-bound</em>)</b>.	Con un marco de tiempo definido.


            .col-lg-5.order-1(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/tema3/2.svg", data-aos="zoom-in").mb-4.mb-lg-0
      
      p.mb-5 Adicional a lo anterior, el objetivo principal de la publicidad es el de encontrar la manera de mantener una comunicación entre las empresas y el mercado objetivo, al que quieren llegar a través de sus productos o servicios, con el fin no solo de vender sino de mantenerse en el tiempo y lograr que sus clientes se identifiquen siempre, manteniéndose unidos, a través de las emociones y las sensaciones. 

      h2.mb-5(data-aos="fade-up") Identificación del público o mercado objetivo

      .row.mb-5
        .col-lg-4.order-2
          figure
            img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in").d-none.d-lg-block
        .col-lg-8.order-1
          p(data-aos="fade-left") Kotler (2024), en su libro “Marketing empresarial: más allá del profesionalismo, hacia la creatividad, el liderazgo y la sostenibilidad”, indica que el mercado es: 
          .bloque-texto-c.bg-color-6.p-4.mb-3(data-aos="fade-left")
            i.fas.fa-quote-left
            h3.mb-2 “como una disciplina que va más allá de la simple venta de productos o servicios. Según Kotler, el marketing es un proceso integral que implica la identificación y satisfacción de las necesidades y deseos de los consumidores, creando valor para ellos y estableciendo relaciones duraderas. Este enfoque destaca la importancia de la creatividad, el liderazgo y la sostenibilidad en las estrategias de marketing, adaptándose a un entorno empresarial en constante evolución”. 
            span -  Kotler
          p(data-aos="fade-left") Un mercado objetivo bien definido es crucial para diseñar mensajes efectivos. Medina (2016), señala que se deben considerar dos aspectos claves:

      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-6
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Perfil demográfico. 
                p.mb-0 Edad, género, ubicación, nivel socioeconómico.

        .col-lg-6
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Perfil psicográfico. 
                p.mb-0 Intereses, actitudes, comportamientos.

      .bg-full-width.bg-fondo-7.mb-5
        .px-lg-5

          .row.justify-content-center

            .col-lg-7.order-2(data-aos="fade-left")
              .pt-5
                p.text-bold Sin embargo, de acuerdo con las diferentes teorías de la segmentación, existen varios tipos: 
                p.mb-1 Geográfica.
                p.mb-1 Demográfica.
                p.mb-1 Comportamental.
                p.mb-1 Psicográfica.
                p.mb-1 Por uso del producto.
                p.mb-1 Por comportamiento de compra.


            .col-lg-5.order-1(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/tema3/6.svg", data-aos="zoom-in").mb-4.mb-lg-0
      
      p.mb-5 Dichos tipos se pueden presentar en dos campos esenciales en mercados industriales y de consumidores, donde se pueden aplicar los siguientes pasos, para segmentar correctamente: 

      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/7.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
        .col-lg-8

          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="Segmentación de mercados industriales")
              p - Selección del universo: delimitar el área de cobertura que tendrá el producto o servicio desde el punto de vista geográfico.
              p - Caracterización del mercado: ubicación geográfica, tamaño de la empresa y actividad económica.
            div(numero="2" titulo="Segmentación de mercados de consumidores")
              p - Mercado potencial: se aplican variables demográficas en las que se asignan rangos amplios, debido a que se tendrán en cuenta todas personas o clientes que compran productos similares o de la competencia.
              p - Mercado real: la identificación de este segmento se hace aplicando variables demográficas, que permiten que sea más objetiva debido a que las variables a utilizar son medibles y pueden generar datos estadísticos útiles para el diseño de estrategias.
              p - Caracterización psicográfica: permite identificar grupos de consumidores con base en un perfil psicológico común.
              p - Comportamiento de compra: análisis relacionado con la interacción del mercado con el producto en la realización de la compra.
            
      .bg-full-width.bg-fondo-1.mb-5
        .px-4.px-md-5.pb-md-3
          p Las herramientas para esa segmentación, son:

          .row.justify-content-center.align-items-stretch
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src='@/assets/curso/tema3/8.png', alt='')
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Análisis de datos
                  p.mb-0 Uso de herramientas como Google Analytics, para conocer a los usuarios.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/9.png", alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Encuestas y <em>focus groups</em>
                  p.mb-0 Comprender necesidades y motivaciones.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/10.png", alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Segmentación conductual
                  p.mb-0 Identificar comportamientos de compra o consumo de medios.

      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Selección de medios y canales

      p Según Coll Rubio & Micó Sanz (2018), la elección de medios depende de factores como el público objetivo, el presupuesto y los objetivos de la campaña.
      p.mb-5.text-bold Encontramos:

      TabsC.color-primario.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Medios tradicionales" :icon="require('@/assets/bullets/1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Medios tradicionales
              p <b>Televisión.</b> Ideal para campañas masivas con alta inversión.
              p <b>Radio.</b> Efectiva para audiencias locales y segmentadas.
              p <b>Prensa y revistas.</b> Adecuada para mensajes detallados y públicos específicos.
          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/11.png', alt='')
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Medios digitales" :icon="require('@/assets/bullets/2.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Medios digitales
              p <b>Redes sociales.</b> Alcance masivo y segmentación precisa.
              p <b>Publicidad en buscadores (SEM).</b> Llegar a usuarios interesados mediante palabras claves.
              p <b>Email marketing.</b> Comunicación directa y personalizada.

          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/12.png', alt='')
      
      .titulo-figura.mb-4
        h5 Tabla 2. 
        span Ventajas y desventajas
      .tabla-a.mb-5
        table
          thead
            tr
              th Tipo de medio
              th Ventajas
              th Desventajas

          tbody
            tr
              td Tradicional
              td Amplio alcance, reconocimiento de marca.
              td Costos elevados, difícil segmentación. 
            tr
              td Digital
              td Segmentación precisa, medición en tiempo real.
              td Saturación de anuncios, requiere alta experiencia.
              
      p.mb-5 Continuemos con la planificación en:

      .row.align-items-center.mb-5
        .col-lg-4.order-2
          figure
            img(src="@/assets/curso/tema3/13.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
        .col-lg-8.order-1

          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="Redes sociales")
              p.mb-1 Las redes como Facebook, Instagram y TikTok, permiten crear campañas segmentadas, basadas en intereses, ubicaciones y comportamientos.
              p.mb-1.text-bold Estrategias:
              p.mb-1 - Crear contenido relevante y atractivo.
              p.mb-1 - Utilizar formatos visuales como videos y reels.
              p.mb-1 - Medir resultados con herramientas como Meta Ads Manager.

            div(numero="2" titulo="SEO (<em>Search Engine Optimization</em>)")
              p.mb-1 Optimizar sitios web para aparecer en los primeros resultados de búsqueda en Google.
              p.mb-1.text-bold Estrategias:
              p.mb-1 - Uso de palabras clave relevantes.
              p.mb-1 - Contenido de calidad.
              p.mb-1 - Mejora de la velocidad del sitio.
            div(numero="3" titulo="Campañas Omnicanal")
              p.mb-1 Integrar medios tradicionales y digitales para ofrecer una experiencia consistente al consumidor.

      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Medición y evaluación 
      
      .row.mb-5
        .col-lg-8
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Según Roig (2022), los KPIs (Indicadores Claves de Desempeño) son herramientas esenciales para medir y optimizar el desempeño de las campañas publicitarias. Permiten a los equipos evaluar si las estrategias son efectivas y ajustar en tiempo real para maximizar los resultados. Una implementación adecuada de KPIs asegura que las campañas no solo cumplan con sus objetivos, sino que también brinden un retorno tangible sobre la inversión.
          p(data-aos="fade-left") Algunos tipos de KPIs son: 

        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
      
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white(data-aos="zoom-in")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/16.png")
              .col-lg-7
                h5 KPIs de alcance

                p Miden cuántas personas han sido expuestas a los mensajes de la campaña.
                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | <b>Impresiones.</b> Cantidad de veces que un anuncio se muestra a los usuarios.
                  li.mb-2
                    i.fas.fa-check-circle
                    | <b>Alcance.</b> Cantidad única de personas que han visto el anuncio.
                p <b>Ejemplo.</b> En una campaña digital, se registra un alcance de 500,000 personas con 1 millón de impresiones, lo que indica que algunos usuarios han visto el anuncio más de una vez.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/17.png")
              .col-lg-7
                h5 KPIs de interacción
                p Evalúan cómo las personas responden a los anuncios y contenido de la campaña.
                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | <b>Tasa de clics (CTR - Click Through Rate).</b> Porcentaje de personas que hicieron clic en el anuncio, en relación con el número de impresiones.<br> CTR = (Clics / Impresiones) × 100
                  li.mb-2
                    i.fas.fa-check-circle
                    | <b>Engagement.</b> Interacciones totales en redes sociales (likes, comentarios, compartidos) divididas por el número de usuarios alcanzados.
                p <b>Ejemplo.</b> Un anuncio en Facebook tiene 2,000 clics y 100,000 impresiones, lo que da un CTR del 2 %.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/18.png")
              .col-lg-7
                h5 KPIs de conversión
                p Miden cuántas personas realizaron una acción deseada, después de interactuar con la campaña.
                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | <b>Tasa de conversión.</b> Porcentaje de usuarios que completaron una acción específica, como realizar una compra o registrarse en un formulario. <br>Tasa de Conversión = (Conversiones/Clics) × 100
                  li.mb-2
                    i.fas.fa-check-circle
                    | <b>Costo por conversión.</b> Cuánto cuesta cada acción deseada en términos de inversión publicitaria.
                p <b>Ejemplo.</b> En una campaña de email marketing, 500 personas se registraron en un evento tras recibir un correo, de un total de 10,000 clics. La tasa de conversión es del 5 %.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/19.png")
              .col-lg-7
                h5 KPIs de Retorno de Inversión (ROI)
                p Evalúan el beneficio financiero generado, en comparación con la inversión realizada.
                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | <b>ROI (Return on Investment).</b> Mide la ganancia obtenida respecto al dinero invertido. <br> ROI = ((Ganancia Neta−Inversión) / (inversión) × 100)

                p <b>Ejemplo.</b> Si una campaña genera $10,000 en ventas con una inversión de $2,000, el ROI es: <br> ROI = ((10,000−2,000) / 2,000) × (100) = 400 %

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/20.png")
              .col-lg-7
                h5 KPIs de lealtad y retención
                p Miden el compromiso del cliente con la marca después de la campaña.
                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | <b>Tasa de repetición.</b> Porcentaje de clientes que vuelven a interactuar con la marca.
                  li.mb-2
                    i.fas.fa-check-circle
                    | <b>Net Promoter Score (NPS).</b> Evalúa cuántos clientes recomendarían la marca a otros.

                p <b>Ejemplo.</b> Una encuesta post-campaña revela que el 80 % de los clientes están dispuestos a recomendar el producto.
           
      h2.mb-5(data-aos="fade-up") Ajustes y optimización en campañas
  
      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-8
          p Las campañas publicitarias se enfrentan a factores inesperados que pueden afectar el desempeño, como cambios en el comportamiento del público, errores en la segmentación o un bajo rendimiento de los mensajes. La optimización de dichas campañas permite:
          .py-4.px-5.bg-color-3(data-aos="fade-right").mb-3
            ul.lista-ul
              li.mb-4
                i.fas.fa-check-circle
                | Mejorar la rentabilidad de la inversión publicitaria (ROI).
              li.mb-2
                i.fas.fa-check-circle
                | Maximizar el impacto en el público objetivo.
              li.mb-2
                i.fas.fa-check-circle
                | Adaptarse rápidamente a nuevas tendencias o datos emergentes.

          p Roig (2022) señala que el análisis continuo de los resultados evita que una campaña pierda efectividad, lo que es especialmente relevante en contextos digitales, donde las variables cambian rápidamente. Es así, como destaca las siguientes acciones para optimizar las campañas: 

        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/21.png", alt="", data-aos="zoom-in")
      
      .bg-full-width.bg-fondo-1.mb-5
        .px-4.px-md-5.pb-md-3

          .row.justify-content-center.align-items-stretch
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src='@/assets/curso/tema3/22.png', alt='')
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Ajustar la segmentación
                  p.mb-0 Refinar el público objetivo, según los resultados.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/23.png", alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Cambiar los mensajes
                  p.mb-0 Probar diferentes mensajes para identificar cuál genera más interacción.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/24.png", alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Optimizar el presupuesto
                  p.mb-0 Redistribuir la inversión hacia canales más efectivos.

      
      .row.align-items-center.mb-5
        .col-lg-4.order-2
          figure
            img(src="@/assets/curso/tema3/25.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
        .col-lg-8.order-1
          h2.mb-3(data-aos="fade-up") Fases para ajustar y optimizar una campaña
          p.mb-5 La optimización de campañas implica un ciclo continuo de: 
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="Análisis de resultados")
              p.mb-1 - <b>Monitoreo de KPIs.</b> Indicadores como CTR, tasa de conversión, ROI, y alcance ayudan a identificar áreas de mejora.
              p.mb-1 - <b>Segmentación del rendimiento.</b> Evaluar cómo responden diferentes segmentos del público objetivo a las estrategias y anuncios.
              p.mb-1 - <b>Comparativa entre canales.</b> Identificar cuáles medios o plataformas están generando mejores resultados.


            div(numero="2" titulo="Identificación de problemas")
              p.mb-1 - <b>Baja interacción.</b> Si el CTR es bajo, el mensaje o diseño podría no estar captando la atención del público.
              p.mb-1 - <b>Conversiones insuficientes.</b> Una tasa de conversión baja podría indicar problemas en la segmentación o en la propuesta de valor.
              p.mb-1 - <b>Presupuesto mal distribuido.</b> Canales con bajo rendimiento pueden estar recibiendo una inversión excesiva.

            div(numero="3" titulo="Implementación de ajustes")
              p.mb-1 <b>Cambiar elementos creativos.</b>: Modificar textos, imágenes o videos que no están generando el impacto deseado.
              p.mb-1 <b>Refinar la segmentación.</b> Ajustar el público objetivo basado en datos demográficos o comportamentales.
              p.mb-1 <b>Reasignar presupuesto.</b> Incrementar la inversión en los canales más efectivos y reducirla en los menos productivos.

              p Según Coll Rubio & Micó Sanz (2018), la elección de medios depende de factores como el público objetivo, el presupuesto y los objetivos de la campaña.
      
      h2.mb-3(data-aos="fade-up") Técnicas de optimización
      p.mb-5.text-bold Según Coll Rubio & Micó Sanz (2018), existen varias estrategias para optimizar el desempeño de una campaña:

      TabsC.color-primario.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Medios tradicionales" :icon="require('@/assets/bullets/3.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Pruebas A/B
              p Consisten en comparar dos versiones de un anuncio (A y B) para identificar cuál tiene mejor desempeño. Por ejemplo, probar dos titulares diferentes en un anuncio de Facebook y medir cuál genera más clics.
          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/26.png', alt='')
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Medios digitales" :icon="require('@/assets/bullets/4.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 <em>Retargeting</em>
              p Dirigido a usuarios que ya interactuaron con la marca, el <em>retargeting</em> aumenta la probabilidad de conversión, al mostrar anuncios personalizados.

          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/27.png', alt='')
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Medios digitales" :icon="require('@/assets/bullets/5.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Optimización de presupuestos
              p Redistribuir la inversión hacia los canales y formatos que estén generando mejores resultados. Herramientas como Google Ads, permiten automatizar este proceso.

          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/28.png', alt='')
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Medios digitales" :icon="require('@/assets/bullets/6.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Adaptación de mensajes
              p Cambiar el tono, estilo o contenido de los anuncios, para alinearse mejor con las necesidades del público. Esto es útil cuando los datos muestran que el mensaje no está resonando.

          
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/29.png', alt='')
      
      h2.mb-3(data-aos="fade-up") Herramientas para la optimización
      p.mb-5 En la era digital, existen numerosas plataformas y herramientas para facilitar el análisis y ajuste de campañas, como son:
      .row.align-items-center.mb-5
        .col-lg-4.order-2
          figure
            img(src="@/assets/curso/tema3/30.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
        .col-lg-8.order-1
      
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="Google Analytics")
              p.mb-1 Permite rastrear el comportamiento de los usuarios en un sitio web, evaluando el impacto de las campañas en tráfico y conversiones.
            div(numero="2" titulo="Meta Ads Manager")
              p.mb-1 Permite administrar campañas en Facebook e Instagram, proporciona métricas en tiempo real y permite realizar ajustes de segmentación y presupuesto.
            div(numero="3" titulo="Google Ads")
              p.mb-1 Automatiza la optimización de anuncios mediante inteligencia artificial, ajustando pujas y mostrando los anuncios más relevantes.
            div(numero="4" titulo="Herramientas de heatmaps")
              p.mb-1 Plataformas como Hotjar permiten analizar el comportamiento de los usuarios en una página web, identificando áreas de interés y puntos de abandono.

             
            
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
