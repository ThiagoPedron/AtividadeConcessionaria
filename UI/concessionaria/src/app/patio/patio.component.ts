import { Component, OnInit } from '@angular/core';
import { Alocacao } from '../interfaces/alocacoes';
import axios from 'axios';
import { Automoveis } from '../interfaces/automoveis';
import { Area } from '../interfaces/areas';
import { Cliente } from '../interfaces/clientes';
import {Concessionaria} from '../interfaces/concessionarias'

@Component({
  selector: 'app-patio',
  templateUrl: './patio.component.html',
  styleUrls: ['./patio.component.css']
})
export class PatioComponent implements OnInit {
  teste: Array<number> = [1, 2, 3, 4, 5, 5, 6, 6, 7]
  areaId: number = 0
  lista_areas: Array<Area> = []
  lista_locacao: Array<Alocacao> = []
  lista_automoveis: Array<Automoveis> = []
  lista_clientes : Array<Cliente>=[]
  lista_concessionaria:Array<Concessionaria>=[]
  automovel_venda: Automoveis = {'id':0,'modelo':'','preO':0}

  constructor() {
    this.getAlocacao()
  }

  ngOnInit(): void {
    console.log(this.teste)
    this.lista_areas = [
      { id: 1, quantidade: 0 },
      { id: 2, quantidade: 0 },
      { id: 3, quantidade: 0 },
      { id: 4, quantidade: 0 },
      { id: 5, quantidade: 0 },
      { id: 6, quantidade: 0 },
      { id: 7, quantidade: 0 },
      { id: 8, quantidade: 0 },
      { id: 9, quantidade: 0 },
      { id: 10, quantidade: 0 },
      { id: 11, quantidade: 0 },
    ]
  }

  chama_venda(id: number) {
    this.areaId = id
    this.lista_automoveis = []
   
    
    this.lista_locacao.forEach(locacao => {
      if (locacao.area == id && locacao.quantidade >0) {
        var config = {
          method: 'get',
          url: ' http://localhost:5224/Automoveis/automoveis/id?id='+locacao.automovel,
          headers: {},
        };
        let instance = this;
        axios(config).then(function (response: any) {
         instance.lista_automoveis.push(response.data)
         console.log(instance.lista_automoveis);
         
        });
      }
    });


  }
  getAlocacao() {
    var config = {
      method: 'get',
      url: 'http://localhost:5224/Alocacao/alocacao/getAll',
      headers: {},
    };
    let instance = this;
    axios(config).then(function (response: any) {
      console.log(response.data);
      instance.lista_locacao = response.data
      instance.verificaAutomovelAlocacao()
      console.log(instance.lista_areas)
    });
  }
  verificaAutomovelAlocacao() {
    this.lista_locacao.forEach(element => {
      this.lista_areas.forEach(area => {
        if (area.id == element.area)
          area.quantidade += 1
      });
    });
  }
  selecionaVenda(automovelId : number){
    this.lista_automoveis.forEach(element => {
      if(element.id == automovelId)  this.automovel_venda = element
    });
    this.getCleintes()
    this.getConcessionaria()
  }



  getCleintes(){
    this.lista_clientes = []
    var config = {
      method: 'get',
      url: 'http://localhost:5224/Cliente/getAll',
      headers: {},
    };
    let instance = this;
    axios(config).then(function (response: any) {
      console.log(response.data);
     instance.lista_clientes = response.data
    });
  }
  getConcessionaria(){
    this.lista_concessionaria = []
    this.lista_locacao.forEach(locacao => {
      if (locacao.area == this.areaId && locacao.automovel == this.automovel_venda.id) {
        console.log(locacao.concessionRia);
        
        var config = {
          method: 'get',
          url: ' http://localhost:5224/Concessionaria/concessionaria/id?id='+locacao.concessionRia,
          headers: {},
        };
        let instance = this;
        axios(config).then(function (response: any) {
         instance.lista_concessionaria.push(response.data)
         console.log(instance.lista_concessionaria);
         
        });
      }
    });
  }
  finalizaVenda(){
    let concessionariaId = Number((document.getElementById('concessionaria') as HTMLInputElement).value)
    console.log(this.areaId,concessionariaId,this.automovel_venda.id);
  
    console.log(this.lista_locacao);
    
    this.lista_locacao.forEach(element => {
      if(element.concessionRia == concessionariaId && element.area == this.areaId && this.automovel_venda.id == element.automovel){
        
        console.log(element);
        var config = {
          method: 'get',
          url: ' http://localhost:5224/Alocacao/alocacao/vendaId?id='+element.id,
          headers: {},
        };
        let instance = this;
        axios(config).then(function (response: any) {
         alert(response.data)
         window.location.reload();
         
        });
        
      }
    });
  }


}