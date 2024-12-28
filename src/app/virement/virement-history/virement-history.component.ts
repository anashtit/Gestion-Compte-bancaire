import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VirementService } from '../services/virement.service';

import { Virement } from '../interfaces/virement';

@Component({
  selector: 'app-virement-history',
  
  templateUrl: './virement-history.component.html',
  styleUrl: './virement-history.component.css'
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
        this.virements = data.filter(virement => virement.compteId === this.compteId);
      },
      (error) => {
        console.error('Erreur lors de la récupération des virements :', error);
        this.errorMessage = 'Une erreur est survenue lors de la récupération des virements.';
      }
    );
  }

  goBack(): void {
    window.history.back();
  }
}








