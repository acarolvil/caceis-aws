import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {
  
  modalOpen = false 
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.modalOpen = true
  }

  voltar(){
    this.modalOpen = true;
    this.router.navigate(["cadastro-de-parceiros"])
  }

}
