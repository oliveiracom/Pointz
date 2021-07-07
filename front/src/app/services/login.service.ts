import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    protected http: HttpClient
  ) {}

  public addNewUser(data: IUser):Observable<IUser> {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
      balance: 5000,
    }
    return this.http.post<IUser>('http://localhost:8099/api/users', body);
  }

  public validateUser(data:any){
    return this.http.post<any>('http://localhost:8099/api/auth', data);
  }
}
