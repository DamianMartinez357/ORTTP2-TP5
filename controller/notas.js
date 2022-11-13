import ApiNotas from '../api/notas.js'


class ControladorNotas {

    constructor() {
        this.apiNotas = new ApiNotas()
    }

    getNotas = async (req,res) => {
        const { id } = req.params
        res.json(await this.apiNotas.obtenerNotas(id))
    }

    postNota = async (req,res) => {
        const nota = req.body
        res.json(await this.apiNotas.guardarNota(nota))
    }
    
    calcularNotas = async (req,res) => {
        try {
            let promedioYCantidad = await this.apiNotas.obtenerPromedioYCantidad()
            res.json({promedioYCantidad})
        }
        catch(error) {
            console.log(error)
        }
    }
}
export default ControladorNotas