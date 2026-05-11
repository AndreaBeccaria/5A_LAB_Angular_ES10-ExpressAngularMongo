import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginRequest } from '../../models/student.model';
import { Auth } from '../../services/auth';

@Component({
  selector: 'login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  credentials: LoginRequest = {username:'user',password:'pwd'};
  errorMessage="";
  loading = false;

  constructor(private auth:Auth,private router:Router) {
    if(this.auth.isLoggedIn())
      this.router.navigate(['/students']);
  }

  onSubmit():void{
    this.errorMessage="";
    this.loading=true;
    this.auth.login(this.credentials).subscribe({
      next: (response) => {
        this.loading=false;
        if(response.token)
          this.router.navigate(['/students']);
        else
          this.errorMessage = response.msg || "Credenziali non valide";
      },
      error: (err) => {
        this.loading=false;
        this.errorMessage="Errore di connessione al server";
      }
    });
  }
}
