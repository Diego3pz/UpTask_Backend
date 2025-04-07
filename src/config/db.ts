import mongoose from "mongoose"
import colors from 'colors'
import {exit} from 'node:process'

export const connectDB = async ()=>{
    try {
        const {connection} = await mongoose.connect(process.env.DATABASE_URL)
        const url = `${connection.host}:${connection.port }`
        console.log(colors.magenta.bold(`MongoDB Conectado en: ${url}`));
        
    } catch (error) {
        console.log(colors.red.bold(error.messsage));
        console.log(`Error al conectar con la Base de Datos`);
        exit(1)
        
    }
}