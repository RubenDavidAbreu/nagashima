import { Component } from '@angular/core';
import { CommandeService } from '../commande.service';

export class CommandeItem {
  constructor(public box: any, public quantity: number) {}
}

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

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  constructor(private commandeService: CommandeService) {}

  get commande() {
    return this.commandeService.commande;
  }

  addToCommande(box: any) {
    this.commandeService.addItem(box);
  }

  removeFromCommande(box: any) {
    this.commandeService.removeItem(box);
  }
}