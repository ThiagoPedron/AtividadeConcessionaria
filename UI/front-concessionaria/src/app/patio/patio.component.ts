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

  teste  = [
    {
      name: 'Nishant',
      age: 25
    },
    {
      name: 'Shailesh',
      age: 45
    },
    {
      name: 'Abhishek',
      age: 36
    },
    {
      name: 'Akshay',
      age: 65
    },
    {
      name: 'Ashish',
      age: 12
    },
    {
      name: 'Uday',
      age: 31
    },
    {
      name: 'Mayank',
      age: 45
    },
    {
      name: 'Raju',
      age: 74
    },
  ]
  areaId: number = 0
  lista_areas : Array<Area> = []
  lista_locacao: Array<Alocacao> = []
  lista_automoveis: Array<Automoveis> = []
  automovel_venda: Automoveis | any
  constructor() {
   this.getAllAreas();
   
  }

  ngOnInit(): void {
    console.log(this.teste)
  }


  chama_venda(id: number) {
    this.areaId = id

  }
  getAllAreas() {
    // var config = {
    //   method: 'get',
    //   url: 'http://localhost:5224/Alocacao/alocacao/getAll',
    //   headers: {},
    // };
    // let instance = this;
    // axios(config).then(function (response:any) {
    //   console.log(response.data);
    //   instance.lista_locacao = response.data;
    //   instance.lista_locacao.forEach(locacao => {
        
    //   });
    // });
  }
}