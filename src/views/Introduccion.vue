<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-3
      .col-12(data-aos="fade-left")
        p.mb-0 La comunicación telefónica ocupa un lugar central en las dinámicas actuales de atención al cliente, tanto en el ámbito personal como en el organizacional. A través del teléfono se construyen percepciones, se transmiten mensajes clave y se consolida la imagen de una empresa frente a sus clientes y usuarios. Por esta razón, su uso requiere preparación, actitud profesional y dominio de habilidades comunicativas específicas.
    .row
      .col-xl-5.mb-4.mb-xl-0(data-aos="fade-right")
        .row.h-100.bg-color-13.align-items-center
          .col-12
            .p-4.rounded.h-100
              p.mb-0 Aunque suele asumirse como una práctica cotidiana, la comunicación telefónica demanda un manejo consciente de la voz, el lenguaje y la escucha activa. El asesor o la asesora debe interpretar necesidades, responder con claridad y mantener un trato respetuoso, incluso en situaciones complejas. Cada llamada representa una oportunidad para fortalecer la confianza y generar experiencias positivas.                
      .col-xl-3.mb-4.mb-xl-0.text-center(data-aos="left")
        img(src="@/assets/curso/intro/2.png", alt="Asesora telefónica" style="width:350px").m-auto
      .col-xl-4(data-aos="fade-right")
        img.mb-3(src="@/assets/curso/intro/1.svg", alt="Icono comunicación" style="width:50px").d-none.d-xl-block
        p.mb-0 Formarse en comunicación telefónica permite desarrollar competencias orientadas al servicio, la empatía y la organización del diálogo. El adecuado manejo de las etapas de la llamada, los tipos de clientes y las técnicas básicas contribuye a una atención coherente con los objetivos institucionales y con las expectativas del cliente, favoreciendo relaciones sostenibles y profesionales.          
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
