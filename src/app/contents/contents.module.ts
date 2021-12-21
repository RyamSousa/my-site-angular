import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationsComponent } from './informations/informations.component';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    InformationsComponent,
    PortfolioComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule
  ],
  exports: [
    InformationsComponent,
    PortfolioComponent,
    AboutComponent
  ]
})
export class ContentsModule { }
