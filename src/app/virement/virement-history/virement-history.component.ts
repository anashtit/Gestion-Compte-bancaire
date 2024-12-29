import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Virement } from '../../interfaces/virement';
import { VirementService } from '../../services/virement.service';

@Component({
  selector: 'app-virement-history',
  templateUrl: './virement-history.component.html',
  styleUrls: ['./virement-history.component.css']
})
export class VirementHistoryComponent implements OnInit {
  virements: Virement[] = [];
  errorMessage: string = '';
  compteId!: number;

  constructor(
    private virementService: VirementService,
    private route: ActivatedRoute
  ) {}

  
  ngOnInit(): void {
    this.compteId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.virementService.getAllVirements().subscribe(
      (data) => {
        // Afficher toutes les données reçues dans la console pour vérifier le contenu
        console.log('Données reçues de l\'API :', data);
        
        // Vérification des virements avec compteId spécifique
        const virementsSpecifiques = data.filter(virement => virement.compteId === 1);
console.log('Virements filtrés avec compteId 1 :', virementsSpecifiques);

        // Stocker les virements filtrés dans la variable pour l'affichage
        this.virements = virementsSpecifiques;
      },
      (error) => {
        console.error('Erreur lors de la récupération des virements :', error);
        this.errorMessage = 'Une erreur est survenue lors de la récupération des virements.';
      }
    );
  }
  

  // Méthode pour revenir à la page précédente
  goBack(): void {
    window.history.back();
  }
}
