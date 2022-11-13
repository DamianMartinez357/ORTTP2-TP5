import config from '../config.js'
import NotasFactoryDAO from '../model/DAO/notasFactory.js'


class ApiNotas {
    constructor() {

        this.notasModel = NotasFactoryDAO.get(config.MODO_PERSISTENCIA)
    }
    async obtenerNotas() { 
        let notas = await this.notasModel.findNotas()
        return notas
    }

    guardarNota = async nota => {
        return await this.notasModel.saveNota(nota)
    }
    async obtenerPromedioYCantidad() {
        try {
            let notas = await this.notasModel.findNotas()
            let sum = 0
            let cant = notas.length
            
            for(let i=0; i<cant; i++) {
                let nota = notas[i].nota
                sum += nota
            }
            let promedio = undefined
            if(cant) promedio = sum / cant
            return {'promedio: ':promedio, 'cantidad: ' : cant}
        }
        catch(error) {
            console.log(error)
        }
    }
}
export default ApiNotas