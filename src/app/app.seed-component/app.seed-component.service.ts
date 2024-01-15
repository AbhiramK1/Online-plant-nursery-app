import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seed } from './app.seed-model';

@Injectable({
    providedIn: 'root'
  })
  export class SeedService {
    private baseURL = "http://localhost:8050/seed"; 
  
    constructor(private httpClient: HttpClient) {}
  
    addSeed(seed: Seed): Observable<Seed> {
      return this.httpClient.post<Seed>(`${this.baseURL}/addSeed`, seed);
    }
  
    updateSeed(seed: Seed): Observable<Seed> {
      return this.httpClient.put<Seed>(`${this.baseURL}/updateSeed`, seed);
    }
  
    deleteSeed(seedId: number): Observable<Seed> {
      return this.httpClient.delete<any>(`${this.baseURL}/deleteSeed/${seedId}`);
    }
  
    viewSeedById(seedId: any): Observable<Seed> {
      return this.httpClient.get<Seed>(`${this.baseURL}/viewSeedById/${seedId}`);
    }
  
    viewSeedByName(commonName: string): Observable<Seed[]> {
      return this.httpClient.get<Seed[]>(`${this.baseURL}/viewSeedByName/${commonName}`);
    }
  
    viewAllSeeds(): Observable<Seed[]> {
      return this.httpClient.get<Seed[]>(`${this.baseURL}/viewAllSeeds`);
    }
  
    viewAllSeedByType(typeOfSeed:string): Observable<Seed[]> {
      return this.httpClient.get<Seed[]>(`${this.baseURL}/viewAllSeedByType/${typeOfSeed}`);
    }
  
    
  }