import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatListModule,
    Material.MatProgressBarModule
  ],
  exports:[
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatListModule,
    Material.MatProgressBarModule
  ]
})
export class MaterialModule { }
