import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ParceirosModel } from '../models/parceiros.model';


export interface Parceiros {
  id: number ;
  nome: string ;
  codigo: string ;
  autenticacaoId: number;
  conexaoId: number;
  conexaoHost: any;
  conexaoPorta: any;
  usuario: string ;
  senha: string ;
  senhaPrivada: string;
  chavePrivada: any;
  dataDaCriacao: any;
  dataDaAlteracao: any;
  autenticacao: string;
}
@Injectable({
  providedIn: 'root'
})
export class ParceirosService {

  list: Parceiros[] = [];
  constructor(private http: HttpClient) {
    
  }
  
  
  getParceiros() {
    return this.http.get<Parceiros[]>('assets/showcase/resources/data/parceiros.json',
    {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).pipe(map(res => {
        this.list = res;
        return res;
    }))

  }
}
