import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AboutComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule
  ],
  exports: [
    AboutComponent,
    PortfolioComponent
  ]
})
export class ContentsModule { }
