import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { ListComponent } from './list/list.component';
import { MonitorComponent } from './monitor.component';

const routes: Routes =[
    {path: '', component: MonitorComponent},
    {path: 'list', component: ListComponent, children:[
        {path: 'cadastrar', component: CreateComponent},
        {path: 'excluir', component: ExcluirComponent}
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MonitorRoutingModule { }