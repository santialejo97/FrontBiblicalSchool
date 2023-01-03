import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  RequestLogin,
  RequestRegister,
  ResponseAuth,
  ResponseValidToken,
  User,
} from '../interfaces/auth.interfaces';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = environment.urlBase;
  private user!: User;

  constructor(private http: HttpClient) {}

  get getUser() {
    return this.user;
  }

  get getToken(): string {
    return localStorage.getItem('token')!;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  login(auth: RequestLogin): Observable<ResponseAuth> {
    return this.http.post<ResponseAuth>(`${this.url}/users/login`, auth).pipe(
      tap(({ token, ok, user }) => {
        if (ok) this.setToken(token);
        this.user = user;
      })
    );
  }

  register(data: RequestRegister): Observable<ResponseAuth> {
    return this.http.post<ResponseAuth>('', data).pipe(
      tap(({ token, ok, user }) => {
        if (ok) this.setToken(token);
        this.user = user;
      })
    );
  }

  validToken(): Observable<boolean> {
    return this.http
      .get<ResponseValidToken>(
        `${this.url}/validaccess/valid?token=${this.getToken}`
      )
      .pipe(
        tap(({ newToken }) => {
          this.setToken(newToken);
        }),
        catchError(({ ok }) => of(ok))
      );
  }
}
