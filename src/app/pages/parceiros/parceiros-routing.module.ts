import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ParceirosComponent } from './parceiros.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'list', component: ListComponent, children: [
    { path: 'editar/:id', component: EditComponent}
  ]},
  { path: 'cadastrar', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParceirosRoutingModule { }
