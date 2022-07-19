import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ParceirosModel as ParceiroModel } from 'src/app/models/parceiros.model';
import { TipoAutenticacao } from 'src/app/models/tipo-autenticacao.model';
import { TipoConexao } from 'src/app/models/tipo-conexao.model';
import { ParceirosModule } from '../parceiros.module';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  modalOpen = false;
  

  tipoConexao:TipoConexao[] = [
    { id: 1, nome: "Passiva" },
    { id: 2, nome: "Ativa" }
  ]

  tipoAutenticacao:TipoAutenticacao[] = [
    { id: 1, nome: "Senha" },
    { id: 2, nome: "Chave Pública e Privada" }
  ]
  
  parceiro:ParceiroModel=new ParceiroModel

  constructor(
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    this.modalOpen = true;
    console.log(this.parceiro)
  }

  send(form: NgForm) {
    console.log('parceiro  ', this.parceiro)
    console.log('form  ', form)
  }

  voltar(){
    this.modalOpen = false;
    this.router.navigate(["cadastro-de-parceiros"])
  }

}

