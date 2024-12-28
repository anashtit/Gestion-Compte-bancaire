import { Compte } from "./compte";

export interface Depot {
  id?: number; // Optionnel si non requis au moment de la création
  montant: number; // Correspond à Double en Java
  dateDepot?: string; // Optionnel, peut être un string représentant une date
  description?: string; // Correspond au champ description ajouté
  compteId: number; // Correspond à Long en Java
  compte?: Compte; // Optionnel, si nécessaire pour l'affichage des détails
}
