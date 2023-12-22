const { Telegraf, Markup } = require('telegraf');
const fs = require('fs');
const axios= require('axios');
const { resolve } = require('path');
const { reject } = require('assert');

const bot = new Telegraf('6981494621:AAHi4rnqVzDFsBZStLZXsnWKj11_uVuT4YI');
/*
const dowloandImg = (url, image_path, ctx) =>
  axios({ url, responseType: "stream" }).then(
    (response) =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(image_path))
          .on("finish", () => {
            ctx.reply("Almacenada Correctamente :3");
            resolve();
          })
          .on("error", (e) => {
            ctx.reply("No pude almacenarla correctamente :(");
            reject(e);
          });
      })
  );


const helpMessage='este es un bot de prueba para ver si funcionaba y si funciono bb :3'

bot.start((ctx) => {
  ctx.reply('hola mundo');
});

bot.help((ctx) => {
    ctx.reply(helpMessage);
  });
  
bot.command('ramdon',()=>{
  
  ctx.reply('ramdon :3');
})

bot.on('text', (ctx)=>{
  ctx.reply(ctx.update.message.text)
})
bot.on('photo',(ctx)=>{
  const fileId= ctx.update.message.photo[3].file_id
  ctx.telegram.getFileLink(fileId).then((response)=>{
    dowloandImg(response.href, './img/photo.jpg', ctx)
  })
  ctx.reply('me has enviado una fotito:3')
})

bot.command('text', (ctx)=>{
  ctx.replyWithPhoto({source:'camaradita.png'})
})*/



bot.on('text', (ctx) => {
  const texto = ctx.message.text.toLowerCase(); 
  if (texto === 'hola' || texto === 'ola' || texto === 'menas') {
    ctx.reply('¡Hola! Menos días, el día de hoy tenemos muchas OFERTAS. Si deseas conocerlas, escribe *Ofertas*');
  }

  const consoltar = texto.toLowerCase();
  if (consoltar === 'ofertas') {
    ctx.reply('Escoje una de nuestras ofertas', Markup.keyboard([
      ['Helado', 'Pollo'],
      ['Crepe', 'Sopa'],
    ])
    .oneTime()
    .resize()
    );
  }

 if(consoltar==='helado'){
  ctx.reply('escogiste helaitos')
  ctx.replyWithPhoto({source:'camaradita.png'})
  ctx.reply('si quieres pedir uno de nuestros heladitos escribe *Pedir*')


 } else if(consoltar==='pollo'){
  ctx.reply('escogiste pollito')
  ctx.replyWithPhoto({source:'camaradita.png'})
  ctx.reply('si quieres pedir uno de nuestros pollitos escribe *Pedir*')
  
 }else if(consoltar==='crepe'){
  ctx.reply('escogiste crepe')
  ctx.replyWithPhoto({source:'camaradita.png'})
  ctx.reply('si quieres pedir uno de nuestros crepes escribe *Pedir*')

 }else if(consoltar==='Sopa'){
  ctx.reply('escogiste sopitas')
  ctx.replyWithPhoto({source:'camaradita.png'})
  ctx.reply('si quieres pedir uno de nuestros sopitas escribe *Pedir*')
 }
 const pedido= consoltar.toLowerCase();


 if(pedido==='pedir'){

  ctx.reply('como queres pagar?')
  setTimeout(()=>{
    
  ctx.reply('*Efectivo*')
  },1000) 
  setTimeout(()=>{
    
    ctx.reply('*Online*')
    },1100)
 }


});

bot.launch();

