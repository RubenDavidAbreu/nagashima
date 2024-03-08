import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  constructor(public api: HttpClient) { 
  }
  public camion(): Observable <any> {
    return this.api.get('http://localhost:3000/boxes');
  }
}
