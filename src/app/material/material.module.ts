import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatSelectModule
  ],
  exports:[
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatSelectModule
  ]
})
export class MaterialModule { }
