export interface Virement {
    compteId: number;
    id: number;
    numCompteDestinataire : string;
    montant :number;
    description :string;
    dateVirement : Date;
}
