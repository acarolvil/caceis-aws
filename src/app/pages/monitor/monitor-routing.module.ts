import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';

import { ListComponent } from './list/list.component';
import { MonitorComponent } from './monitor.component';

const routes: Routes =[
    // {path: '', component: MonitorComponent},
    {path: '', component: ListComponent, children:[
        {path: 'cadastrar', component: CreateComponent},
        
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MonitorRoutingModule { }