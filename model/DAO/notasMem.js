class NotasMemDAO {

    constructor() {
        this.notas = [
            { id: '1', nota: 10, nombre: 'Juan', apellido: 'Perez', curso:'22D' },
            { id: '2', nota: 8, nombre: 'Jose', apellido: 'Gimenez', curso:'21D' },
        ]
    }

    findNotas = async ()  => {
        try {
            return this.notas
        }
        catch {
            return []
        }
    }

    saveNota = async nota => {
        nota.nota = parseInt(nota.nota)
        const id = parseInt(this.notas[this.notas.length-1].id) + 1
        nota.id = String(id)
        this.notas.push(nota)
        return nota  
    }
    
}

export default NotasMemDAO
