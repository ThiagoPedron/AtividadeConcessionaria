import { Component, OnInit } from '@angular/core';
import { Alocacao } from '../interfaces/alocacoes';
import { Automoveis } from '../interfaces/automoveis';
@Component({
  selector: 'app-patio',
  templateUrl: './patio.component.html',
  styleUrls: ['./patio.component.css']
})
export class PatioComponent implements OnInit {

  areaId : number = 0
  lista_locacao : Array<Alocacao> = []
  automovel_venda : Automoveis | any
  constructor() { 
    
  }

  ngOnInit(): void {
    // for (let i = 0; i < 11; i++) {
    //   this.lista_locacao.push({
    //     id : i,
    //     area : i,
    //     automovel: 
    //     {
    //       id: i,
    //       modelo:"carro "+ i,
    //       preco:1200+1
    //     }
          
    //     }
    //     consession_ria: {
    //       id: i,
    //       modelo:"carro "+ i,
    //       preco:1200+1
    //     },
    //     quantidade: number,

    //   })
      
    // }
  }


  chama_venda(id: number){
    this.areaId = id

  }
}
