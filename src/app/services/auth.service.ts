import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  RequestLogin,
  ResponseAuth,
  User,
} from '../interfaces/auth.interfaces';
import { Observable, catchError, map, tap } from 'rxjs';
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
}
