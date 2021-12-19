import User from '../shared/models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceGitUserService {

  constructor(private http: HttpClient) { }

  readonly url = 'https://api.github.com/users/';

  async getUser(name: string): Promise<User>{
    return this.http.get<User>(`${this.url}${name}`).toPromise();
  }
}
