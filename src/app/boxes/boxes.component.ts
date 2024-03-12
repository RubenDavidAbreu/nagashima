import { Component, OnInit } from '@angular/core';
import { CamionService } from '../camion.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrl: './boxes.component.css'
})
export class BoxesComponent implements OnInit{
  constructor(public camions : CamionService) {}

  boxes:any[]=[];

  ngOnInit(): void {
      this.camions.camion().subscribe((data)=>{this.boxes=data});

  }    
}

