import { Component, Input, OnInit } from '@angular/core';
import { ServiceGitService } from 'src/app/service/service-git.service';
import User from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() user: User;

  username: string = '';

  constructor(private userService: ServiceGitService) { }

  ngOnInit(): void {
      this.getUser('RyamSousa');
  }

  async getUser(name: string): Promise<void>{
    try {
      this.user = await  this.userService.getUser(name);
    } catch (error) {
      console.log(error);
    }
  }

  async fetch(){
      this.getUser(this.username);
  }
}
