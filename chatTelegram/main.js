const { Telegraf, Markup } = require('telegraf');
const axios = require('axios');
const { TELEGRAM_BOT, TOKENWISPHUB, UrlApiWisphub} = require('./config');
try {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.wisphub.net/api/clientes/',
    headers: { 
      'Authorization': 'Api-Key KqMV1Rzf.3WAH5Yc9WDFDB7XSzRFu64HoVp2TUj0b'
    }
  };
  const holis="activo"
  axios.request(config).then((response) => {
    console.log(JSON.stringify(response.data.estado));
  }).catch((error) => {
    console.log(error);
    });
    
} catch (error) {
  console.error('Hubo un error con la conexión de Wisphub', error.message);
  console.log(response)
}
/** 
const bot = new Telegraf(TELEGRAM_BOT);

bot.on('text', async (ctx) => {
  const texto = ctx.message.text.toLowerCase();

  if (texto === 'consultas sobre tus servicios') {
    
  }
});


bot.launch();
*/