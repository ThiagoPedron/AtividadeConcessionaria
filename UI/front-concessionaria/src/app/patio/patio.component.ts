import { Component, OnInit } from '@angular/core';
import { Alocacao } from '../interfaces/alocacoes';
import axios from 'axios';
import { Automoveis } from '../interfaces/automoveis';
import { Area } from '../interfaces/areas';
@Component({
  selector: 'app-patio',
  templateUrl: './patio.component.html',
  styleUrls: ['./patio.component.css']
})
export class PatioComponent implements OnInit {
  teste : Array<number> = [1,2,3,4,5,5,6,6,7]
  areaId: number = 0
  lista_areas : Array<Area> = []
  lista_locacao: Array<Alocacao> = []
  lista_automoveis: Array<Automoveis> = []
  automovel_venda: Automoveis | any

  
  constructor() {
   this.getAlocacao();
   this.lista_areas = [
    {'id':1,'quantidade':0},
    {'id':2,'quantidade':0},
    {'id':3,'quantidade':0},
    {'id':4,'quantidade':0},
    {'id':5,'quantidade':0},
    {'id':6,'quantidade':0},
    {'id':7,'quantidade':0},
    {'id':8,'quantidade':0},
    {'id':9,'quantidade':0},
    {'id':10,'quantidade':0},
    {'id':11,'quantidade':0},
   ]
  }

  ngOnInit(): void {
    console.log(this.teste)
  }

  chama_venda(id: number) {
    this.areaId = id

  }
  getAlocacao() {
    var config = {
      method: 'get',
      url: 'http://localhost:5224/Alocacao/alocacao/getAll',
      headers: {},
    };
    let instance = this;
    axios(config).then(function (response:any) {
      console.log(response.data);
      instance.lista_locacao = response.data
      instance.verificaAutomovelAlocacao()
      console.log(instance.lista_areas)
    });
  }
  verificaAutomovelAlocacao(){
    this.lista_locacao.forEach(element => {
       this.lista_areas.forEach(area => {
          if(area.id == element.area)
            area.quantidade +=1
       });
    });
  }
}