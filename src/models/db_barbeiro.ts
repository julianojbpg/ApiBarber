import { RowDataPacket } from "mysql2"
import { Barbeiro, Retorno } from "../@types/tipos"
import {Conexao} from "./conexao"

export async function InserirNaDB(user:Barbeiro):Promise<Retorno>{

    try {
        const {nome,telefone,email,mensalidade,servicos,agenda,clientes} = user
        const sql = 'INSERT INTO barbeiro (nome,telefone,email,mensalidade,servicos,agenda,clientes) VALUES (?,?,?,?,?,?,?)'
        const value = [nome,telefone,email,mensalidade,servicos,agenda,clientes]

        await Conexao.execute(sql,value)

        return {resposta: true, mensagem: 'Barbeiro cadastrado com sucesso!'}

      } catch (err) {

        return {resposta: false, mensagem: `Erro ao cadastrar Barbeiro! ${err}`}
      }
}

export async function SelecionarTodosNaDB():Promise<Barbeiro[] | null>{
    
    try {
        
        const sql = 'SELECT * FROM barbeiro'
        const [result] = await Conexao.execute<RowDataPacket[]>(sql)
        console.log(result)
         return result as Barbeiro[]

      } catch (err) {

         return null
      }
}