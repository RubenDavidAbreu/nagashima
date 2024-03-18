import { Injectable } from '@angular/core';
import { Commande, CommandeItem } from './footer/footer.component';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  commande: Commande = new Commande();

  constructor() {}

  getItems(): CommandeItem[] {
    return this.commande.getItems();
  }

  addItem(box: any) {
    this.commande.addItem(box);
  }

  removeItem(box: any) {
    this.commande.removeItem(box);
  }

  getTotalPrice(): number {
    return this.commande.getTotalPrice();
  }

  getTotalQuantity(): number {
    return this.commande.getTotalQuantity();
  }

  getItemQuantity(box: any): number {
    return this.commande.getItemQuantity(box);
  }
}
