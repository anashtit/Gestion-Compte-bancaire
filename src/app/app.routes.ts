import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { DetailsCompteComponent } from './details-compte/details-compte.component';
import { DepotComponent } from './depot/depot.component';
import { VirementComponent } from './virement/virement.component';
import { DepotHistoryComponent } from './depot-history/depot-history.component';
import { VirementHistoryComponent } from './virement/virement-history/virement-history.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Default route to AccueilleComponent
 
  //{ path: 'accounts', component: CompteComponent },
  { path: 'accounts/:id', component: CompteComponent },
  { path: 'account-details/:id', component: DetailsCompteComponent },

  // { path: 'account-details', component: AccountDetailsComponent },
  { path: 'deposit/:id', component: DepotComponent } ,// `id` correspond au compte.id
  { path: 'depotHistory/:id', component: DepotHistoryComponent } ,// `id` correspond au compte.id

  { path: 'accounts/:id/deposits', component: DepotComponent },

  { path: 'transfer/:id', component: VirementComponent },
  { path: 'transferHistory/:id', component: VirementHistoryComponent },

  // { path: 'transfer', component: TransferComponent },
  // { path: '**', redirectTo: 'login' }
];
