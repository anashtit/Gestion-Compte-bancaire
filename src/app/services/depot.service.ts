import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Depot } from '../interfaces/depot';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  private apiUrl = 'http://localhost:8080/api/depots';
  private apiDepotHistory = 'http://localhost:8080/api/depots/depotHistory'; // URL de l'API backend

  constructor(private http: HttpClient) {}

  // Méthode pour ajouter un dépôt
  addDepot(depot: Depot): Observable<Depot> {
    return this.http.post<Depot>(this.apiUrl, depot); // Pas de '/add'
  }

      // Récupérer tous les dépôts
  getAllDepots(): Observable<Depot[]> {
    return this.http.get<Depot[]>(this.apiUrl);
  }

  // getDepotHistoryByCompteId(compteId: number): Observable<Depot[]> {
  //   return this.http.get<Depot[]>(`${this.apiDepotHistory}/${compteId}`);
  // }
  
  getDepotHistoryByCompteId(compteId: number): Observable<Depot[]> {
    return this.http.get<Depot[]>(`${this.apiUrl}/depotHistory/${compteId}`);
  }
  

}
