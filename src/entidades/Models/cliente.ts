import ICliente from "../types/ICliente";
import IUser from "../types/IUser";

export default class Cliente implements ICliente{
    private _id:number
    private _nickName:string
    private _usuarioId:number
    private _password:string    

    constructor(id:number, nickName:string, usuarioId:number,password:string){
        this._id = id
        this._nickName = nickName
        this._usuarioId = usuarioId
        this._password = password
    }
    get id():number{
        return this._id
    }

    set id(id:number){
        this._id = id
    }
    get nickName():string{
        return this.nickName
    }

    set nickName(nickName:string){
        this._nickName = nickName
    }

    get usuarioId():number{
        return this.usuarioId
    }
    set usuarioId(usuarioId:number){
        this.usuarioId = usuarioId
    }

    get password():string{
        return this._password
    }
    set password(password:string){
        this._password = password
    }
}