import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxesComponent } from './boxes/boxes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { PanierComponent } from './panier/panier.component';
import { RGPDComponent } from './rgpd/rgpd.component';


const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'boxes', component: BoxesComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'header', component: HeaderComponent, },
  { path: 'footer', component: FooterComponent, },
  { path: 'details', component: DetailsComponent, },
  { path: 'panier', component: PanierComponent, },
  { path: 'rgpd', component: RGPDComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
