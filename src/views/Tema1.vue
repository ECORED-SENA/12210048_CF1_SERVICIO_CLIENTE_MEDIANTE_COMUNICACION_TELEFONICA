<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Comunicación telefónica
 
    .row.mb-5
      p.mb-0 En la sociedad actual, el teléfono es una herramienta fundamental empleada en diversas actividades tanto personales como empresariales. La comunicación telefónica se ha convertido en un recurso cotidiano dentro de cualquier organización, siendo uno de los elementos clave en un buen esquema de atención al cliente.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img.text-center
        figure
          img(src="@/assets/curso/tema1/1.png", alt=""  style="width:100%; height:100%; object-fit:cover; display:block")
      .bloque-texto-g__texto.p-10
        p.mb-0 En este componente formativo se desarrollan los temas relacionados con la fundamentación y aplicación de las matemáticas financieras en el sector productivo; se analiza la clasificación de las tasas de interés, el valor del dinero en el tiempo, equivalencia de tasas, tablas de amortización y alternativas de inversión como lo son el Valor Presente Neto (VPN) y Tasa Interna de Retorno (TIR).

      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
