import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './parts/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { IconsModule } from './icons/icons.module';
import {TableModule} from 'primeng/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { PrimeNGConfig } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';










@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
  
    AppRoutingModule,
    IconsModule,
    FormsModule,
 
    HttpClientModule,
    TableModule,
    PaginatorModule,
    BrowserAnimationsModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
