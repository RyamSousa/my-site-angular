import User from 'src/app/shared/models/user.model';
import { ServiceGitService } from 'src/app/service/service-git.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private userService: ServiceGitService) { }

  ngOnInit(): void {
    this.getUser('RyamSousa');
}

async getUser(name: string): Promise<void>{
  try {
    this.user = await this.userService.getUser(name);
  } catch (error) {
    console.log(error);
  }
}

}
