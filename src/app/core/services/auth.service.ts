import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { AuthRequest, AuthResponse } from '../models/auth.interface';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL: string = `${environment.apiURL}/auth`;
  _user!: User;

  constructor(
    private _http: HttpClient,
    private _toastService: HotToastService
  ) {}

  login(email: string, password: string): Observable<AuthResponse> {
    const url: string = `${this.BASE_URL}/login`;
    const body: AuthRequest = { email, password };

    return this._http.post<AuthResponse>(url, { email, password }).pipe(
      tap((res) => {
        if (res.access_token) {
          localStorage.setItem('access_token', res.access_token);
          this._user = {
            id: parseInt(res.id),
            first_name: res.first_name,
            last_name: res.last_name,
          };
        }
      }),
      this._toastService.observe({
        loading: 'Iniciando sesion...',
        success: 'Inicio de session correcto!',
        error: 'El email o contraseña son incorrectos.',
      })
    );
  }

  register(user: User) {
    const url: string = `${this.BASE_URL}/register`;
    const body = user;

    return this._http.post<AuthResponse>(url, body).pipe(
      tap((res) => {
        if (res.access_token) {
          localStorage.setItem('access_token', res.access_token);
          this._user = {
            id: parseInt(res.id),
            first_name: res.first_name,
            last_name: res.last_name,
          };
        }
      }),
      this._toastService.observe({
        loading: 'Registrando...',
        success: 'Registro correcto!',
        error: 'El email ya se encuentra en uso.',
      })
    );
  }

  validateToken(): Observable<boolean> {
    const url: string = `${this.BASE_URL}/renew`;

    return this._http.get<AuthResponse>(url).pipe(
      map((res) => {
        localStorage.setItem('access_token', res.access_token!);
        this._user = {
          id: parseInt(res.id),
          first_name: res.first_name,
          last_name: res.last_name,
        };

        return true;
      }),
      catchError((err) => of(false))
    );
  }

  isLogged(): boolean {
    return !!localStorage.getItem('access_token')
  }

  logout() {
    localStorage.removeItem('access_token');
  }
}
