import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

  isLoginMode: boolean =true;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  handleAuth(form: NgForm) {
    if(!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let AuthResponse: Observable<AuthResponse>;

    if(this.isLoginMode) {
      AuthResponse = this.authService.login(email, password);
    
    } else {
      AuthResponse = this.authService.register(email, password);
    }
    AuthResponse.subscribe(response=> {
      console.log(response);
    });

  }
}
