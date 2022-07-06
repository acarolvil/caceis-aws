import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquivosComponent } from './pages/arquivos/arquivos.component';

import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { MonitorComponent } from './pages/monitor/monitor.component';

const pessoaModule = () => import('./pages/parceiros/parceiros.module').then(res => res.ParceirosModule)
const arquivosModule = () => import('./pages/arquivos/arquivos.module').then( res => res.ArquivosModule)
const monitorModule = () => import ('./pages/monitor/monitor.module').then( res => res.MonitorModule)
const redModule = () => import ('./pages/red/red.module').then(res => res.RedModule)
const routes: Routes = [
  { path: 'parceiros', loadChildren: pessoaModule },
  { path: 'arquivos', loadChildren: arquivosModule},
  { path: 'monitor', loadChildren: monitorModule},
  {path: 'red', loadChildren: redModule},



  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
