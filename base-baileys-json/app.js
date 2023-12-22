const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')


const FlujoImagen = addKeyword('imagen').addAnswer('mira la imagen',{
    media:'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png'
})

const FlujoPrincipal = addKeyword(['hola', 'ola', 'holis', 'buenas'])
    .addAnswer(['Hola bienvenido a nuestra tienda', ''])
    
    .addAnswer('¿Cual es tu email?',{capture:true},(ctx, {fallBack})=>{
        if(!ctx.body.includes('@')){
            return fallBack()
        }
        console.log('mensaje entrante', cxt.body)
    })
    .addAnswer('En los siguientes minutos te enviaremos un correo')

    
    .addAnswer('Escribe *pedir* si quieres ordenar algo',{
        delay:1500
    })
/* 
ALT 60 = <
ALT 62 = >
*/
/* constante de pedir*/

    
const flujoPedir = addKeyword(['pedir', 'pedido']).addAnswer('como quieres pagar con *Efectivo* o con *Nequi*');
/*
const menuAPI = async()=>{
    const config={
        method:'get',
        url:'',
        headers: {
            'Authorization': `Bearer`
        }
    }
}*/
const flujoEfectivo = addKeyword('efectivo').addAnswer('te espero con efectivo')

const flujoOnline = addKeyword('online').addAnswer('entonces te enviare un link, para que realices el pago')


    const FlujoBotones =addKeyword(['botones', 'boton'] ). addAnswer('Estas son las opciones',{
    buttons:[
        {
            body:'Efectivo'
        },
        {
            body:'Online'
        },
        {
            body:'Lo que tu quieras'
        }
    ]
    })


const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([FlujoPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
