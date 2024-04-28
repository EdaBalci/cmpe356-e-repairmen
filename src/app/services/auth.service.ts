import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/auth-response';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_key= "AIzaSyBxL-53r7sEsepS4odv_WEnBovdAUxJ0kI";
  
  
  url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyBxL-53r7sEsepS4odv_WEnBovdAUxJ0kI]"; 
  
  constructor(private http: HttpClient) { }

  register(email: string, password:string) {

    return this.http.post<AuthResponse>(this.url, {
      email: email,
      password: password,
      returnSecureToken: true
    });



  }

  login(email:string, password: string) {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }


}



