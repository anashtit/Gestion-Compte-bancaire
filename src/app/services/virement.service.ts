import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Virement } from '../interfaces/virement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VirementService {

    private apiUrl = 'http://localhost:8080/api/virements';
  compteId: any;

    constructor(private http: HttpClient) {}
  
    // Méthode pour effectuer un virement
    // effectuerVirement(compteId: number, virement: Virement): Observable<any> {
    //   const url = `${this.apiUrl}/${compteId}/virements`;
    //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    //   return this.http.post<any>(url, virement, { headers });
    // }
    effectuerVirement(compteId: number, virementData: any): Observable<any> {
      const url = `http://localhost:8080/api/comptes/${compteId}/virements`; 
      return this.http.post(url, virementData);
    }
    
    

  
  // Récupérer les virements avec ou sans filtre
  // Récupérer tous les virements (sans filtre côté serveur)
  getAllVirements(): Observable<Virement[]> {
    return this.http.get<Virement[]>(this.apiUrl);
  }

     
}
