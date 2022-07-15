import { Component, OnInit } from '@angular/core';
import { arquivosModel as ArquivosModel } from 'src/app/models/arquivos.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: ArquivosModel[]=[];
  selected?: ArquivosModel;

  constructor() { 
    this.list=[
      {id: 2, nome: 'Exem', permitida: 'true'},
      {id: 2, nome: 'Exem', permitida: 'true'},
      {id: 2, nome: 'Exem', permitida: 'true'},
      {id: 2, nome: 'Exem', permitida: 'true'},
      {id: 2, nome: 'Exem', permitida: 'true'},

    ]
  }

  ngOnInit(): void {
  }

  selecionar(item: ArquivosModel){
    if (item == this.selected) {
this.selected = undefined
    } else {
      this.selected = item;

    }
  }
}

