import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Reposity from '../shared/models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceGitRepositoriesService {

  constructor(private http: HttpClient) { }

  async getRepositories(url: string): Promise<Reposity>{
    return this.http.get<Reposity>(`${url}`).toPromise();
  }
}
