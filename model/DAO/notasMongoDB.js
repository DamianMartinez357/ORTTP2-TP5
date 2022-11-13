import CnxMongoDB from '../DB.js'
import { ObjectId } from "mongodb"

class NotasMongoDAO {

    findNota = async id => {
        if(!CnxMongoDB.connection) return {}
        let nota = await CnxMongoDB.db.collection('notas').findOne({_id: ObjectId(id)})
        return nota    
    }

    findNotas = async ()  => {
        if(!CnxMongoDB.connection) {
            return []
        }
        try {
            let notas = await CnxMongoDB.db.collection('notas').find({}).toArray()
            return notas
        }
        catch {
            return []
        }
    }
    saveNota = async nota => {
        if(!CnxMongoDB.connection){
            return {}
        }else{
            nota.nota = parseInt(nota.nota)
            await CnxMongoDB.db.collection('notas').insertOne(nota)
            var respuesta = {status:'ok'}
            return (respuesta)
        } 
   }
 
}
export default NotasMongoDAO
