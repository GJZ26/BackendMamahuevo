import { Sequelize } from "sequelize";

const connection = new Sequelize('coyol','root','',{
    host:'localhost',
    dialect: 'mysql'
})

try{
    await connection.authenticate();
    console.log("Se ha logrado conectar a la base de datos")
}catch(e){
    console.log("Imposible establecer conexion con la base de datos, erro:")
    console.error(e)
}

export default connection
