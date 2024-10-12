import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('btywwdbhhergupwbzmzv','u8vblxxi7hexlaq4','F5DuhhPs59VBZYGvJ2aG',{
    host:'btywwdbhhergupwbzmzv-mysql.services.clever-cloud.com',
    dialect:'mysql'
}
)

const testConnection = async()=>{
    try{
        await sequelize.authenticate();
        console.log("connection has been stablished successfully")

    }catch(error) {
        console.log("unable to connect database :", error)
    }
}

// sync


export const dbConnection = async()=>{
    try{
        await sequelize.sync({alter: true, force: false});
        console.log("connection has been stablished successfully")

    }catch(error) {
        console.log("unable to connect database :", error)
    }
}


