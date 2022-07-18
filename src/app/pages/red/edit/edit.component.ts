import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { redModel } from 'src/app/models/red.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  modalOpen = false;
  constructor( private router: Router) { }

  ngOnInit(): void {
    this.modalOpen = true
  }

  

  voltar(){
    this.modalOpen=false;
    this.router.navigate(["red"])

  }

}
