import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planter } from './app.planter-model';

@Injectable({
  providedIn: 'root'
})
export class PlanterService {
  private baseURL = "http://localhost:8050/planter"; 

  constructor(private httpClient: HttpClient) {}

  addPlanter(planter: Planter): Observable<Planter> {
    return this.httpClient.post<Planter>(`${this.baseURL}/addPlanter`, planter);
  }

  updatePlanter(planter: Planter): Observable<Planter> {
    return this.httpClient.put<Planter>(`${this.baseURL}/updatePlanter`, planter);
  }
  deletePlanter(planterId: any): Observable<Planter> {
    return this.httpClient.delete<any>(`${this.baseURL}/deletePlanter/${planterId}`);
  }

  viewPlanterById(planterId: any): Observable<Planter> {
    return this.httpClient.get<Planter>(`${this.baseURL}/viewPlanterById/${planterId}`);
  }

  viewPlanterByShape(planterShape: string): Observable<Planter[]> {
    return this.httpClient.get<Planter[]>(`${this.baseURL}/viewPlanterByShape/${planterShape}`);
  }

  viewAllPlanters(): Observable<Planter[]> {
    return this.httpClient.get<Planter[]>(`${this.baseURL}/viewAllPlanters`);
  }

  viewPlanterByCostRange(minCost:any, maxCost: any): Observable<Planter[]> {
    return this.httpClient.get<Planter[]>(`${this.baseURL}/viewPlanterByCostRange/${minCost}/${maxCost}`);
  }
}