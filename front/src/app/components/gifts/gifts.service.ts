import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {

  constructor(
    protected http: HttpClient
  ) {}

  public listGifts(){ //filter by cat
        return this.http.get<any>('http://localhost:8099/api/gifts');
  }
}
