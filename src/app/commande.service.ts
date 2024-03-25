import { Injectable } from '@angular/core';
import { Commande, CommandeItem } from './commande';

@Injectable({
  providedIn: 'root',
})


export class CommandeService {
  commande: Commande = new Commande();

  constructor() {}

  getItems(): CommandeItem[] {
    return this.commande.items;
  }

  addItem(box: any) {
    if (this.getTotalQuantity() < 10) {
      const existingItem = this.commande.items.find((item) => item.box.idBox === box.idBox);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.commande.items.push(new CommandeItem(box, 1));
      }
    } else {
      this.commande.tooManyBoxesReached = true;
    }
  }

  removeItem(box: any) {
    const existingItem = this.commande.items.find((item) => item.box.idBox === box.idBox);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        const index = this.commande.items.indexOf(existingItem);
        if (index !== -1) {
          this.commande.items.splice(index, 1);
        }
      }
    }
  }

  removeCommand() {
    this.commande.items = [];
  }

  getTotalPrice(): any {
    const nbr: number = Number(
      this.commande.items
        .reduce((total, item) => total + item.box.price * item.quantity, 0)
        .toFixed(2)
    );
    if (nbr == 0) {
      return '00.00';
    }
    else{
      return nbr;
    }
  }

  getTotalQuantity(): number {
    return this.commande.items.reduce((total, item) => total + item.quantity, 0);
  }

  getItemQuantity(box: any): number {
    const existingItem = this.commande.items.find((item) => item.box.idBox === box.idBox);
    if (existingItem) {
      return existingItem.quantity;
    } else {
      return 0;
    }
  }

  notTooMany() {
    this.commande.tooManyBoxesReached = false;
  }
}
