import { Injectable } from '@angular/core';
import { DetailsBoxItem } from './details-box-item';

@Injectable({
  providedIn: 'root'
})

export class DetailsBoxService {
  DetailsBoxItem: DetailsBoxItem = new DetailsBoxItem();

  constructor() {}

  createDetailsBox(box: any[]) {
    this.DetailsBoxItem.box = box;
  }

  getDetailsBox():  DetailsBoxItem {
    return this.DetailsBoxItem;
  }
}