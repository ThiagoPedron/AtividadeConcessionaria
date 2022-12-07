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

  areaId: number = 0
  lista_areas : Array<Area> = []
  lista_locacao: Array<Alocacao> = []
  lista_automoveis: Array<Automoveis> = []
  automovel_venda: Automoveis | any
  constructor() {
   this.getAllAreas();
  }

  ngOnInit(): void {

  }


  chama_venda(id: number) {
    this.areaId = id

  }
  getAllAreas() {
    var config = {
      method: 'get',
      url: 'http://localhost:5224/Alocacao/alocacao/getAll',
      headers: {},
    };
    let instance = this;
    axios(config).then(function (response:any) {
      console.log(response.data);
      instance.lista_locacao = response.data;
      instance.lista_locacao.forEach(locacao => {
        
      });
    });
  }
}