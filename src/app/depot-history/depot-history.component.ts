import { Component, OnInit, Input } from '@angular/core';
import { DepotService } from '../services/depot.service';
import { Depot } from '../interfaces/depot';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-depot-history',
  templateUrl: './depot-history.component.html',
  styleUrls: ['./depot-history.component.css']
})
export class DepotHistoryComponent implements OnInit {
  //@Input() compteId!: string; // Numéro de compte (passé en paramètre)
 // depots: any[] = []; // Liste des dépôts récupérés

  depots: Depot[] = []; // Utiliser Depot directement
  errorMessage: string = '';

  compteId!: number;
  constructor(private depotService: DepotService,private route: ActivatedRoute
  ) {}


  
  ngOnInit(): void {
    this.compteId = Number(this.route.snapshot.paramMap.get('id'));
  
    this.depotService.getAllDepots().subscribe(
      (data) => {
        this.depots = data.filter(depot => depot.compteId === this.compteId);
      },
      (error) => console.error(error)
    );
  }
  
  
  goBack(): void {
    window.history.back(); // Navigue en arrière dans l'historique de la page
  }
}
