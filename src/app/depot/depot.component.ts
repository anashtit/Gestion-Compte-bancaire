import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteService } from '../services/compte.service';
import { DepotService } from '../services/depot.service';
import { Compte } from '../interfaces/compte';
import { Depot } from '../interfaces/depot';
import { CompteComponent } from '../compte/compte.component';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
  depositForm!: FormGroup;
  compteId!: number;
  compte!: Compte;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private compteService: CompteService,
    private depotService: DepotService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.compteId = +params['id'];
      console.log('Compte ID:', this.compteId);
      if (!isNaN(this.compteId)) {
        this.loadCompteDetails(this.compteId);
      } else {
        console.error('Invalid compteId:', params['id']);
      }
    });

    this.depositForm = this.fb.group({
      compteId: [{ value: this.compteId, disabled: true }, Validators.required],
      numeroCompte: new FormControl({ value: '', disabled: true }),
      montant: [null, [Validators.required, Validators.min(1)]],
      description: ['']
    });
  }

  loadCompteDetails(compteId: number): void {
    console.log('Loading details for compteId:', compteId);
    this.compteService.getCompteById(compteId).subscribe({
      next: (compte) => {
        console.log('Compte details loaded:', compte);
        this.compte = compte;
        this.depositForm.patchValue({
          numeroCompte: compte.numeroCompte,
          compteId: compte.id
        });
      },
      error: (err) => {
        console.error('Erreur lors du chargement des détails du compte :', err);
      }
    });
  }
  submitDeposit(): void {
    if (this.depositForm.valid) {
      const depositData: Depot = {
        compteId: this.compteId,
        montant: this.depositForm.get('montant')?.value,
        description: this.depositForm.get('description')?.value,
        dateDepot: new Date().toISOString().split('T')[0]
      };
  
      this.depotService.addDepot(depositData).subscribe({
        next: (response) => {
          console.log('Dépôt effectué avec succès :', response);
          // Rafraîchir les données du compte
          this.compteService.getCompteById(this.compteId).subscribe({
            next: (compte) => {
              this.compte = compte;
              this.router.navigate(['/accounts', this.compteId]);
              // Rafraîchir les comptes après un dépôt réussi
              const compteComponent = new CompteComponent(this.router, this.route, this.compteService);
              compteComponent.refreshAccount();
            },
            error: (err) => {
              console.error('Erreur lors de la récupération du solde mis à jour :', err);
            }
          });
        },
        error: (error) => {
          console.error('Erreur lors du dépôt :', error);
          alert('Une erreur est survenue lors du dépôt.');
        }
      });
    } else {
      console.log('Le formulaire n\'est pas valide.');
    }
  }
  
  cancelDeposit(): void {
    this.router.navigate(['/accounts', this.compteId]);
  }
  goBack(): void {
    window.history.back(); // Navigue en arrière dans l'historique de la page
  }
  DepotHistory(): void {
    this.router.navigate(['/depotHistory', this.compteId]);
  }
}

