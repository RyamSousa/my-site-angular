import { ContentsModule } from './contents/contents.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ServiceGitUserService } from './services/service-git-user.service';
import { ServiceGitRepositoriesService } from './services/service-git-repositories.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    ContentsModule
  ],
  providers: [ServiceGitUserService, ServiceGitRepositoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
