import { Component } from '@angular/core';
import { DetailsBoxService, DetailsBoxItem } from '../details-box.service';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private detailsBoxService: DetailsBoxService, private commandeService: CommandeService) {}

  getDetailsBox():  DetailsBoxItem {
    return this.detailsBoxService.getDetailsBox();
  }

  addItem(box: any) {
    this.commandeService.addItem(box);
  }
}
