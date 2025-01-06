import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-responet.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(name: string, password: string) {
    return this.httpClient.post<LoginResponse>("/login", { name, password }).pipe(
      // Torna a chamada síncrona
      tap((value) => {
        sessionStorage.setItem("auto-token", value.token);
        sessionStorage.setItem("name", value.name);
      })
    )
  }
}
