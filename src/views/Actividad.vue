<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Comunicación telefónica y atención al cliente',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los conceptos clave, habilidades y técnicas esenciales para una atención telefónica profesional y efectiva en el contexto del servicio al cliente.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué herramienta es fundamental en la atención al cliente y proyección de la imagen organizacional?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La comunicación telefónica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La atención presencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El correo electrónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La publicidad visual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes NO es una capacidad clave del asesor telefónico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transmitir ideas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Atraer la atención.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolver problemas técnicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Captar necesidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué elemento se percibe aunque no se vea, y genera un clima empático?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La sonrisa telefónica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El volumen de voz.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La argumentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La información técnica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es el objetivo del tono seguro en una llamada?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Obtener información del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Finalizar la conversación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar una venta inmediata.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Discutir objeciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué componente de la voz se refiere a la pronunciación clara de palabras?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Articulación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Volumen.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elocución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Entonación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes comportamientos NO pertenece a un buen oyente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escuchar lo esencial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No juzgar hasta comprender.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fingir atención.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Concentrarse activamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué se debe evitar en el volumen de voz durante una llamada?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener equilibrio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Adaptarse al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gritar o susurrar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Hablar de forma clara.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una de las principales causas de insatisfacción en la atención telefónica?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El túnel oscuro.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La amabilidad excesiva.	',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El saludo cordial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tono tranquilo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué etapa de la llamada implica comprender el motivo de la comunicación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acogida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Motivo de la llamada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Acción',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conclusión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué estilo de comunicación se caracteriza por evitar el conflicto sin dejarse intimidar?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agresividad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pasividad',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Asertividad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Inseguridad',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cómo debe tratarse al cliente grosero?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Responder con firmeza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser cortés pero no sumiso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Imitar su tono.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar atenderlo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de cliente necesita orientación constante y suele decir "lo va a pensar"?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Grosero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pretencioso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Indeciso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Desconfiado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué técnica consiste en prestar atención a las ideas e intenciones del cliente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hablar lentamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escucha activa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elocución adecuada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comunicación sugestiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué componente ayuda a comprobar si el asesor comprendió correctamente al cliente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recapitulación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Pregunta alternativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tono cálido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Técnica de secuenciación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué tipo de pregunta permite al cliente expresarse libremente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alternativa',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cerrada',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Abierta',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Automática',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué debe evitarse al usar preguntas informativas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser claro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Interrogar sin empatía.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Pedir datos útiles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hablar con amabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuál es una desventaja de las preguntas cerradas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Obligan a elegir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ofrecen poca información adicional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitan confusión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentan la participación.	',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué cliente se caracteriza por hablar demasiado de asuntos personales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asertivo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Locuaz',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Afable',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Seco',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué se debe evitar completamente durante una llamada telefónica?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pedir información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comer mientras se habla.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Escuchar activamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hablar con claridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué tipo de pregunta ofrece dos opciones entre las cuales elegir?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alternativa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Informativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'De sondeo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'De cierre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
