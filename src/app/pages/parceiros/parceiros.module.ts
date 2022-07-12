import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParceirosRoutingModule } from './parceiros-routing.module';
import { ParceirosComponent } from './parceiros.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ExcluirComponent } from './excluir/excluir.component';


@NgModule({
  declarations: [
    ListComponent,
    ParceirosComponent,
    CreateComponent,
    EditComponent,
    ExcluirComponent,
  ],
  
  imports: [
    CommonModule,
    ParceirosRoutingModule,
    FormsModule,
  ]
})

export class ParceirosModule { }
