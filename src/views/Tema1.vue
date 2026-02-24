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
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
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

                .row(titulo="El que escucha bien tiende a")
                  .col-12
                    p.mb-0                     
                      ul.lista-ul.mb-0
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Buscar oportunidades.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Preguntarse: ¿qué significa esto para mí?.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Evaluar el contenido y dejar pasar errores de expresión.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | No juzgar hasta comprender plenamente.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Escuchar lo esencial.                       
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Tomar pocas notas.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Esforzarse activamente en la escucha.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Luchar contra las distracciones y concentrarse.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Enfocar temas complejos como ejercicio intelectual.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Interpretar palabras con carga emotiva sin quedarse atrapado en ellas.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#AD9721")
                          | Anticiparse, resumir mentalmente y escuchar entre líneas según contexto, tono de voz, estilo de conversación y lengua.
                        


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
                  img(src='@/assets/curso/tema1/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center Subrayar palabras
                  p.card-text.text-center
                  | Destacar la importancia de ciertos mensajes clave.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/30.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center Aislar ideas
                  p.card-text.text-center
                  | Permite resaltar conceptos relevantes dentro del discurso.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/32.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center Percibir al interlocutor
                  p.card-text.text-center
                  | Intensidad con la que se emite la voz durante la llamada.
                .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                  img(src='@/assets/curso/tema1/33.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.card-title.text-center Favorecer objeciones
                  p.card-text.text-center
                  | Propicia la manifestación de dudas o inquietudes del cliente.
            .col-lg-3.order-lg-1.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema1/28.png', style="max-width: 250px", alt='Imagen de apoyo', data-aos="zoom-in").m-auto
    .row.mt-4
      p.mb-0 El silencio bien utilizado fortalece la comunicación telefónica; sin embargo, el silencio no explicado genera incomodidad y deteriora la experiencia del cliente.



    .row.mt-5
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Etapas de una llamada telefónica


    .row
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Antes de iniciar una comunicación con un cliente, los asesores y asesoras telefónicos deben tener en cuenta que existen momentos clave a lo largo de la llamada. En estas etapas se recopila información relevante (en algunos casos suficiente y en otros limitada) que permite actuar de la mejor manera posible según el objetivo de la comunicación.

    .row.mt-4
      p.mb-0 Estas etapas se encuentran delimitadas de forma secuencial, lo que facilita que, al finalizar la conversación, se pueda realizar un balance teniendo en cuenta el propósito de la llamada y el nivel de satisfacción del cliente.




        .bg--img_03.mt-5
          .row.justify-content-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema1/29.png", alt="alt").img400.m-auto
                

            .col-lg-8
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                .row(titulo="Antes de descolgar")
                  p.mb-0 Antes de atender una llamada, el asesor o asesora debe realizar una preparación previa, asumiendo una actitud positiva y orientada al servicio, con el fin de garantizar una atención adecuada desde el primer contacto.                            
                      ul.lista-ul.mb-0
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Preparar el material: disponer y adecuar los recursos necesarios de acuerdo con el escenario laboral, para responder de manera oportuna a las necesidades del cliente.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Guardar silencio: respetar los silencios previos a la acogida, favoreciendo el orden y la calidad de la comunicación telefónica.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Sonreír: realizar una preparación emocional que facilite la empatía y contribuya a un ambiente agradable durante la interacción.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Descolgar al primer tono: evitar que el cliente espere innecesariamente, salvo en situaciones justificadas relacionadas con el desarrollo de la labor.

                .row(titulo="Al momento de descolgar")                  
                  p.mb-0 En el instante de atender la llamada, la atención debe centrarse únicamente en el cliente, evitando cualquier tipo de distracción que afecte la calidad del contacto inicial.
                      ul.lista-ul.mb-0
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Abandonar otras tareas: realizar actividades paralelas dificulta la escucha activa y se considera una práctica inadecuada en el ejercicio profesional.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Guardar silencio hasta la acogida: evitar hablar al tomar el teléfono, ya que esta acción genera una percepción negativa y resulta descortés para el interlocutor
                        
                .row(titulo="Acogida")                  
                  p.mb-0 La acogida constituye una etapa clave, dado que representa el primer contacto en el que el asesor o asesora proyecta la imagen de la empresa y define el clima de la comunicación.
                      ul.lista-ul.mb-0
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Identificación de la empresa: mencionar el nombre de la empresa de manera clara y segura.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Saludo: realizar un saludo moderado y cordial que propicie una interacción respetuosa.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Identificación personal: presentarse y solicitar de forma amable el nombre del cliente, con el fin de generar cercanía.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Oferta de ayuda: brindar apoyo al cliente mediante la sonrisa telefónica y un tono cálido.


        .bg--img_03.mt-5
          .row.justify-content-center
            .col-lg-8
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                .row(titulo="Motivo de la llamada")                
                  .col-12
                    p.mb-0           
                      | Antes de atender una llamada, el asesor o asesora debe realizar una preparación previa, asumiendo una actitud positiva y orientada al servicio, con el fin de garantizar una atención adecuada desde el primer contacto.
                      ul.lista-ul.mb-0
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Sondeo: formular preguntas que permitan obtener información suficiente sobre la razón de la llamada, utilizando un tono seguro y dirigiéndose al cliente de usted.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Reformulación: interpretar el mensaje del cliente y manifestar interés mediante el uso de parafraseo, resúmenes y señales verbales que confirmen la escucha.
                        
                .row(titulo="Acción")
                  .col-12
                    p.mb-0           
                      | Esta fase corresponde al momento en el que el asesor o asesora participa de manera activa para dar respuesta a la necesidad del cliente, ya sea brindando información, aclarando inquietudes, gestionando quejas o atendiendo reclamaciones.
                      ul.lista-ul.mb-0
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Gestión de la llamada: aplicar habilidades comunicativas y mantener una actitud profesional orientada a la solución de la situación planteada.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Transferencia de llamadas: solicitar autorización al cliente y acompañarlo durante el proceso, con el fin de prevenir incomodidades.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Comunicación clara: evitar responder una pregunta con otra, emplear un lenguaje comprensible y sostener la escucha activa durante toda la interacción.

                .row(titulo="Conclusión")
                  .col-12
                    p.mb-0           
                      | La conclusión facilita el cierre de la llamada de manera organizada y cordial, fortaleciendo una experiencia positiva para el cliente.
                      ul.lista-ul.mb-0
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Cierre: realizar un breve recuento de lo acordado durante la llamada. 
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")  
                          | Agradecimiento: expresar gratitud al cliente por haberse comunicado.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Pausa final: brindar un espacio para que el cliente aporte información adicional o plantee alguna inquietud.
                        li
                          i.fas.fa-circle-right.me-2(style="color:#625A70")
                          | Despedida: finalizar la interacción de forma cálida y cordial, dejando una impresión favorable.

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema1/34.png", alt="alt").img400.m-auto


    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        TabsC.color-acento-contenido.mt-5
          .py-3.py-md-4(titulo="Pasividad")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/pestana1_01.png', alt='')                 

              .col-md-6.mb-4.mb-md-0
                h4 Pasividad
                ul.lista-ul.mb-0
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Evitan expresar lo que piensan o sienten por temor a ser rechazados, incomprendidos u ofender a los demás.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | No confían en sí mismos ni en sus opiniones.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Tienden a otorgar un valor superior a los demás, relegando sus propias necesidades.


          .py-3.py-md-4(titulo="Agresividad")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana1_02.png', alt='')

              .col-md-6
                h4 Agresividad
                ul.lista-ul.mb-0
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Es totalmente opuesta a la pasividad.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Se presenta en personas que sobrevaloran su forma de pensar.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Pueden llegar a despreciar o subestimar las opiniones y sentimientos de los demás.
                  

          .py-3.py-md-4(titulo="Asertividad")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana1_03.png', alt='')

              .col-md-6
                h4 Asertividad
                ul.lista-ul.mb-0
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Se abren a las opiniones de los demás.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Se respetan a sí mismos y a los demás.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Expresan con seguridad y confianza lo que desean.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | No consideran que los demás deban pensar igual que ellos.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Evitan el conflicto, pero no se dejan intimidar.
                  li
                    i.fas.fa-check-circle.me-2(style="color:#AD9721")
                    | Generalmente son personas abiertas y honestas.

    .row.mt-4
      p.mb-0 Los asesores telefónicos deben saber identificar y clasificar estas conductas con el fin de utilizar estrategias de comunicación adecuadas para cada tipo de cliente. Esta capacidad permite ofrecer una atención más empática, personalizada y efectiva, contribuyendo a mejorar la experiencia del cliente y la imagen de la empresa.

      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
            h3.titulo-con-imagen__texto Tipología de clientes




    .row.mt-4
      p.mb-0 En el mundo de la comunicación telefónica, el asesor o la asesora, aunque no está cara a cara con los clientes, también se expone a múltiples situaciones difíciles. En estas situaciones, resulta necesario apoyarse en las habilidades y la formación profesional para afrontar escenarios que exigen un alto control emocional, debido al trato frecuente con ciertos tipos de clientes.

    .row.mt-4
      .col-md-4.mb-4.mb-md-0
        figure
                  img(src='@/assets/curso/tema1/35.svg', alt='')
      .col-md-8.mb-4.mb-md-0
        p.mb-4 Aunque la integridad física del asesor no está en peligro, sí enfrenta casos complejos en los que el interlocutor se siente libre de insultar o colgar sin reparos. Sin embargo, también se presentan experiencias muy buenas, agradables y constructivas, claramente con otro tipo de clientes.
        p.mb-0 A continuación, se presentan algunos tipos de clientes y cómo se les debería tratar en una comunicación telefónica:
        




      .bg--img_03.mt-5
      .row.justify-content-center
        .col-lg-4 
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/26.png", alt="alt").img400.m-auto
            

        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Cliente pretencioso")
              .col-12
                p.mb-4 Es un cliente que se cree superior a los demás, típico ejemplo de una persona con conducta o estilo de comunicación agresiva.
                
                .row.justify-content-center
                  .col-md-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 1.
                      span Cliente pretencioso: características y recomendaciones de trato
                    
                    .tabla-a.color-acento-botones
                      table
                        thead
                          tr
                            th.text-center(style="width: 40%") Comportamiento
                            th.text-center(style="width: 60%") Niveles del lenguaje
                        tbody
                          tr
                            td.text-center Vanidoso.
                            td Elogiarlo.
                          tr
                            td.text-center Cree que lo sabe todo.
                            td Repetir su nombre con frecuencia.
                          tr
                            td.text-center Dominante.
                            td Demostrar interés por sus asuntos.
                          tr
                            td.text-center Tiende a engañar.
                            td "Precisamente para personas como usted..."
                          tr
                            td.text-center Exige trato exclusivo.
                            td Ofrecer atención diferenciada.

            .row(titulo="Cliente desconfiado")                  
              .col-12
                p.mb-4 Son personas escépticas que no confían en nada ni en nadie. Critican los argumentos, tratan de dominar, no escuchan consejos. 
                
                .row.justify-content-center
                  .col-md-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 2.
                      span Cliente desconfiado: características y recomendaciones de trato
                    
                    .tabla-a.color-acento-botones
                      table
                        thead
                          tr
                            th.text-center(style="width: 40%") Comportamiento
                            th.text-center(style="width: 60%") Niveles del lenguaje
                        tbody
                          tr
                            td.text-center No se cree nada.
                            td Conservar la calma y el buen humor.
                          tr
                            td.text-center Intransigente.
                            td Respetar sus ideas.
                          tr
                            td.text-center Rechaza hasta los argumentos lógicos.
                            td Hacer preguntas.
                          tr
                            td.text-center Susceptible.
                            td Buscar puntos comunes.
                          tr
                            td.text-center Utiliza la ironía.
                            td No mostrarse insistente ni discutidor.
                          tr
                            td.text-center Le gusta comprar, no que le vendan.
                            td No afirmar lo que no se pueda demostrar.
                          tr
                            td.text-center Le pone faltas a todo.
                            td Presentar pruebas, no entrar en su juego.

            .row(titulo="Cliente indeciso")                  
              .col-12
                p.mb-4 Este cliente muy pocas veces toma decisiones por sí mismo. Necesita que el asesor lo oriente constantemente, hace muchas preguntas y suele decir que "lo va a pensar", prolongando la llamada.
                
                .row.justify-content-center
                  .col-md-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 3.
                      span Cliente indeciso: características y recomendaciones de trato
                    
                    .tabla-a.color-acento-botones
                      table
                        thead
                          tr
                            th.text-center(style="width: 40%") Comportamiento
                            th.text-center(style="width: 60%") Niveles del lenguaje
                        tbody
                          tr
                            td.text-center Se muestra inseguro.
                            td Escuchar pacientemente.
                          tr
                            td.text-center No sabe lo que quiere.
                            td Investigar su motivación.
                          tr
                            td.text-center Duda de todo y de todos.
                            td Ofrecer pocas alternativas.
                          tr
                            td.text-center Intenta aplazar la decisión.
                            td Darle seguridad.
                          tr
                            td.text-center Responde con evasivas al cierre.
                            td Insistir en los perjuicios de la demora.
                          tr
                            td.text-center Pide la opinión del interlocutor.
                            td Orientarlo, asegurar su comprensión.

            .row(titulo="Cliente grosero")                  
              .col-12
                p.mb-4 Es el peor cliente que puede encontrarse un asesor. Tiene un repertorio de agresiones, comentarios y actitudes malintencionadas, no solo hacia el asesor sino también hacia la empresa.
                
                .row.justify-content-center
                  .col-md-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 4.
                      span Cliente grosero: características y recomendaciones de trato
                    
                    .tabla-a.color-acento-botones
                      table
                        thead
                          tr
                            th.text-center(style="width: 40%") Comportamiento
                            th.text-center(style="width: 60%") Niveles del lenguaje
                        tbody
                          tr
                            td.text-center Mal humor permanente.
                            td Ser cortés pero no sumiso.
                          tr
                            td.text-center Ofende al interlocutor.
                            td Hacer caso omiso de su grosería.
                          tr
                            td.text-center Discute con facilidad.
                            td No interrumpir.
                          tr
                            td.text-center Dominante y agresivo.
                            td Prescindir de promociones, mantener calma.






      .bg--img_03.mt-5
      .row.justify-content-center
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Cliente locuaz")
              .col-12
                p.mb-4 Es un cliente que se cree superior a los demás, típico ejemplo de una persona con conducta o estilo de comunicación agresiva.
                
                .row.justify-content-center
                  .col-md-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 5.
                      span Cliente locuaz: características y recomendaciones de trato
                    
                    .tabla-a.color-acento-botones
                      table
                        thead
                          tr
                            th.text-center(style="width: 40%") Comportamiento
                            th.text-center(style="width: 60%") Niveles del lenguaje
                        tbody
                          tr
                            td.text-center No tiene sentido del tiempo.
                            td Escuchar con simpatía.
                          tr
                            td.text-center Desvía la atención del interlocutor.
                            td Escuchar con simpatía.
                          tr
                            td.text-center Habla demasiado, acapara la conversación.
                            td Mantener la distancia.
                          tr
                            td.text-center la conversación
                            td

            .row(titulo="Cliente afable")                  
              .col-12
                p.mb-4 Generalmente, es una persona muy hábil con las palabras. Le gusta agradar e interactuar, pero no siempre tiene un interés real.
                
                .row.justify-content-center
                  .col-md-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 6.
                      span Cliente afable: características y recomendaciones de trato
                    
                    .tabla-a.color-acento-botones
                      table
                        thead
                          tr
                            th.text-center(style="width: 40%") Comportamiento
                            th.text-center(style="width: 60%") Niveles del lenguaje
                        tbody
                          tr
                            td.text-center Dice "sí" a todo.
                            td Escuchar con simpatía.
                          tr
                            td.text-center Desvía la atención del interlocutor.
                            td Escuchar con simpatía.
                          tr
                            td.text-center Habla demasiado, acapara.
                            td Mantener la distancia.
                          tr
                            td.text-center La conversación.
                            td No darle familiaridad.

            .row(titulo="Cliente seguro de sí mismo")                  
              .col-12
                p.mb-4 Este tipo de cliente es el mejor para concluir negocios. No expresa emotividad, pero declara claramente sus intenciones. Es el cliente asertivo por naturaleza.
                
                .row.justify-content-center
                  .col-md-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 7.
                      span Cliente afable: características y recomendaciones de trato
                    
                    .tabla-a.color-acento-botones                      
                      table
                        thead
                          tr
                            th.text-center(style="width: 40%") Comportamiento
                            th.text-center(style="width: 60%") Niveles del lenguaje
                        tbody
                          tr
                            td.text-center Confía en su criterio.
                            td Mantener aplomo.
                          tr
                            td.text-center Sabe lo que quiere.
                            td Usar argumentos de peso.
                          tr
                            td.text-center Es consciente de la información.
                            td Seriedad y seguridad.
                          tr
                            td.text-center Que necesita.
                            td Hacerle sentir que recibe una propuesta exclusiva.
                      

            .row(titulo="Cliente seco")                  
              .col-12
                p.mb-4 Es una persona que encaja perfectamente en el estilo de comunicación pasiva.
                
                .row.justify-content-center
                  .col-md-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 8.
                      span Cliente seco: características y recomendaciones de tratov
                    
                    .tabla-a.color-acento-botones
                      table
                        thead
                          tr
                            th.text-center (style="width: 40%") Comportamiento
                            th.text-center (style="width: 60%") Niveles del lenguaje
                        tbody
                          tr
                            td.text-center  Usa monosílabos.
                            td.text-center  No forzarlo a hablar.
                          tr
                            td.text-center  No toma la iniciativa.
                            td.text-center  Formular preguntas cerradas con respuesta afirmativa.
                          tr
                            td.text-center  Utiliza frases cortas.
                            td.text-center  Usar frases breves y precisas.

            .row(titulo="Cliente exagerado")                  
              .col-12
                p.mb-4 Difícilmente se le complace, ya que tiende a exagerar todo: desde el servicio hasta el trato recibido.
                
                .row.justify-content-center
                  .col-md-10
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 9.
                      span Cliente exagerado: características y recomendaciones de trato
                    
                    .tabla-a.color-acento-botones
                      table
                        thead
                          tr
                            th.text-center(style="width: 40%") Comportamiento
                            th.text-center(style="width: 60%") Niveles del lenguaje
                        tbody
                          tr
                            td.text-center  Lo agranda todo.
                            td.text-center  Objetivar.
                          tr
                            td.text-center  Es subjetivo.
                            td.text-center  Pedir datos concretos.
                          tr
                            td.text-center  "Saca las cosas de quicio".
                            td.text-center  Confirmar los datos aportados.
        .col-lg-4 
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/36.png", alt="alt").img400.m-auto





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
