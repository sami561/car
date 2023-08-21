import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private baseUrl: string = 'https://ev-database.continuousnet.com/models.json';

  constructor(
    private http: HttpClient
  ) { }

  getAllModels(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.baseUrl);
  }

}
