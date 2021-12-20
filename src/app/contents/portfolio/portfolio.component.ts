import User from 'src/app/shared/models/user.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import Reposity from 'src/app/shared/models/repository.model';
import { ServiceGitRepositoriesService } from 'src/app/services/service-git-repositories.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnChanges {

  @Input()
  user: User;

  splitDate: string[] = [];

  repositories: Reposity[];

  constructor(private serviceRepositories: ServiceGitRepositoriesService) {
  }

  ngOnInit(): void {
    this.loadRepositories('RyamSousa');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadRepositories(this.user.login);
  }

  async loadRepositories(name: string){
    this.repositories = await this.serviceRepositories.getRepositories(name);
    this.repositories.forEach((r) => {
      r.created_at = this.formatDate(r.created_at);
    });
  }

  formatDate(date: string): string{
    this.splitDate = date.split('T');
    date = this.splitDate[0];

    return date;
  }

}
