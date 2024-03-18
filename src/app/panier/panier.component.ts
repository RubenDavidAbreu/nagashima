import { Component } from '@angular/core';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  constructor(private commandeService: CommandeService) {}
  boxes: any[] = [];

  getItems(): any[] {
    return this.commandeService.getItems();
  }

  addToCommande(box: any) {
    this.commandeService.addItem(box);
  }

  removeFromCommande(box: any) {
    this.commandeService.removeItem(box);
  }

  getItemQuantity(box: any): number {
    return this.commandeService.getItemQuantity(box);
  }

  getTotalPrice(): number {
    return this.commandeService.getTotalPrice();
  }
}
