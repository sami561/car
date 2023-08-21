import { Component, Inject, Input, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle.model';
import { ModelService } from '../services/api/models/model.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ModelsComponent } from '../models/models.component';

@Component({
  selector: 'app-models-details',
  templateUrl: './models-details.component.html',
  styleUrls: ['./models-details.component.css'],
})
export class ModelsDetailsComponent implements OnInit {
  imgUrl: string = 'https://ev-database.continuousnet.com/';
  id:any
  models: Vehicle[] = [];
  images?: string[] = [];
  voiture: Vehicle| undefined; 
  index=0

  constructor(
    private service: ModelService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.ar.snapshot.paramMap.get('id')
    console.log(this.id)
    this.ar.params.subscribe((params: any) => {
  
      if (this.id) {
        this.service.getAllModels().subscribe({
          next: (data) => {
            this.voiture = data.find(item => item.id === this.id);
            console.log(this.voiture);
            
            this.images=this.voiture?.images
            console.log(" this.images", this.images);
            
          },
        });
      }
    });
  }
  met(s: string) {
    if (this.images) {
      if (s === "+" && this.index < this.images.length - 1) {
        this.index++;
      } else if (s === "+" && this.index === this.images.length - 1) {
        this.index = 0; 
      } else if (s === "-" && this.index > 0) {
        this.index--;
      } else if (s === "-" && this.index === 0) {
        this.index = this.images.length - 1;
      }
      console.log(this.images[this.index]);
    }
  }
  

}
