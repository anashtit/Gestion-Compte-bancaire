import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  // Import HttpClient for making HTTP requests
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';  // Import the User interface

@Injectable({
  providedIn: 'root' // This ensures the service is available application-wide
})
export class Service1Service {

  private apiUrl = 'http://localhost:8080/api/users';
  private apiLogin = 'http://localhost:8080/api/user/login'; // Point de connexion backend



  constructor(private http: HttpClient) { }

  
  // Appel API pour créer un utilisateur
  createUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, user);
  }


  // login(numeroCompte: string, motDePasse: string): Observable<any> { 
  //   return this.http.post(this.apiLogin, { numeroCompte, motDePasse });
  // }
  
  // login(numeroCompte: string, motDePasse: string) {
  //   const loginData = { numeroCompte, motDePasse };
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.http.post(this.apiLogin, loginData, { headers, withCredentials: true });
  // }

  login(numeroCompte: string, motDePasse: string): Observable<User> {
    return this.http.post<User>(this.apiLogin, { numeroCompte, motDePasse });
  }

}
