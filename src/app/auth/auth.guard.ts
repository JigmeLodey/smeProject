import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthState} from './auth.state.service';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
  constructor(private state: AuthState, private route: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.state.authChecker()) {
      return true;
    } else {
      this.route.navigate(['/auth']);
    }
  }

}

