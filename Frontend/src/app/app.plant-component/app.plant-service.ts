import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from './app.plant-model';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private baseURL = "http://localhost:8050/plant"; // Your API base URL

  constructor(private httpClient: HttpClient) {}

  addPlant(plant: Plant): Observable<Plant> {
    return this.httpClient.post<Plant>(`${this.baseURL}/addPlant`, plant);
  }

  updatePlant(plant: Plant): Observable<Plant> {
    return this.httpClient.put<Plant>(`${this.baseURL}/updatePlant`, plant);
  }

  deletePlant(plantId: any): Observable<number> {
    return this.httpClient.delete<number>(`${this.baseURL}/deletePlant/${plantId}`);
  }

  viewPlantById(plantId: any): Observable<Plant> {
    return this.httpClient.get<Plant>(`${this.baseURL}/viewPlantById/${plantId}`);
  }

  viewPlantByName(commonName: string): Observable<Plant> {
    return this.httpClient.get<Plant>(`${this.baseURL}/viewPlantByName/${commonName}`);
  }

  viewAllPlants(): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>(`${this.baseURL}/viewAllPlants`);
  }

  viewAllPlantByType(typeOfPlant: string): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>(`${this.baseURL}/viewAllPlantsByType/${typeOfPlant}`);
  }

}
