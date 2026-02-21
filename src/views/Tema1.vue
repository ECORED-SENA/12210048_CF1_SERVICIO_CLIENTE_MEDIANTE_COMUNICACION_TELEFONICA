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

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este componente formativo se desarrollan los temas relacionados con la fundamentación y aplicación de las matemáticas financieras en el sector productivo; se analiza la clasificación de las tasas de interés, el valor del dinero en el tiempo, equivalencia de tasas, tablas de amortización y alternativas de inversión como lo son el Valor Presente Neto (VPN) y Tasa Interna de Retorno (TIR).
    
    .row.mt-4
      p.mb-0 En un mercado saturado de mensajes visuales y gráficos, el teléfono ofrece una vía directa para transmitir una buena imagen empresarial. Usado correctamente, puede traer importantes beneficios organizacionales como la consolidación de relaciones con clientes, gracias a su capacidad para ofrecer una comunicación rápida, continua y eficaz.
    
    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 El papel del asesor en la comunicación telefónica

        p.mb-5(data-aos="fade-left") El rol del asesor o asesora telefónica es esencial en la atención al cliente, ya que su única herramienta de trabajo es la voz. Esto implica que debe poseer, desarrollar o fortalecer ciertas cualidades que le permitan brindar una atención eficiente y profesional.


    .row
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Todas las personas pueden ser capacitadas para desempeñar tareas que exijan un perfil comercial y de servicio, siempre que tengan las cualidades necesarias o estén dispuestas a desarrollarlas con esfuerzo y dedicación. Aunque algunas de estas habilidades pueden estar presentes de manera natural, en muchos casos deben ser cultivadas.

    .row.mt-4
      p.mb-0 A continuación, se presentan las cualidades necesarias para desempeñarse adecuadamente como asesor o asesora telefónica:

      
    .row.mt-5.justify-content-center.g-3
      .col-auto
        .card-cualidad Ganas de aprender
      .col-auto
        .card-cualidad Interés por el trabajo
      .col-auto
        .card-cualidad Excelente trato con el cliente
      .col-auto
        .card-cualidad Gran sentido del respeto
      .col-auto
        .card-cualidad Empatía
      .col-auto
        .card-cualidad Paciencia

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
