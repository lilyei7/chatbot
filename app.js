const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['Listo'])
.addAnswer('📄 Aquí tenemos el flujo secundario', {
})

const flowPasto = addKeyword(['¿Me pueden dar información sobre el pasto sintético?'])
.addAnswer(
    [
    '🌱 Manejamos 2 tipos de pasto sintético:',
    'Modelo 1: Económico 8 mm de altura 💲235/m2',
    'Modelo 2: Premium 20 mm de altura 💲359/m2',
    'Ofrece una calidad superior y mayor durabilidad.',
    'Cuéntame... ⬇️',
    '¿Cuál de los modelos te interesa más? 🤔',
    '¿Cuántos metros cuadrados necesitas cubrir aproximadamente? 😃',
    'Con esta información, podré brindarte una mejor asesoría y un presupuesto más preciso. ¡Espero tus respuestas!',
    'Estamos ubicados en Cancún Quintana Roo 📍',
    '✅ Todo el material lo tenemos para entrega inmediata y a domicilio con pagos a contraentrega para la seguridad del cliente 🤝',
   
    ],
    { media: 'https://i.ibb.co/PgRhyxd/ps1.jpg'},
    [flowSecundario]
)
.addAnswer(
    [' '
],
{ media: 'https://i.ibb.co/ZYL02WK/ps.jpg'}
)

const flowLambrin = addKeyword(['¿Me pueden dar información sobre el Lambrin exclusive?'])
.addAnswer(
    [
    '🔰Lambrin calidad Exclusive',
    '‼️Remate $699‼️  Pieza de 2.90 x 16 cm ⬇️',
    'Estamos ubicados en Cancún Quintana Roo 📍',
    '✅ Todo el material lo tenemos para entrega inmediata y a domicilio, con pagos a contraentrega para la seguridad del cliente 🤝',
    'Igualmente te comparto fotos y el catálogo de los modelo que tenemos para entrega inmediata 👍'
    ],
    { media: 'https://i.ibb.co/FqJD75f/Whats-App-Image-2024-04-19-at-5-41-57-PM.jpg' },
    null,
    [flowSecundario]
)
.addAnswer(
    [' '
],
{ media: 'https://i.ibb.co/M2mqTtR/Whats-App-Image-2024-04-19-at-5-41-57-PM-1.jpg'}
)
.addAnswer(
    [' '],
{ media: 'https://i.ibb.co/PzMCJ1r/Whats-App-Image-2024-04-19-at-5-41-57-PM-4.jpg'}
)
.addAnswer(
    [' '
],
{ media: 'https://i.ibb.co/QdFRd7f/Whats-App-Image-2024-04-19-at-5-41-57-PM-3.jpg '}
)
.addAnswer(
    [' '
],
{ media: 'https://i.ibb.co/sKTSZ6T/Whats-App-Image-2024-04-19-at-5-41-58-PM-1.jpg'}
)
.addAnswer(
    [' '
],
{ media: 'https://i.ibb.co/CVBrrdB/Whats-App-Image-2024-04-19-at-5-41-58-PM-2.jpg'}
)
.addAnswer(
    [' '
],
{ media: 'https://i.ibb.co/wd9MncF/Whats-App-Image-2024-04-19-at-5-41-58-PM.jpg'}
)
.addAnswer(
    ['  '
],
{ media: 'https://i.ibb.co/frGHvX6/Whats-App-Image-2024-04-19-at-5-41-57-PM-2.jpg'}
)


const flowMarmol = addKeyword(['¿Me pueden dar información sobre las placas de mármol PVC?'])
.addAnswer(
    [
    '🔰Placas de mármol PVC🔰',
    '‼️Remate $2,350‼️  Placa de 2.44x1.22 ⬇️',
    'Especificaciones :',
    '✅ 9 años de garantía',
    '✅ filtro al agua 💦',
    '✅ filtro a rayos Uv',
    '✅ mantendrá el color durante los 9 años de vida útil',
    '¿Cuantos metros cuadrados necesitas cubrir? 😃👍',
    'Estamos ubicados en Cancún Quintana Roo 📍',
    '✅ Todo el material lo tenemos para entrega inmediata y a domicilio, con pagos a contraentrega para la seguridad del cliente 🤝',
    'Igualmente te comparto fotos y el catálogo de los modelo que tenemos para entrega inmediata 👍'
    ],
    { media: 'https://i.ibb.co/k4C40C0/t.jpg' },
    null,
    [flowSecundario]
)
.addAnswer(
    [' '
],
{ media: 'https://i.ibb.co/y4WsYRK/t1.jpg'}
)
.addAnswer(
    [' '
],
{ media: 'https://i.ibb.co/Kr2twmD/t2.jpg'}
)
.addAnswer(
    [' '
],
{ media: 'https://i.ibb.co/SKtQn8t/t3.jpg'}
)
.addAnswer(
    [' '
],
{ media: 'https://i.ibb.co/74T2SMb/Whats-App-Image-2024-04-19-at-5-47-32-PM-1.jpg'}
)
.addAnswer(
    [' '
],
{ media: 'https://i.ibb.co/7CMVM5c/Whats-App-Image-2024-04-19-at-5-47-32-PM.jpg'}
)

const flowBoox = addKeyword(['¿Me pueden dar información sobre el follaje artificial ?'])
.addAnswer(
    ['‼️Promoción‼️ $550m2  🚚Entrega inmediata 🚚',
    '🌱modelo booxwood premium',
    '🌱  Cuenta con ⬇️',
    '✅ 9 años de garantía en exterior',
    '✅ filtro al agua 💦',
    '✅ filtro a rayos Uv',
    '✅ mantendrá el color durante los 9 años de vida útil',
    '¿Cuantos metros cuadrados necesitas? 😃👍',
    'Estamos ubicados en Cancún Quintana Roo 📍',
    '✅ Todo el material lo tenemos para entrega inmediata y a domicilio, con pagos a contraentrega para la seguridad del cliente 🤝',
    ],
    { media: 'https://i.ibb.co/JKpG6Rf/a.jpg' },
    null,
    [flowSecundario]
)
.addAnswer(
    [' '
],
{ media: 'https://i.ibb.co/yggKB3r/c.jpg'}
)
.addAnswer(
    [' '
],
{ media: 'https://i.ibb.co/K6pxsYf/b.jpg'}
)

const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer('🙌 Hola bienvenido *Verdesisimo* , Fabricantes de pasto sintético con alta calidad y precios competitivos en el mercado 😃✅')
    .addAnswer(
        [
            'Selecciona una de las opciones siguientes:',
            '1️⃣ 🌱 *Pasto Sintetico*',
            '2️⃣ 🔰*Lambrin calidad Exclusive*',
            '3️⃣ 🔰*Placas de mármol PVC🔰*',
            '4️⃣ 🌱*Follaje Artificial Premium*',
        ],
        { media: 'https://i.ibb.co/ch54fw2/presentacion.jpg' },
        null,
        [flowPasto, flowLambrin, flowMarmol , flowBoox ]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, flowPasto, flowLambrin, flowMarmol , flowBoox])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
