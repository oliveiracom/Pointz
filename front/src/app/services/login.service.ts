import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient) {}

  addNewUser(data: IUser) {
    return this.http.post<IUser>('http://localhost:8000/users', data);
  }
}
