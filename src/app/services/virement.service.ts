import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Virement } from '../interfaces/virement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VirementService {

    private apiUrl = 'http://localhost:8080/api/comptes'; // Remplace par l'URL de ton backend
    private apiAllVirements = 'http://localhost:8080/api/virements';

    constructor(private http: HttpClient) {}
  
    // Méthode pour effectuer un virement
    effectuerVirement(compteId: number, virement: Virement): Observable<any> {
      const url = `${this.apiUrl}/${compteId}/virements`;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
      return this.http.post<any>(url, virement, { headers });
    }
    

         // Récupérer tous les VIREMENTS
    getAllVirements():Observable<Virement[]>{

       return this.http.get<Virement[]>(this.apiAllVirements);
 
    }

     
}
