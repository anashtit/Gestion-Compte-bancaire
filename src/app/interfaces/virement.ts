export interface Virement {
    compteId: number;
    numCompteDestinataire : string;
    montant :number;
    description :string;
    dateVirement : Date;
}
