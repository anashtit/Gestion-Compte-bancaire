import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../interfaces/compte';

@Injectable({
  providedIn: 'root',
})
export class CompteService {
  private apiUrl = 'http://localhost:8080/api/comptes';
  private apiCompteById = 'http://localhost:8080/api/comptes';

  constructor(private http: HttpClient) {}

  getAllComptes(): Observable<Compte[]> {
    return this.http.get<Compte[]>(this.apiUrl);
  }

  getUserAccounts(): Observable<Compte[]> 
  {
     return this.http.get<Compte[]>(this.apiCompteById);
     }

  getCompteById(id: number): Observable<Compte> {
    return this.http.get<Compte>(`${this.apiCompteById}/${id}`);
  }
  getCompteByNumber(accountNumber: string): Observable<Compte> {
    return this.http.get<Compte>(`${this.apiCompteById}/${accountNumber}`);
  }
  

  createCompte(compte: Compte): Observable<Compte> {
    return this.http.post<Compte>(this.apiUrl, compte);
  }

  updateCompte(id: number, compte: Compte): Observable<Compte> {
    return this.http.put<Compte>(`${this.apiUrl}/${id}`, compte);
  }

  deleteCompte(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
