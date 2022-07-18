import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { redModel } from 'src/app/models/red.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  faTimes = faTimes;
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
