import { AboutComponent } from './../about/about.component';
import { Component, OnInit } from '@angular/core';
import Reposity from 'src/app/shared/models/repository.model';
import { ServiceGitRepositoriesService } from 'src/app/services/service-git-repositories.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  repository: Reposity;
  url: string;

  constructor(private user: AboutComponent, private repositories: ServiceGitRepositoriesService) { }

  ngOnInit(): void {
    console.log("Ryam Sousa1");
    this.loadRepositories();
    console.log("Ryam Sousa3");
  }

  async loadRepositories(){
    this.url = await this.user.getRepositories();
    this.repository = this.repositories.getRepositories(this.url);
    console.log("Ryam Sousa"+this.repository);
  }

}
