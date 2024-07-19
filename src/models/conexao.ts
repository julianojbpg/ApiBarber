import mysql from 'mysql2/promise';
import 'dotenv/config'




export const Conexao = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})

export  async function ConexaoComDB(){
    try {

        const connection = await Conexao.getConnection();

        

        connection.release();
      } catch (err) {
        console.log(`erro é: ${err}`);
      }
}
