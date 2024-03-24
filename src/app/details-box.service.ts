import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DetailsBoxItem {
  box: any = [];
  constructor() {
    this.box = [];
  }
}

export class DetailsBoxService {
  DetailsBoxItem = new DetailsBoxItem();

  constructor() {}

  createDetailsBox(box: any[]) {
    this.DetailsBoxItem.box = box;
  }

  getDetailsBox():  DetailsBoxItem {
    return this.DetailsBoxItem;
  }
}