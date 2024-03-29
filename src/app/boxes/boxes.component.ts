import { Component, OnInit } from '@angular/core';
import { CamionService } from '../camion.service';
import { CommandeService } from '../commande.service';
import { DetailsBoxService } from '../details-box.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})

export class BoxesComponent implements OnInit {
  constructor(public camions: CamionService, private commandeService: CommandeService, private detailsBoxService: DetailsBoxService) {}

  boxes: any[] = [];

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

  getBoxes(box: any){
    return box;
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

  createDetailsBox(box: any) {
    this.detailsBoxService.createDetailsBox(box);
  }
}