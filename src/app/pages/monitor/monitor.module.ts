import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorComponent } from './monitor.component';
import { MonitorRoutingModule } from './monitor-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';






@NgModule({
  declarations: [
    ListComponent,
    MonitorComponent,
 
   
    
    
    
 
  ],
  imports: [
    CommonModule,
    MonitorRoutingModule
  ]
})
export class MonitorModule { }
