import express from 'express'
import ControladorNotas from '../controller/notas.js'


export class RouterNotas {
    constructor() {
        this.router = express.Router()
        this.controladorNotas = new ControladorNotas()
    }

    start() {
        this.router.get('/', this.controladorNotas.getNotas)
        this.router.post('/', this.controladorNotas.postNota)
        this.router.get('/calculo',this.controladorNotas.calcularNotas)
        return this.router
    }
}
