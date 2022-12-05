import { Concessionaria } from "./concessionarias"
import { Automoveis } from "./automoveis"
export interface Alocacao{
    id : number,
    area : number,
    automovel:Automoveis,
    consession_ria:Concessionaria,
    quantidade: number,
}