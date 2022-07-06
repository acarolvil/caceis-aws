import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ParceirosComponent } from './parceiros.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'list', component: ListComponent},
  { path: 'cadastrar', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParceirosRoutingModule { }
