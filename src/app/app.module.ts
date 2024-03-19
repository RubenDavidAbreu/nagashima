import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxesComponent } from './boxes/boxes.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { PanierComponent } from './panier/panier.component';
import { RGPDComponent } from './rgpd/rgpd.component';
import { CommandeService } from './commande.service';
import { ErreursComponent } from './erreurs/erreurs.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxesComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    PanierComponent,
    ErreursComponent,
    RGPDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CommandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
