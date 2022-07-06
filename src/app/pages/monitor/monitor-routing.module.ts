import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MonitorComponent } from './monitor.component';

const routes: Routes =[
    {path: '', component: MonitorComponent},
    {path: 'list', component: ListComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MonitorRoutingModule { }