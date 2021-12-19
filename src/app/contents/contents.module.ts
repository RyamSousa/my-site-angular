import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    AboutComponent
  ]
})
export class ContentsModule { }
