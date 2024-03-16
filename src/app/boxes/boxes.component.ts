import { Component, OnInit } from '@angular/core';
import { CamionService } from '../camion.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
  constructor(public camions: CamionService) {}

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
}
