import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Reposity from '../shared/models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceGitRepositoriesService {

  urlb: string;

  constructor(private http: HttpClient) { }

  readonly url = 'https://api.github.com/users/';

  async getRepositories(username: string): Promise<Reposity[]>{
    return this.http.get<Reposity[]>(`${this.url}${username}/repos`).toPromise();
  }
}
