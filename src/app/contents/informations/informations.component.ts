import { Component, Input, OnInit, Output } from '@angular/core';
import { ServiceGitUserService } from 'src/app/services/service-git-user.service';
import User from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {

  @Input() @Output() user: User;

  username: string = '';
  loading: boolean = false;

  constructor(private userService: ServiceGitUserService) { }

  ngOnInit(): void {
    this.getUser('RyamSousa');
  }

  async getUser(name: string): Promise<void>{
    try {
      this.loading = true;
      this.user = await  this.userService.getUser(name);
      this.loading = false;
    } catch (error) {
      this.loading = false;
      alert("Usuário não encontrado");
    }
  }

  @Output()
  async fetch(){
      await this.getUser(this.username);
      this.notFoundAtributes();
  }

  notFoundAtributes(){
    this.user.name ? this.user.name : this.user.name = 'Nome não encontrado';
    this.user.bio ? this.user.bio : this.user.bio = 'Sem informações';
    this.user.email ? this.user.email : this.user.email = 'E-mail não encontrado';
  }
}
