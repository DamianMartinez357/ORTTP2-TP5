import express from 'express'
import { RouterNotas } from './router/notas.js'
import CnxMongoDB from './model/DB.js'
import config from './config.js'

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

/* ----------------------------------------------------------------------- */
/*                               RUTA INICIAL                              */
/* ----------------------------------------------------------------------- */
app.use('/api/notas', new RouterNotas().start())

/* ----------------------------------------------------------------------- */
/*                            INICIO SERVIDOR                              */
/* ----------------------------------------------------------------------- */
if(config.MODO_PERSISTENCIA == 'PROD') {
    await CnxMongoDB.conectar()
}

const PORT = process.env.PORT || config.PORT
console.log("*** SISTEMA DE NOTAS ***")
const server = app.listen(PORT, () => console.log(`** Servidor express escuchando en el puerto ${PORT} **`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
