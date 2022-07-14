import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquivosComponent } from '../arquivos/arquivos.component';
import { CreateComponent } from './create/create.component';
import { ArquivosRoutingModule } from './arquivos-routing.module';
import { ListComponent } from './list/list.component';
import { ExcluirComponent } from './excluir/excluir.component';

@NgModule({
  declarations: [
     ListComponent,
    ArquivosComponent,
    CreateComponent,
    ExcluirComponent,
   
  ],
  imports: [
    CommonModule,
    ArquivosRoutingModule,
    
  ]
})
export class ArquivosModule { }
