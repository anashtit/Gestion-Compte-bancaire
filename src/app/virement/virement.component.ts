import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VirementService } from '../services/virement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {
  virementForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  compteId: number | undefined;

  constructor(
    private fb: FormBuilder,
    private virementService: VirementService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.compteId = +params['id']; // Assurez-vous que l'ID est bien récupéré
      console.log('Compte ID:', this.compteId);
    });

    // Initialiser le formulaire avec le compteId récupéré
    this.virementForm = this.fb.group({
      compteId: [this.compteId, Validators.required], // Inclure l'ID du compte dans le formulaire
      numCompte: ['', Validators.required],
      montant: [null, [Validators.required, Validators.min(1)]],
      description: ['', Validators.required]
    });
  }

  // Méthode pour effectuer un virement
  effectuerVirement(): void {
    if (this.virementForm.valid) {
      const virementData = this.virementForm.value;
      console.log('Formulaire soumis :', virementData);

      // Ajoutez l'ID du compte dans l'URL de l'API
      this.virementService.effectuerVirement(this.compteId!, virementData).subscribe(
        (response) => {
          console.log('Virement effectué avec succès :', response);
          this.successMessage = 'Virement effectué avec succès !';
        },
        (error) => {
          console.error('Erreur lors du virement :', error);
          this.errorMessage = 'Erreur lors du virement, veuillez réessayer.';
        }
      );
    } else {
      console.error('Le formulaire est incomplet');
      this.errorMessage = 'Veuillez remplir tous les champs';
    }
  }

  goBack(): void {
    window.history.back();
  }

  transferHistory(): void {
    this.router.navigate(['/transferHistory' , this.compteId]);
  }
}
