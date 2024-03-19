import { Component } from '@angular/core';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-erreurs',
  templateUrl: './erreurs.component.html',
  styleUrl: './erreurs.component.css'
})

export class ErreursComponent {
  constructor(public commandeService: CommandeService) {}

  removeFromCommande(box: any) {
    this.commandeService.removeItem(box);
  }

  notTooMany() {
    this.commandeService.notTooMany();
  }

  removeCommand() {
    this.commandeService.removeCommand();
  }
}