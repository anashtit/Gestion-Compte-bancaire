import { Component } from '@angular/core';
import { Service1Service } from '../services/service1.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-accueille',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginForm: FormGroup;
  errorMessage: string | undefined;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private service: Service1Service
  ) {
    this.loginForm = this.fb.group({
      numeroCompte: ['', Validators.required],
      motDePasse: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const { numeroCompte, motDePasse } = this.loginForm.value;
  
      this.service.login(numeroCompte, motDePasse).subscribe({
        next: (response: User) => { // Typage explicite ici
          console.log('Réponse reçue du backend :', response);
      
          // Save user data in local storage
          localStorage.setItem('loggedInUser', JSON.stringify(response));
          const userId = response.id; // Maintenant TypeScript reconnaît 'id'
      
          // Navigation vers la page des comptes
          this.router.navigate(['/accounts', userId]);
        },
        error: (err) => {
          console.error('Erreur lors de la tentative de connexion :', err);
          this.errorMessage = err.status === 401
            ? 'Numéro de compte ou mot de passe incorrect.'
            : 'Une erreur s\'est produite. Veuillez réessayer.';
        }
      });
      
  
  
}
 }
 }