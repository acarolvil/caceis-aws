import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMask, faX } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [],
  exports: [FontAwesomeModule ]
 
})
export class IconsModule {
  
    constructor(library: FaIconLibrary) {
   
      library.addIcons(faX);
  
  }
 }
