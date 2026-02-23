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
  
  
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3             
        .carousel-bg
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-9.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-md-6 col-xl-6")
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel_02.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p Capacidad de transmitir ideas.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel_03.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p Capacidad de atraer la atención del interlocutor.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel_04.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p Capacidad de atención.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel_05.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p Habilidad para captar las necesidades del cliente.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel_06.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p Alto sentido de compromiso.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel_07.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  p Capacidad de organización.
            .col-lg-3.order-lg-1.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema1/carrusel_01.png', style="max-width: 250px", alt='Imagen de apoyo', data-aos="zoom-in").m-auto
        

    .row.mb-5
      p.mb-0 Además de estas cualidades, la paciencia es un factor fundamental en esta profesión. El asesor telefónico se enfrenta a todo tipo de situaciones, algunas tan inusuales que resultan “difíciles de creer”. A lo largo de su experiencia laboral, vivirá momentos positivos y negativos; sin embargo, si cuenta con las habilidades adecuadas y una disposición genuina para ofrecer un buen servicio, su desempeño será exitoso.Todas las personas pueden ser capacitadas para desempeñar tareas que exijan un perfil comercial y de servicio, siempre que tengan las cualidades necesarias o estén dispuestas a desarrollarlas con esfuerzo y dedicación. Aunque algunas de estas habilidades pueden estar presentes de manera natural, en muchos casos deben ser cultivadas.



    .bg-full-width
      .px-4.px-md-5.pb-md-3

      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto El cliente es lo primero

    .row.mb-2
          p.mb-0 Es fundamental partir de la premisa de que el cliente es la persona más importante de un negocio, empresa u organización. Toda persona que aspire a ingresar a este tipo de entorno laboral debe tener claro que el cliente constituye el centro de la actividad empresarial, y que, en muchos casos, serán los asesores telefónicos el primer contacto que un posible consumidor tendrá con la organización.


    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 En este sentido, resulta imprescindible recordar que el elemento vital para una comunicación efectiva es la práctica de los modales y las buenas costumbres, ya que estas permiten evidenciar la importancia que tiene el interlocutor.
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") Por ello, el asesor o asesora telefónica debe poner de manifiesto sus principios y valores, los cuales se reflejan directamente en la calidad del servicio ofrecido. Una comunicación telefónica adecuada contribuye de manera significativa al desarrollo de un óptimo servicio al cliente, fortaleciendo la percepción positiva de la empresa.


    .row.text-center.justify-content-center.align-items-center(style="margin-top:100px")
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            p <b>Figura 1.</b> Pérdida de clientes por mala atención.
          figure
            img(src="@/assets/curso/tema1/figura1.svg", style="width: 100%; height: auto;", data-aos="zoom-in")
    
    .row.mt-4
          p.mb-0 La figura permite identificar los principales motivos de abandono de clientes. En ella se evidencia que, dentro de las razones por las cuales una empresa pierde clientes o clientes potenciales, el servicio al cliente ocupa el primer lugar. Este dato confirma la relevancia de la atención brindada en la permanencia y fidelización del consumidor.

    
    .row.mt-5.align-items-center.justify-content-center   
      .col-lg-5.mb-4.mb-lg-0.bg-color-3.rounded(data-aos="fade-right")
        .bg-mint.p-4.h-100.d-flex.align-items-center
          p.mb-0 Generalmente, los clientes dejan de solicitar productos o servicios de una organización debido a malas experiencias con empleados que no han sabido manejar adecuadamente una situación específica, o que no han logrado satisfacer las necesidades inmediatas del cliente. Estas experiencias negativas impactan de forma directa en la imagen corporativa y en la decisión de continuidad del cliente.
      .col-lg-3.mb-4.mb-lg-0.align-items-center(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema1/5.svg", alt="" style="max-width:240px")
      .col-lg-4(data-aos="fade-left")
        .row.mb-0
          .col-4.col-md-3.col-lg-4.text-start
            figure
              img(src="@/assets/curso/tema1/6.svg", alt="Icono comunicación" style="max-width:60px")
        p.mb-0 Teniendo en cuenta lo anterior, se hace indispensable brindar siempre un servicio adecuado, caracterizado por el respeto, la calidez y la amabilidad en el trato. Además de los principios y valores personales, la ética profesional desempeña un papel fundamental, especialmente en el manejo de información relevante y de carácter confidencial para la empresa u organización.



    .bg-full-width.mt-4
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Importancia de la capacitación del recurso humano
    .row.mb-2
          p.mb-0 Las empresas, negocios u organizaciones suelen implementar planes constantes de capacitación y cualificación del recurso humano con el objetivo de mejorar de manera continua el servicio al cliente. Estas acciones formativas permiten fortalecer competencias comunicativas, actitudinales y éticas en los colaboradores.


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/7.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En este contexto, la capacitación permanente se convierte en un factor diferenciador, ya que contribuye a elevar la calidad del servicio y a consolidar relaciones duraderas con los clientes. Es precisamente a través de estas prácticas formativas que las organizaciones logran destacarse y responder de manera efectiva a las expectativas del mercado.

    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Componentes de la comunicación telefónica 

    .row
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in", style="max-width: 250px").mx-auto

      .col-lg-9.order-lg-1(data-aos="fade-left")
        .bg-color-15-1.p-4(data-aos="fade-left")
          .row.align-items-center.no-gutters.bg-color-4
            .col-lg-4.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/8.png", style="max-width: 100%")
            .col-lg-6
              p.mb-0
                | Los componentes de la comunicación telefónica constituyen herramientas fundamentales que utiliza el asesor o la asesora con el propósito de lograr que la interacción con el cliente sea agradable, eficaz y asertiva.

        p
          | Estos elementos permiten cumplir los objetivos planteados en cada contacto, ya sea la promoción de un producto o servicio o la solución de un problema manifestado por el cliente durante una llamada entrante. Una correcta aplicación de estos componentes favorece la construcción de una experiencia positiva, fortalece la imagen de la organización y contribuye a la satisfacción del cliente. Los componentes principales de la comunicación telefónica son:
          
    .row.mt-5
        .col-lg-3.mb-3
          .card
            img(src="@/assets/curso/tema1/10.png", alt="La sonrisa", class="card-img-top")
            .card-body
              h5.card-title.text-center La sonrisa
              p.card-text.text-center
                | «Se oye» por teléfono, transmite una comunicación positiva, genera agrado y predispone favorablemente al interlocutor.

        .col-lg-3.mb-3
          .card
            img(src="@/assets/curso/tema1/11.png", alt="La voz", class="card-img-top")
            .card-body
              h5.card-title.text-center La voz
              p.card-text.text-center
                | Es un elemento decisivo; permite crear confianza, influir, persuadir y tranquilizar al cliente.

        .col-lg-3.mb-3
          .card
            img(src="@/assets/curso/tema1/12.png", alt="El lenguaje", class="card-img-top")
            .card-body
              h5.card-title.text-center El lenguaje
              p.card-text.text-center
                | Incluye el uso de expresiones positivas y negativas. Si predominan las negativas, puede impactar de forma desfavorable en la imagen de la empresa.

        .col-lg-3.mb-3
          .card
            img(src="@/assets/curso/tema1/13.png", alt="La escucha activa", class="card-img-top")
            .card-body
              h5.card-title.text-center La escucha activa
              p.card-text.text-center
                | Implica escuchar, analizar e interpretar al cliente. Se basa en una escucha global que permite comprender plenamente la situación expuesta.

        .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3
            .titulo-con-imagen.mb-5(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
                h3.titulo-con-imagen__texto La sonrisa telefónica
      


    .row.align-items-center
      // Imagen
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(
            src="@/assets/curso/tema1/14.png",
            data-aos="zoom-in",
            style="max-width: 100%"
          ).mx-auto

      // Contenido
      .col-lg-7(data-aos="fade-left")
        p
          | La sonrisa telefónica es un recurso comunicativo de gran relevancia dentro de la atención al cliente, ya que influye directamente en el tono y la percepción de la llamada. Aunque no es visible, se percibe claramente a través de la voz, y su ausencia también suele notarse. Entre sus principales aportes se destacan los siguientes:

        .bg-color-5.p-4.mt-3
          ul.lista-ul.mb-0
            li
              i.fas.fa-check-circle.me-2(style="color:#AD9721")
              | Es una forma consciente de relajarse durante la comunicación.
            li
              i.fas.fa-check-circle.me-2(style="color:#AD9721")
              | Comunica un tono amistoso y cordial.
            li
              i.fas.fa-check-circle.me-2(style="color:#AD9721")
              | Se oye por teléfono y es síntoma de predisposición a la ayuda, demostrando interés genuino por el cliente.
            li
              i.fas.fa-check-circle.me-2(style="color:#AD9721")
              | Crea un clima empático entre los interlocutores.
            li
              i.fas.fa-check-circle.me-2(style="color:#AD9721")
              | Refleja una actitud positiva y suele generar una respuesta similar en el cliente.
            li
              i.fas.fa-check-circle.me-2(style="color:#AD9721")
              | En la presentación y en la despedida, desempeña un papel fundamental en la creación de un buen clima y en la generación de una impresión favorable.

        p.mt-3.mb-0
          | La correcta integración de la sonrisa, la voz, el lenguaje y la escucha activa permite transformar una llamada telefónica en una experiencia positiva y efectiva para el cliente y la organización.


      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
            h3.titulo-con-imagen__texto La voz
      
      p
          | La voz es el instrumento básico de la comunicación no verbal a través del cual se transmiten y se estructuran los mensajes en una interacción telefónica. Su correcta utilización permite generar confianza, influir, persuadir y tranquilizar al interlocutor, convirtiéndose en un elemento determinante para la eficacia del servicio al cliente. Los componentes de la voz son: 


      .bg-full-width
        .px-4.px-md-5.pb-md-3
        
      .carousel-bg
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-12.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-md-4 col-xl-4")
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema1/carrusel2_01.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Volumen
                p.card-text.text-center
                  | Intensidad con la que se emite la voz durante la llamada.

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema1/carrusel2_02.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Entonación
                p.card-text.text-center
                  | Variación de la altura y tonalidad de la voz según la intención comunicativa.

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema1/carrusel2_03.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Articulación
                p.card-text.text-center
                  | Posición y movimiento de los órganos de la voz para una correcta pronunciación.

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema1/carrusel2_04.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Elocución
                p.card-text.text-center
                  | Velocidad a la que se transmite el mensaje.

      .bg-full-width.mt-4
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")                     
            h3.titulo-purpura La entonación y su adecuación a la llamada
      .row.mb-2
            p.mb-0 La entonación corresponde a la forma en que se varía la altura de la tonalidad de la voz y debe adaptarse a las circunstancias de la conversación telefónica. Es importante evitar la monotonía; sin embargo, los cambios de tono no deben ser bruscos, ya que pueden generar confusión o incomodidad en el cliente. A continuación, se abordan los tonos apropiados en la comunicación telefónica y su uso según el objetivo de cada momento de la interacción.
      
      

      .bg-full-width.bg-fondo-slider.mb-5
          .p-4.p-md-5
            SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/slide1_01.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h4 Tono seguro
                  p Directo y serio. Se utiliza para sondear necesidades o potencial del cliente y obtener información. Su objetivo es recopilar los datos necesarios para proponer la solución, idea o servicio adecuado.

              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/slide1_02.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h4 Tono cálido
                  p Amabilidad, empatía y sonrisa perceptible. Se emplea en la presentación y la despedida. Su objetivo es generar un clima adecuado al inicio de la conversación y dejar una impresión positiva al finalizar.


              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/slide1_03.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h4 Tono sugestivo
                  p Descriptivo y persuasivo. Se usa durante la argumentación, al exponer características y ventajas del servicio o la empresa. Su objetivo es acercar al interlocutor al punto de vista del asesor sin generar compromiso inmediato.

              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/slide1_04.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h4 Tono tranquilo
                  p Pausado y calculado. Se emplea para manejar objeciones y reclamaciones. Su objetivo es transmitir control y calma ante clientes alterados o con tono elevado.
          
      .bg-full-width.mt-4
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")                     
            h3.titulo-purpura La articulación
      .row.mb-2
            p.mb-0 La articulación se refiere a la posición y al movimiento de los órganos de la voz para la correcta pronunciación de vocales y consonantes. Una articulación adecuada facilita la comprensión del mensaje y evita malentendidos.
      
    .row.align-items-center
      // Imagen
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(
            src="@/assets/curso/tema1/15.png",
            data-aos="zoom-in",
            style="max-width: 100%"
          ).mx-auto

      // Contenido
      .col-lg-7(data-aos="fade-left")
        p
          | La sonrisa telefónica es un recurso comunicativo de gran relevancia dentro de la atención al cliente, ya que influye directamente en el tono y la percepción de la llamada. Aunque no es visible, se percibe claramente a través de la voz, y su ausencia también suele notarse. Entre sus principales aportes se destacan los siguientes:

        .bg-color-7.p-4.mt-3
          p
            | Recomendaciones clave:
            ul.lista-ul.mb-0
              li
                i.fas.fa-check-circle.me-2(style="color:#AD9721")
                | Hablar abriendo bien la boca y marcando correctamente las palabras.
              li
                i.fas.fa-check-circle.me-2(style="color:#AD9721")
                | Evitar “comerse las palabras”, separándolas claramente al pronunciarlas.
              li
                i.fas.fa-check-circle.me-2(style="color:#AD9721")
                | Mantener una distancia adecuada entre el auricular y la boca.
            
      .bg-full-width.mt-4
                  .px-4.px-md-5.pb-md-3
                  .titulo-con-imagen.mb-5(data-aos="fade-right")                     
                      h3.titulo-purpura El volumen de la voz   

    .row.align-items-center
      // Contenido
      .col-lg-7(data-aos="fade-left")
        p
          | El volumen representa la intensidad con la que se emite la voz y, en la comunicación telefónica, constituye la única forma de llegar directamente al oído del interlocutor. Por ello, debe mantenerse en un nivel normal y equilibrado, evitando los extremos.
        .bg-color-7.p-4.mt-3
          p
            | Recomendaciones clave:
            ul.lista-ul.mb-0
              li
                i.fas.fa-check-circle.me-2(style="color:#AD9721")
                | Nunca gritar, incluso si la comunicación es deficiente.
              li
                i.fas.fa-check-circle.me-2(style="color:#AD9721")
                | No susurrar.
              li
                i.fas.fa-check-circle.me-2(style="color:#AD9721")
                | Adaptar el volumen a las diferentes circunstancias sin llegar a los extremos.

      // Imagen
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(
            src="@/assets/curso/tema1/16.png",
            data-aos="zoom-in",
            style="max-width: 100%"
          ).mx-auto
          

      .bg-full-width.mt-4
                .px-4.px-md-5.pb-md-3
                .titulo-con-imagen.mb-5(data-aos="fade-right")                     
                    h3.titulo-purpura La elocución    

    .row.align-items-center
      // Imagen
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(
            src="@/assets/curso/tema1/17.png",
            data-aos="zoom-in",
            style="max-width: 100%"
          ).mx-auto


      // Contenido
      .col-lg-7(data-aos="fade-left")
        p
          | La elocución es la velocidad con la que se transmite el mensaje durante la llamada. Una velocidad adecuada favorece la comprensión y transmite seguridad.


        .bg-color-7.p-4.mt-3
          p
            | Recomendaciones clave:
            ul.lista-ul.mb-0
              li
                i.fas.fa-check-circle.me-2(style="color:#AD9721")
                | Utilizar una elocución más lenta y pausada que en una conversación cara a cara.
              li
                i.fas.fa-check-circle.me-2(style="color:#AD9721")
                | Adaptarse a la velocidad del interlocutor: hablar más despacio con personas lentas y un poco más rápido con interlocutores ágiles.

      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
            h3.titulo-con-imagen__texto El lenguaje


    .row
      p El lenguaje es la capacidad del ser humano para comunicarse mediante signos lingüísticos; en este contexto, se hace referencia específicamente al lenguaje verbal. Aunque la comunicación telefónica no permite el contacto visual, el lenguaje corporal puede influir de manera indirecta en la llamada, ya que se refleja a través del tono, la actitud y la forma de expresarse.

      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in", style="max-width: 250px").mx-auto

      .col-lg-9.order-lg-1(data-aos="fade-left")
        .bg-color-15-1.p-4(data-aos="fade-left")
          .row.align-items-center.no-gutters.bg-color-8
            .col-lg-4.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/19.png", style="max-width: 100%")
            .col-lg-6
              p.mb-0
                | El lenguaje verbal es un elemento básico para transmitir la imagen que la empresa desea proyectar hacia sus clientes. Por esta razón, debe ser positivo, claro y adecuado al contexto, ya que de su uso depende, en gran medida, la percepción que el cliente construye sobre la organización.

        p
          | A continuación, se presenta lo que debe contener y lo que debe evitar el lenguaje utilizado durante la comunicación telefónica.
          
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        TabsC.color-acento-contenido.mt-5
          .py-3.py-md-4(titulo="Debe contener")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/20.png', alt='')                 

              .col-md-6.mb-4.mb-md-0
                h4 Debe contener
                ul.lista-ul.mb-0
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Palabras positivas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Expresiones confirmativas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Expresiones de interés.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Expresiones descriptivas.

          .py-3.py-md-4(titulo="Debe evitar")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/21.png', alt='Texto que describa la imagen')

              .col-md-6
                h4 Debe evitar
                ul.lista-ul.mb-0
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Palabras negativas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Palabras agresivas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Muletillas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Palabras ténicas innecesarias.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Fórmulas dubitativas e imprecisas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Diminutivos o superlativos inútiles.

    .bg-full-width.mt-4
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")                     
          h3.titulo-purpura Requisitos del lenguaje verbal efectivo

    .row
        p
          | Para que el lenguaje verbal sea realmente eficaz en la comunicación telefónica, debe cumplir con los siguientes principios:


    
    .row
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema1/22.svg', alt='Texto que describa la imagen')

          h3.text-center 1. Claridad
          p.text-center Permite que el mensaje sea comprendido sin ambigüedades.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/23.svg', alt='Texto que describa la imagen')

          h3.text-center 2. Precisión
          p.text-center Evita información innecesaria o confusa.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/24.svg', alt='Texto que describa la imagen')

          h3.text-center 3. Brevedad
          p.text-center  Facilita una comunicación ágil y  directa.

      .col-sm-6.col-lg-3.d-flex
        .tarjeta.tarjeta--blanca.p-4.bordes.rounded
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/25.svg', alt='Texto que describa la imagen')

          h3.text-center 4. Corrección
          p.text-center Garantiza un uso adecuado del  idioma y una imagen  profesional.

      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
            h3.titulo-con-imagen__texto La escucha activa

    .row
        p
          | La escucha activa es la habilidad de escuchar no solo las palabras, sino también las ideas, intenciones y pensamientos que subyacen en el discurso del interlocutor. Además, implica demostrar de manera explícita que el mensaje ha sido comprendido, lo cual permite crear un vínculo con el cliente y ofrecer un servicio de calidad. A partir de este concepto, la escucha activa se compone de elementos decisivos que facilitan el desempeño eficaz del asesor o asesora telefónica. A continuación, se describen los elementos de la escucha activa y la función que cumple cada uno dentro del proceso comunicativo.


    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3             
        .carousel-bg
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-9.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-md-6 col-xl-6")
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel3_01.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center Escuchar
                  p.card-text.text-center
                  | Prestar atención plena al mensaje del cliente.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel3_02.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center Analizar
                  p.card-text.text-center
                  | Procesar la información recibida.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel3_03.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center Interpretar
                  p.card-text.text-center
                  | Comprender el significado y la intención del mensaje.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel3_04.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center Actuar
                  p.card-text.text-center
                  | Responder de manera adecuada y oportuna.
            .col-lg-3.order-lg-1.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema1/carrusel_01.png', style="max-width: 250px", alt='Imagen de apoyo', data-aos="zoom-in").m-auto

    .row
        p
          | Los comportamientos del mal oyente y del buen oyente son:

        .bg--img_03
          .row.justify-content-center
            .col-lg-8
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                .row(titulo="El que escucha mal tiende a")
                  .col-12
                    p.mb-0 
                    h4 Debe evitar
                    
                      ul.lista-ul.mb-0
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Discutir con facilidad.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Distraerse con facilidad.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Desentenderse de temas aburridos.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Tomar demasiadas notas.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Fingir atención.                        
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Evitar temas difíciles.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Reaccionar ante palabras con carga emotiva..
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Desentenderse por diferencias en la forma de expresión.

                .row(titulo="ISO 9001(2015). Sistemas de Gestión de la Calidad. Requisitos")
                  .col-12
                    p.mb-0 El que escucha bien tiende a            
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema1/26.png", alt="alt").img400.m-auto

    .row
        p
          | El uso adecuado del lenguaje verbal y la práctica constante de la escucha activa permiten al asesor telefónico comprender al cliente, responder con eficacia y fortalecer la imagen de la empresa.

        .bg-full-width.mt-4
          .px-4.px-md-5.pb-md-3
          .titulo-con-imagen.mb-5(data-aos="fade-right")                     
              h3.titulo-purpura El silencio

    .row
        p
          | Dentro de la comunicación telefónica, existe un aspecto de gran relevancia que forma parte de la escucha activa: el silencio. El asesor o asesora debe saber ser prudente y respetar los silencios o pausas naturales que se producen durante una conversación, ya que estos contribuyen a que la comunicación sea considerada óptima y profesional.


    .row.mt-2.align-items-center.justify-content-center   
      .col-lg-5.mb-4.mb-lg-0.bg-color-7.rounded(data-aos="fade-right")
        .bg-mint.p-4.h-100.d-flex.align-items-center
          p.mb-0 No obstante, es fundamental aclarar que nunca se debe dejar al cliente en silencio sin explicarle el motivo. Esta acción puede interpretarse fácilmente como un desplante, generando impaciencia y malestar en el interlocutor.
      .col-lg-3.mb-4.mb-lg-0.align-items-center(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema1/27.png", alt="" style="max-width:240px")
      .col-lg-4(data-aos="fade-left")
        .row.mb-0
          .col-4.col-md-3.col-lg-4.text-start
            figure
              img(src="@/assets/curso/tema1/6.svg", alt="Icono comunicación" style="max-width:60px")
        p.mb-0 Este tipo de silencio negativo se conoce como túnel oscuro, y hace referencia a ese momento incómodo en el que el asesor deja esperando al cliente mientras busca información o transfiere la llamada, sin brindar una explicación previa.

    .row.mt-4
        p
          | El túnel oscuro es una de las causas más comunes de insatisfacción en la atención telefónica, ya que rompe la conexión comunicativa y afecta negativamente la percepción del servicio. La importancia del silencio en la comunicación telefónica


    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3             
        .carousel-bg
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-9.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-md-6 col-xl-6")
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel3_01.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center Escuchar
                  p.card-text.text-center
                  | Prestar atención plena al mensaje del cliente.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel3_02.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center Analizar
                  p.card-text.text-center
                  | Procesar la información recibida.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel3_03.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center Interpretar
                  p.card-text.text-center
                  | Comprender el significado y la intención del mensaje.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/carrusel3_04.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center Actuar
                  p.card-text.text-center
                  | Responder de manera adecuada y oportuna.
            .col-lg-3.order-lg-1.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema1/28.png', style="max-width: 250px", alt='Imagen de apoyo', data-aos="zoom-in").m-auto


    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Etapas de una llamada telefónica


    .row
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Antes de iniciar una comunicación con un cliente, los asesores y asesoras telefónicos deben tener en cuenta que existen momentos clave a lo largo de la llamada. En estas etapas se recopila información relevante (en algunos casos suficiente y en otros limitada) que permite actuar de la mejor manera posible según el objetivo de la comunicación

    .row.mt-4
      p.mb-0 Estas etapas se encuentran delimitadas de forma secuencial, lo que facilita que, al finalizar la conversación, se pueda realizar un balance teniendo en cuenta el propósito de la llamada y el nivel de satisfacción del cliente




        .bg--img_03.mt-5
          .row.justify-content-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema1/26.png", alt="alt").img400.m-auto
                

            .col-lg-8
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                .row(titulo="El que escucha mal tiende a")

                
                  .col-12
                    p.mb-0 
                    h4 Debe evitar
                    
                      ul.lista-ul.mb-0
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Discutir con facilidad.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Distraerse con facilidad.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Desentenderse de temas aburridos.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Tomar demasiadas notas.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Fingir atención.                        
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Evitar temas difíciles.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Reaccionar ante palabras con carga emotiva..
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Desentenderse por diferencias en la forma de expresión.

                .row(titulo="ISO 9001(2015). Sistemas de Gestión de la Calidad. Requisitos")
                  .col-12
                    p.mb-0 El que escucha bien tiende a            


        .bg--img_03.mt-5
          .row.justify-content-center

                

            .col-lg-8
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                .row(titulo="El que escucha mal tiende a")

                
                  .col-12
                    p.mb-0 
                    h4 Debe evitar
                    
                      ul.lista-ul.mb-0
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Discutir con facilidad.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Distraerse con facilidad.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Desentenderse de temas aburridos.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Tomar demasiadas notas.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Fingir atención.                        
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Evitar temas difíciles.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Reaccionar ante palabras con carga emotiva..
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Desentenderse por diferencias en la forma de expresión.

                .row(titulo="ISO 9001(2015). Sistemas de Gestión de la Calidad. Requisitos")
                  .col-12
                    p.mb-0 El que escucha bien tiende a 

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema1/26.png", alt="alt").img400.m-auto


    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        TabsC.color-acento-contenido.mt-5
          .py-3.py-md-4(titulo="Pasividad")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/20.png', alt='')                 

              .col-md-6.mb-4.mb-md-0
                h4 Debe contener
                ul.lista-ul.mb-0
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Palabras positivas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Expresiones confirmativas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Expresiones de interés.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Expresiones descriptivas.

          .py-3.py-md-4(titulo="Agresividad")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/21.png', alt='Texto que describa la imagen')

              .col-md-6
                h4 Debe evitar
                ul.lista-ul.mb-0
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Palabras negativas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Palabras agresivas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Muletillas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Palabras ténicas innecesarias.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Fórmulas dubitativas e imprecisas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Diminutivos o superlativos inútiles.

          .py-3.py-md-4(titulo="Asertividad")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/21.png', alt='Texto que describa la imagen')

              .col-md-6
                h4 Debe evitar
                ul.lista-ul.mb-0
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Palabras negativas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Palabras agresivas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Muletillas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Palabras ténicas innecesarias.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Fórmulas dubitativas e imprecisas.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Diminutivos o superlativos inútiles.


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
