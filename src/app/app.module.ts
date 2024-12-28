import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import du module FormsModule
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Service1Service } from './services/service1.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//import { routes } from './app.routes';  // Import routes from app.routes.ts
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CompteComponent } from './compte/compte.component';
import { DetailsCompteComponent } from './details-compte/details-compte.component';
import { DepotComponent } from './depot/depot.component';
import { VirementComponent } from './virement/virement.component';
import { DepotHistoryComponent } from './depot-history/depot-history.component';
import { CommonModule } from '@angular/common';
import { VirementHistoryComponent } from './virement/virement-history/virement-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompteComponent,
    DetailsCompteComponent,
   DepotComponent ,
   VirementComponent,
   DepotHistoryComponent,
    VirementHistoryComponent,
   
 ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Required for making HTTP calls
    ReactiveFormsModule,
    RouterModule.forRoot(routes), // Ensure RouterModule is initialized with routes
    MatCardModule,
    FormsModule, // Ajoute FormsModule ici
    CommonModule, // Importez CommonModule ici

    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  providers: [Service1Service, provideAnimationsAsync()],  // Provide your service here
  bootstrap: [AppComponent]
})
export class AppModule { }
