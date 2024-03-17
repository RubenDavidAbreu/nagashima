import { Component, OnInit } from '@angular/core';
import { CamionService } from '../camion.service';

export class CommandeItem {
  constructor(public box: any, public quantity: number) {}
}

export class Commande {
  items: CommandeItem[] = [];
  tooManyBoxesReached: boolean = false; // Déplacez la propriété ici

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

  notTooMany() {
    this.tooManyBoxesReached = false;
  }

  removeItem(box: any) {
    const existingItem = this.items.find(item => item.box === box);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1; // Décrémenter la quantité
      } else {
        const index = this.items.indexOf(existingItem);
        if (index !== -1) {
          this.items.splice(index, 1); // Supprimer complètement si la quantité est 1
        }
      }
    }
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.box.price * item.quantity), 0);
  }

  getTotalQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }
}

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
  constructor(public camions: CamionService) {}

  boxes: any[] = [];
  commande: Commande = new Commande();

  ngOnInit(): void {
    this.camions.camion().subscribe((data) => {
      this.boxes = data;
    });
  }

  getFlavorClasses(box: any): string {
    let flavorClasses = '';
    for (let flavor of box.flavor) {
      flavorClasses += `${flavor.name} `;
    }
    return flavorClasses.trim();
  }

  addToCommande(box: any) {
    this.commande.addItem(box);
  }

  removeFromCommande(box: any) {
    this.commande.removeItem(box);
  }
}
