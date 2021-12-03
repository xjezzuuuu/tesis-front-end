import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {
    
  }
  canActivate(): Observable<boolean> | boolean {
    return this._authService.validateToken().pipe(
      tap(valid => {
        if(!valid){
          this._router.navigateByUrl('/auth/login')
        }
      })
    );
  }
}
