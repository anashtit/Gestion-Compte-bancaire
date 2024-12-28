import { Depot } from "./depot";
import { User } from "./user";

export interface Compte {
  id: number;
  numeroCompte: string;
  solde: number;
  titulaire: string;
  user: User;  // L'utilisateur auquel appartient ce compte
  depots?: Depot[];  // Liste des depots  associés à ce compte

}
