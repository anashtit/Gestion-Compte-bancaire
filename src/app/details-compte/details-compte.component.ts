
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompteService } from '../services/compte.service';
//import { Compte } from "../app/interface/compte.interface";
import { Compte } from '../interfaces/compte';
@Component({
  selector: 'app-details-compte',
  templateUrl: './details-compte.component.html',
  styleUrl: './details-compte.component.css'
})
export class DetailsCompteComponent  implements OnInit {
  account: Compte | null = null; // Détails du compte
  accountNumber: string = ''; // Numéro du compte récupéré à partir de l'URL

  constructor(
    private route: ActivatedRoute,
    private compteService: CompteService
  ) {}

  ngOnInit(): void {
    // Récupérer le numéro de compte à partir des paramètres de l'URL
    this.route.params.subscribe(params => {
      this.accountNumber = params['id']; // 'id' correspond à votre paramètre dans la route
      this.loadAccountDetails(this.accountNumber); // Charger les détails du compte
    });
  }

  loadAccountDetails(accountNumber: string): void {
    this.compteService.getCompteByNumber(accountNumber).subscribe({
      next: (compte) => {
        this.account = compte; // Assignez les données du compte à la variable 'account'
        console.log('Compte reçu :', compte);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du compte :', err);
      }
    });
  }

  goBack(): void {
    window.history.back(); // Navigue en arrière dans l'historique de la page
  }
}
