import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedComponent } from './red.component';
import { RedRoutingModule } from './red-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ExcluirComponent } from './excluir/excluir.component';


@NgModule({
  declarations: [
    RedComponent,
    ListComponent,
    CreateComponent,
    ExcluirComponent

    
  ],
  imports: [
    CommonModule,
    RedRoutingModule,
  ]
})
export class RedModule { }
