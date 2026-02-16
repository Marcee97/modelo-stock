// const Groq = require('groq-sdk');
// const { CONTEXTO_COMPLETO } = require('./contexto/negocio.js');
// const groq = new Groq({
//     apiKey: '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'
// })

// const llamadaPrueba = async () => {
//     try {
//         const response = await groq.chat.completions.create({
//             model:'llama-3.3-70b-versatile',
//             messages: [{
//                 role: 'system',content: CONTEXTO_COMPLETO
//             },
//             {
//                 role: 'user', content: 'Hola como va te consulto esta en el centro el negocio?'
//             }
//         ],
//             temperature: 0.7,
//                 max_tokens: 200
//         });
//         console.log("Respuesta:", response.choices[0].message.content);
//         console.log("tokens usados:", response.usage);
//     } catch (error) {
//         console.log('Error en la llamada a Groq:', error);
//     }
// }

// llamadaPrueba()

//api key de Twilio: KLYHXN1KMEHNRQBLR3E4MNJQ


// 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