import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Commande {
  items: CommandeItem[] = [];
  tooManyBoxesReached: boolean = false;

  getItems(): CommandeItem[] {
    return this.items;
  }

  addItem(box: any) {
    if (this.getTotalQuantity() < 10) {
      const existingItem = this.items.find(item => item.box === box);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push(new CommandeItem(box, 1));
      }
    } else {
      this.tooManyBoxesReached = true;
    }
  }

  removeItem(box: any) {
    const existingItem = this.items.find(item => item.box === box);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        const index = this.items.indexOf(existingItem);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      }
    }
  }

  removeCommand() {
    this.items = [];
  }

  getTotalPrice(): number {
    return Number(this.items.reduce((total, item) => total + (item.box.price * item.quantity), 0).toFixed(2));
  }

  getTotalQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getItemQuantity(box: any): number {
    const existingItem = this.items.find(item => item.box === box);
    if (existingItem) {
      return existingItem.quantity;
    }
    else {
      return 0;
    }
  }

  notTooMany() {
    this.tooManyBoxesReached = false;
  }
}

export class CommandeItem {
  constructor(public box: any, public quantity: number) {}
}

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

  removeCommand() {
    this.commande.items = [];
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

  notTooMany() {
    this.commande.tooManyBoxesReached = false;
  }
}