export interface Porta{
    port: string | undefined
}

export interface ConexaoDB{
    database: string | undefined,
    username: string | undefined,
    password: string | undefined,
    host: string | undefined,
}

export interface Barbeiro{
    id?: number,
    nome: string,
    telefone:string,
    email:string,
    mensalidade:number,
    servicos:number,
    agenda:number,
    clientes:number,
}

export interface Retorno{
    resposta: boolean,
    mensagem: string,
}