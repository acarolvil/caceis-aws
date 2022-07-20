import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParceirosRoutingModule } from './parceiros-routing.module';
import { ParceirosComponent } from './parceiros.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ColumnFilter } from 'primeng/table';




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
    FontAwesomeModule,
    HttpClientModule,
    TableModule,
    PaginatorModule


  ],

  bootstrap: [ParceirosComponent],
})

export class ParceirosModule { }
