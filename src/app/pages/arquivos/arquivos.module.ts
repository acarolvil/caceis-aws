import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquivosComponent } from '../arquivos/arquivos.component';
import { CreateComponent } from './create/create.component';
import { ArquivosRoutingModule } from './arquivos-routing.module';
import { ListComponent } from './list/list.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
     ListComponent,
    ArquivosComponent,
    CreateComponent,
    ExcluirComponent,
    EditComponent,
   
  ],
  imports: [
    CommonModule,
    ArquivosRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],

  bootstrap:[
    ArquivosComponent,
  ]
})
export class ArquivosModule { }
