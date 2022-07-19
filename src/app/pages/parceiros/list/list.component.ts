import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParceirosModel } from 'src/app/models/parceiros.model';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';




@Injectable()

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})







export class ListComponent implements OnInit {
  cols: any[]

  
  list: ParceirosModel[] = [];
  constructor(private http: HttpClient) {
    this.list = [
      { id: 1, nome:'Auth', autenticacao: 'Auth',  codigo: '123', conexaoHost: 'www.conexao', conexaoPorta:'98ab', usuario:'plent', senha:'ngh89', senhaPrivada:'aaa',chavePrivada:'45435plent', dataDaCriacao:'11/2/12', dataDaAlteracao:'11/4/12', autenticacaoId:1, conexaoId: 1},
      { id: 2, nome:'Outh', autenticacao: 'Outh', codigo: '546',  conexaoHost: 'www.blank', conexaoPorta:'049ad', usuario:'blank', senha:'mhg09', senhaPrivada:'aaa',chavePrivada:'8948blank', dataDaCriacao:'2/2/14', dataDaAlteracao:'23/6/14', autenticacaoId:1, conexaoId: 1},
      { id: 3, nome:'Marh', autenticacao: 'Marh', codigo: '459',  conexaoHost: 'www.cland', conexaoPorta:'194ac', usuario:'cland', senha:'pdsh34', senhaPrivada:'kokaasahs',chavePrivada:'4975cland', dataDaCriacao:'2/10/20', dataDaAlteracao:'9/7/20', autenticacaoId:1, conexaoId: 1},
      { id: 4,nome:'Laik',  autenticacao: 'Laik', codigo: '987',  conexaoHost: 'www.larry', conexaoPorta:'874cfg', usuario:'larry', senha:'nhj87', senhaPrivada:'aaa',chavePrivada:'8490larry', dataDaCriacao:'3/5/20', dataDaAlteracao:'26/7/20', autenticacaoId:1, conexaoId: 1},
      { id: 5,nome:'Munth', autenticacao: 'Munth', codigo: '234',  conexaoHost: 'www.mund', conexaoPorta:'8548as', usuario:'mund', senha:'ad974', senhaPrivada:'aaa',chavePrivada:'4535mund', dataDaCriacao:'2/1/22', dataDaAlteracao:'2/4/22', autenticacaoId:1, conexaoId: 1},
    ];

    this.cols=[
      {field:'oi', header:'id'},
      {field:'oi', header:'nome'},
      {field:'oi', header:'autenticação'},
      {field:'oi', header:'código'},
      {field:'oi', header:'conexao host'},
      {field:'', header:'conexao porta'},
      {field:'', header:' usuário'},
      {field:'', header:'senha'},
      {field:'', header:'senha privada'},
      {field:'', header:'chave privada'},
      {field:'', header:'data da crição'},
      {field:'', header:'data da alteração'},
      

    ]
   
  }
 

  ngOnInit(): void {
   
    
   
  }

   

 

}
