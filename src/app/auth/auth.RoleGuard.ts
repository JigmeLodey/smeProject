import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthState} from './auth.state.service';
import {map} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({providedIn: 'root'})

export class AuthRoleGuard implements CanActivate {
  constructor(private state: AuthState, private route: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('role');

    if (!this.state.authChecker() || token !== 'admin') {
      this.route.navigate(['./user']);
      return false;
    } else {
      return true;
    }
  }

}

