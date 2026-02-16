// server/server.js
const express = require('express');
const twilio = require('twilio');
const Groq = require('groq-sdk');
const { CONTEXTO_COMPLETO } = require('./contexto');

const app = express();
app.use(express.urlencoded({ extended: false }));

// Configurar Groq
const groq = new Groq({
    apiKey:'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'
});

// Almacenar conversaciones por usuario
const conversaciones = {};

// Endpoint que recibe mensajes de WhatsApp
app.post('/whatsapp', async (req, res) => {
    const mensajeEntrante = req.body.Body;
    const numeroCliente = req.body.From;
    
    console.log(`\n📱 Mensaje de ${numeroCliente}:`);
    console.log(`   "${mensajeEntrante}"\n`);
    
    try {
        // Inicializar conversación si es nueva
        if (!conversaciones[numeroCliente]) {
            conversaciones[numeroCliente] = [];
            console.log('   🆕 Nueva conversación iniciada');
        }
        
        // Agregar mensaje del usuario
        conversaciones[numeroCliente].push({
            role: 'user',
            content: mensajeEntrante
        });
        
        // Mantener solo últimos 10 mensajes (ahorra tokens)
        if (conversaciones[numeroCliente].length > 10) {
            conversaciones[numeroCliente] = conversaciones[numeroCliente].slice(-10);
        }
        
        console.log('   🤔 Consultando a Groq...');
        
        // Consultar a Groq
        const response = await groq.chat.completions.create({
            model: 'llama-3.3-70b-versatile',
            messages: [
                { role: 'system', content: CONTEXTO_COMPLETO },
                ...conversaciones[numeroCliente]
            ],
            temperature: 0.5,
            max_tokens: 150
        });
        
        const respuestaIA = response.choices[0].message.content;
        
        // Guardar respuesta en el historial
        conversaciones[numeroCliente].push({
            role: 'assistant',
            content: respuestaIA
        });
        
        console.log(`   🤖 Respuesta: "${respuestaIA}"`);
        console.log(`   📊 Tokens: ${response.usage.total_tokens}\n`);
        
        // Enviar respuesta a WhatsApp
       const twiml = new twilio.twiml.MessagingResponse();
twiml.message(respuestaIA);  // ← PRIMERO ESTO

console.log('   📤 XML enviado:', twiml.toString());  // ← DESPUÉS ESTO

res.type('text/xml').send(twiml.toString());
        
    } catch (error) {
        console.error('   ❌ Error:', error.message, '\n');
        
        const twiml = new twilio.twiml.MessagingResponse();
        twiml.message('Disculpá, tuve un problema técnico. Intentá de nuevo en un ratito.');
        res.type('text/xml').send(twiml.toString());
    }
});

// Comando para reiniciar conversación
app.post('/reset', async (req, res) => {
    const numeroCliente = req.body.From;
    conversaciones[numeroCliente] = [];
    
    const twiml = new twilio.twiml.MessagingResponse();
    twiml.message('Conversación reiniciada ✅ ¿En qué te puedo ayudar?');
    res.type('text/xml').send(twiml.toString());
});

// Ruta de prueba
app.get('/', (req, res) => {
    const stats = {
        servidor: '🚴‍♂️ Bot de Rio Cuarto Bikes',
        estado: '✅ Funcionando',
        conversacionesActivas: Object.keys(conversaciones).length,
        timestamp: new Date().toLocaleString('es-AR')
    };
    
    res.json(stats);
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log('═══════════════════════════════════════════');
    console.log('🚴‍♂️  BOT DE WHATSAPP - RIO CUARTO BIKES');
    console.log('═══════════════════════════════════════════');
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📱 Listo para recibir mensajes de WhatsApp`);
    console.log('═══════════════════════════════════════════\n');
});