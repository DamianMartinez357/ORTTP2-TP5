import NotasMemDAO from './notasMem.js'
import NotasMongoDAO from './notasMongoDB.js'

class NotasFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'DESA' :
                console.log(' ***** DESARROLLO - Persistiendo en Memoria ***** ')
                return new NotasMemDAO()

            case 'PROD' :
                console.log(' ***** PRODUCCION - Persistiendo en MongoDB ***** ')
                return new NotasMongoDAO()

            default: 
                console.log(' ***** DESARROLLO - Persistiendo en default (Memoria) ***** ')
                return new NotasMemDAO()
        }
    }
}

export default NotasFactoryDAO