import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteService } from '../services/compte.service';
import { Compte } from '../interfaces/compte';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  titulaire: string | undefined;
  userAccounts: Compte[] = []; // Liste des comptes récupérés

  constructor(private router: Router, private route: ActivatedRoute, private compteService: CompteService) {}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params) => {
      const compteId = Number(params.get('id')); // Récupération de l'ID
      if (compteId) {
        this.loadAccount(compteId);
      }
    });
  }


  loadAccount(id: number): void {
    this.compteService.getCompteById(id).subscribe({
      next: (compte) => {
        console.log('Compte reçu :', compte);
        this.userAccounts = [compte]; // Assurez-vous que userAccounts est un tableau
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du compte :', err);
      },
    });
  }

  viewDetails(account: Compte): void {
    console.log('Afficher les détails pour :', account);
    // Naviguer vers la page de détails du compte avec le paramètre dynamique
    this.router.navigate([`/account-details/${account.id}`]); // Utilisation de `numeroCompte` comme paramètre
  }

  navigateToDeposit(compteId: number): void {
    this.router.navigate(['/deposit', compteId]);
  }

  
  navigateToVirement(compteId: number): void {
    this.router.navigate(['/transfer', compteId]);
  }

  navigateToTransfer(): void {
    this.router.navigate(['/transfer']);
  }
  refreshAccount(): void { 
    // Méthode pour rafraîchir les comptes après un dépôt 
    if (this.userAccounts.length > 0) {
       this.loadAccount(this.userAccounts[0].id);
       }
 
      }
}

