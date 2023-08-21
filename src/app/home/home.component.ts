import { Component, Input } from '@angular/core';
import { Vehicle } from '../vehicle.model';
import { ModelService } from '../services/api/models/model.service';
import { Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModelsComponent } from '../models/models.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  modalRef: MdbModalRef<ModelsComponent> | null = null;
  imgUrl: string = 'https://ev-database.continuousnet.com/';
  page = 1;
  makeList:any
  selectedMake: string | null = null; 
  @Input()
  car!: Vehicle;
  models: Vehicle[] = [];
  models_F: Vehicle[] = [];
  constructor(
    private service: ModelService,
    private router: Router,
  ) {}
  @Input()
  product: Vehicle = {};
  ngOnInit(): void {
    this.service.getAllModels().subscribe({
      next: (data) => {
        this.makeList = [...new Set(data.map(item => item.vehicleMake))];
        console.log(this.makeList);
        
        this.models = data;
        this.models_F = data;
      },
    });
  }
  set recherche(x: string) {
    this.page = 1;
    this.models_F = this.models.filter(
      (a) =>
        a.vehicleModel?.toLocaleLowerCase().indexOf(x.toLocaleLowerCase()) != -1
    );
  }
  openModal(id: string | undefined) {
      this.router.navigate(['/models-details', id]);
  }
  

  filterModelsByMake(make: string) {
    this.selectedMake = make;
    this.page = 1;
    this.models_F = this.models.filter((model) =>
      model.vehicleMake?.toLocaleLowerCase() === make.toLocaleLowerCase()
    );
  }

  // Clear the selected make filter
  clearFilter() {
    this.selectedMake = null;
    this.page = 1;
    this.models_F = this.models;
  }
}
