import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VirementService } from '../services/virement.service';
import { Virement } from '../interfaces/virement';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrl: './virement.component.css'
})
export class VirementComponent {

    montant: number | undefined  ;
    description: string = '';
    compteId: number = 0;
   numCompte : string ='';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private virementService: VirementService,
    private router: Router, private route: ActivatedRoute,) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.compteId = +params['id'];
      console.log('Compte ID:', this.compteId);
      //if (!isNaN(this.compteId)) {
       // this.loadCompteDetails(this.compteId);
      //} else {
        //console.error('Invalid compteId:', params['id']);
      //}
    });
 }

  // Méthode pour effectuer un virement
  effectuerVirement(): void {
    if (this.compteId && this.numCompte && this.montant && this.description) {
      // Logique pour effectuer le virement
      console.log('Formulaire soumis :', {
        compteId: this.compteId,
        numCompte: this.numCompte,
        montant: this.montant,
        description: this.description
      });
    } else {
      console.error('Le formulaire est incomplet');
    }
  }
  

  goBack(): void {
    window.history.back(); // Navigue en arrière dans l'historique de la page
  }

   transferHistory(): void {
     this.router.navigate(['/transferHistory', this.compteId]);
   }
}