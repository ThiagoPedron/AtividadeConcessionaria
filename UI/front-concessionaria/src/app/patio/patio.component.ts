import { Component, OnInit } from '@angular/core';
import { Alocacao } from '../interfaces/alocacoes';
import axios from 'axios';
import { Automoveis } from '../interfaces/automoveis';
@Component({
  selector: 'app-patio',
  templateUrl: './patio.component.html',
  styleUrls: ['./patio.component.css']
})
export class PatioComponent implements OnInit {

  areaId: number = 0
  lista_locacao: Array<Alocacao> = []
  lista_automoveis: Array<Automoveis> = []
  automovel_venda: Automoveis | any
  constructor() {
   this.teste();
  }

  ngOnInit(): void {

  }


  chama_venda(id: number) {
    this.areaId = id

  }
  // getAutomoveis() {
  //   var axios = require('axios');

  //   var config = {
  //     method: 'get',
  //     url: 'http://localhost:5224/Cliente/teste',
  //     headers: {}
  //   };

  //   axios(config)
  //     .then(function (response:any) {
  //       if (typeof(response)!= undefined) 
  //         console.log(JSON.stringify(response));
  //     })
  //     .catch(function (error:any) {
  //       if (typeof(error)!= undefined) 
  //       console.log(error);
  //     });


  // }

  teste() {
    var config = {
      method: 'get',
      url: 'http://localhost:7240/setor/all',
      headers: {},
    };
    let instance = this;
    axios(config).then(function (response: any) {
      console.log(response.data);
    });
  }
}