import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = "https://jsonplaceholder.typicode.com/users/"

  constructor( private http: HttpClient) { }

  User() {
    return this.http.get(this.url);
  }

  viewUser(id: string) {
    return this.http.get(this.url + id);
  }
}
