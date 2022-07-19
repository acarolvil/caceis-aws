import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { monitorModel } from 'src/app/models/monitor.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  modalOpen = false;
  constructor( private router: Router) { }

  ngOnInit(): void {
    this.modalOpen = true
  }

  

  voltar(){
    this.modalOpen=false;
    this.router.navigate(["monitor-de-transferencias"])

  }

}
