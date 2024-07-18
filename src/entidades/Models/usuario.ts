import IUser from "../types/IUser";

export  class Usuario implements IUser {
    private _id: number
    private _nome: string
    private _email: string
    private _password: string

    constructor(nome: string, email: string, password: string, id: number) {
        this._email = email;
        this._nome = nome;
        this._password = password
        this._id = id
    }
    get id(): number {
        return this._id
    }

    set id(id: number) {
        this._id = id
    }
    get nome(): string {
        return this._nome
    }

    set nome(nome: string) {
        this._nome = nome
    }

    get email() {
        return this._email
    }

    set email(email: string) {
        this._email = email
    }

    get password() {
        return this._password
    }

    set password(password: string) {
        this._password = password
    }

}


export const user: IUser  = new Usuario('hugo','hugo@mail.com','123',1)

