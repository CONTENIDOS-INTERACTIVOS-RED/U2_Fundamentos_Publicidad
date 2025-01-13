<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Agencias de publicidad: roles y funciones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Según Medina (2016), una agencia de publicidad es una organización especializada en diseñar, planificar y ejecutar estrategias de comunicación publicitaria, para sus clientes. Estas estrategias buscan captar la atención del público objetivo, transmitir mensajes persuasivos y, en última instancia, generar un impacto positivo en las ventas y el posicionamiento de marca.

    h2.mb-5(data-aos="fade-up") Características principales de una agencia de publicidad

    .row.mb-5

      .col-lg-8

        p(data-aos="fade-left").mb-4 Creatividad. Proponen ideas innovadoras para diferenciar a sus clientes en el mercado. 
        
        .bg-color-3.p-4(data-aos="fade-left").mb-4
          p.mb-0  De acuerdo con Gutiérrez Colmener (2014), la creatividad se define como la capacidad humana para generar ideas originales, útiles y valiosas, que permiten resolver problemas o desarrollar nuevas oportunidades, en diversos contextos. La creatividad no es un don exclusivo de ciertos individuos, sino una habilidad que puede ser fomentada y desarrollada mediante la práctica, la apertura a nuevas experiencias y la disposición para asumir riesgos.
        
        p(data-aos="fade-left").mb-4 Además, el autor identifica algunos factores claves que fomentan la creatividad, como son:

      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/2.png', data-aos='zoom-in')

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3

        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src='@/assets/curso/tema1/3.png', alt='')
              .custom-image-card__text.p-4
                h5.mb-2.text-center Curiosidad y exploración
                p.mb-0 La disposición para cuestionar y buscar nuevas perspectivas.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/4.png", alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Flexibilidad mental
                p.mb-0 La capacidad de considerar múltiples enfoques para un mismo problema.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/5.png", alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Persistencia
                p.mb-0 El esfuerzo constante para superar obstáculos y perfeccionar ideas.


    .bg-full-width.bg-color-1
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En el entorno empresarial, la creatividad se convierte en un recurso estratégico para adaptarse a los cambios del mercado, diseñar productos innovadores y establecer conexiones significativas con los clientes. Según Gutiérrez Colmener (2014), su desarrollo es esencial, tanto a nivel individual como organizacional.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
