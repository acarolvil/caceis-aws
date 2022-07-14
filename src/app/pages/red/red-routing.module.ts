import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedComponent } from './red.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ExcluirComponent } from './excluir/excluir.component';

const routes: Routes =[
    {path: '', component: RedComponent},
    { path: 'list', component: ListComponent, children:[
        {path: 'cadastrar', component: CreateComponent},
        {path: 'excluir', component: ExcluirComponent}

    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RedRoutingModule { }