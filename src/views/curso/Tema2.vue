<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Segmentación de mercados: criterios y métodos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

  
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
