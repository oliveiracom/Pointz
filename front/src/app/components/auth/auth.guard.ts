import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
constructor(
  protected login: LoginService
) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if(this.login.session){
        return true
      }
    return false;
  }
}
