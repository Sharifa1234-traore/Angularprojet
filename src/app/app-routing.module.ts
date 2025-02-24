import { InscriptionComponent } from './inscription/inscription.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ConnexionComponent } from './connexion/connexion.component';



const routes: Routes = [
  {path: '', component:PageComponent},
  {path: 'inscription', component:InscriptionComponent},
  {path: 'connexion', component:ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
