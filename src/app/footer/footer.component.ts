import { Component } from '@angular/core';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  constructor(private commandeService: CommandeService) {}

  commande() {
    return this.commandeService.commande;
  }

  addToCommande(box: any) {
    this.commandeService.addItem(box);
  }

  removeFromCommande(box: any) {
    this.commandeService.removeItem(box);
  }

  getTotalPrice(): number {
    return this.commandeService.getTotalPrice();
  }
}