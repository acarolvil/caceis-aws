import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquivosComponent } from './arquivos.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';



const routes: Routes = [
  { path: '', component: ArquivosComponent },
  { path: 'list', component: ListComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArquivosRoutingModule { }