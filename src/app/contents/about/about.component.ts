import { Component, Input, OnInit } from '@angular/core';
import { ServiceGitUserService } from 'src/app/services/service-git-user.service';
import User from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() user: User;

  username: string = '';
  loading: boolean = false;
  repositories = '';

  constructor(private userService: ServiceGitUserService) { }

  ngOnInit(): void {
      this.getUser('RyamSousa');
  }

  async getUser(name: string): Promise<void>{
    try {
      this.loading = true;
      this.user = await  this.userService.getUser(name);
      this.repositories = this.user.repos_url;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      alert("Usuário não encontrado");
    }
  }

  async fetch(){
      await this.getUser(this.username);
      this.notFoundAtributes();
  }

  notFoundAtributes(){
    this.user.name ? this.user.name : this.user.name = 'Nome não encontrado';
    this.user.bio ? this.user.bio : this.user.bio = 'Sem informações';
    this.user.email ? this.user.email : this.user.email = 'E-mail não encontrado';
  }


  getRepositories(): string{
    return this.repositories;
  }
}
