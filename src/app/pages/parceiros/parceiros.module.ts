import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParceirosRoutingModule } from './parceiros-routing.module';
import { ParceirosComponent } from './parceiros.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    ListComponent,
    ParceirosComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ParceirosRoutingModule
  ]
})

export class ParceirosModule { }
