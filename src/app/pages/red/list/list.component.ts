import { Component, OnInit } from '@angular/core';
import { redModel } from 'src/app/models/red.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: redModel []= []
  constructor() { 
    this.list=[
      { id:'1' , codClienteFrom:'566ds' , codClienteTo:'dsaf32' ,  prefixo:'asd' , palavraChave1:'arpz' , palavraChave2:'ouas',observacoes:'x' },
      { id:'2' , codClienteFrom:'5469d' ,codClienteTo:'dsaf32' ,  prefixo:'fez' , palavraChave1:'safg' , palavraChave2:'oues', observacoes:'x' },
      { id:'3' , codClienteFrom:'566ds' , codClienteTo:'dsaf32' ,  prefixo:'ten' , palavraChave1:'fsaf' , palavraChave2:'ouis', observacoes:'x' },
      { id:'4' , codClienteFrom:'566ds' , codClienteTo:'dsaf32' ,  prefixo:'pro' , palavraChave1:'gds' , palavraChave2:'ouus',observacoes:'x' },
      { id:'5' , codClienteFrom:'5469d' , codClienteTo:'dsaf32' ,  prefixo:'fal' , palavraChave1:'1err' , palavraChave2:'ouvs',  observacoes:'x' },
      { id:'6' , codClienteFrom:'5469d' , codClienteTo:'dsaf32' ,  prefixo:'ped' , palavraChave2:'wtwe' , palavraChave1:'ouis', observacoes:'x' },
   ]
 }
 
  ngOnInit(): void {
  }

}
