import { Compte } from "./compte";

export interface User {
   
  id: number;
  numeroCompte: string;
  motDePasse: string;
  comptes?: Compte[];  // Liste des comptes associés à l'utilisateur
}
