const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')
const axios = require('axios');
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')
const {TokenApiWisphub, UrlApiWisphub }= require('./config.js')

const clienteEndpoint = `${UrlApiWisphub}/api/usuario`;
const readline= require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Preguntar al usuario
  rl.question('¿Cómo te llamas? ', (respuesta) => {
    console.log(`Hola, ${respuesta}!`);
    
    // Cerrar la interfaz de lectura
    rl.close();
  });
  
  // Manejar el evento de cierre de la interfaz de lectura
 // Dentro del evento 'close'
rl.on('close', async () => {
    console.log('¡Adiós!');
    try {
        const response = await axios.get(clienteEndpoint, {
            headers: {
                Authorization: `Bearer ${TokenApiWisphub}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            const clientes = response.data;
            console.log(clientes);
        } else {
            console.error(`Error al consultar la API de Wisphub. Código de estado: ${response.status}`);
        }
    } catch (error) {
        console.error('Hubo un error con la conexión de Wisphub', error.message);
        console.log(error.response);
    }
    process.exit(0);
});

/*
const main = async () => {
    const adapterDB = new JsonFileAdapter();
    const adapterFlow = createFlow([flowPrincipal]);
    const adapterProvider = createProvider(BaileysProvider);

    const bot = createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });

    QRPortalWeb();

    // Ejemplo de interacción por consola
    console.log('Ingrese una pregunta o comando:');
    while (true) {
        const input = prompt('> ');  // Espera la entrada del usuario
        if (input.toLowerCase() === 'exit') {
            break;
        }

        const answer = await bot.processMessage(input);
        console.log('Respuesta del bot:', answer);
    }
};
const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer('🙌 Hola bienvenido a este *Chatbot*')
    .addAnswer(
        [
            'te comparto los siguientes links de interes sobre el proyecto',
            '👉 *doc* para ver la documentación',
            '👉 *gracias*  para ver la lista de videos',
            '👉 *discord* unirte al discord',
        ],
        null,
        null,
        [flowDocs, flowGracias, flowTuto, flowDiscord]
    )


const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])

const flowDocs = addKeyword(['doc', 'documentacion', 'documentación']).addAnswer(
    [
        '📄 Aquí encontras las documentación recuerda que puedes mejorarla',
        'https://bot-whatsapp.netlify.app/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowTuto = addKeyword(['tutorial', 'tuto']).addAnswer(
    [
        '🙌 Aquí encontras un ejemplo rapido',
        'https://bot-whatsapp.netlify.app/docs/example/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowGracias = addKeyword(['gracias', 'grac']).addAnswer(
    [
        '🚀 Puedes aportar tu granito de arena a este proyecto',
        '[*opencollective*] https://opencollective.com/bot-whatsapp',
        '[*buymeacoffee*] https://www.buymeacoffee.com/leifermendez',
        '[*patreon*] https://www.patreon.com/leifermendez',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowDiscord = addKeyword(['discord']).addAnswer(
    ['🤪 Únete al discord', 'https://link.codigoencasa.com/DISCORD', '\n*2* Para siguiente paso.'],
    null,
    null,
    [flowSecundario]
)

main()

*/