import { Component } from '@angular/core';
import { DetailsBoxService, DetailsBoxItem } from '../details-box.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private detailsBoxService: DetailsBoxService) {}

  getDetailsBox():  DetailsBoxItem {
    return this.detailsBoxService.getDetailsBox();
  }
}
