import express from 'express'
import { json } from 'express'
import router from './Routes'
import { Porta } from './@types/tipos'
import 'dotenv/config'
import { InserirNaDB,SelecionarTodosNaDB } from './models/db_barbeiro'
const app = express()

const conexao: Porta ={
    port:  process.env.PORT
}


async function testConnection() {
    const usuario={
        nome: 'Barbeiro ',
        telefone:'(xx) xxxxx-xxxx',
        email:'xxxxxxx@xxxx.com',
        mensalidade: 1,
        servicos: 2,
        agenda: 3,
        clientes: 4,
    }

    const {mensagem} = await InserirNaDB(usuario)
    console.log(mensagem)
}
async function Connection() {
   

    await SelecionarTodosNaDB()
   
}

// Connection()
// testConnection()


app.use(json())
app.use("/api",router)

app.listen(conexao.port, ()=>{
    console.log(`Servidor rodando na porta ${conexao.port}`)
})