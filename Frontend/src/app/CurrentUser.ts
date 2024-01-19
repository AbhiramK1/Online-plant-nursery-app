import { Plant } from "./app.plant-component/app.plant-model";
import { Planter } from "./app.planter-component/app.planter-model";
import { Seed } from "./app.seed-component/app.seed-model";

export class CurrentUser{
  private static plantCost : any;
  private static planterCost : any;
  private static seedCost : any;
  private static userType:string;
  private static id:any;
  private static planter:Planter;
  private static plant:Plant;
  private static planterId: any;
  private static planterHeight: any;
  private static planterCapacity: any;
  private static planterHoles: any;
  private static planterColor: any;
  private static planterShape: any;
  private static planterStock: any;
 private static seed:Seed;

 static setSeed(seed: Seed): void {
  this.seed = seed;
}

static getSeed(): Seed {
  return this.seed;
}
  static setPlant(plant: Plant): void {
    this.plant = plant;
  }
 
  static getPlant(): Plant {
    return this.plant;
  }
  
  static setPlanter(planter: Planter): void {
    this.planter = planter;
  }
 
  static getPlanter(): Planter {
    return this.planter;
  }
 
  static getPlanterId(): any {
    return this.planterId;
}

static setPlanterId(value: any) {
    this.planterId = value;
}

// Getter and Setter for planterHeight
static  getPlanterHeight(): any {
    return this.planterHeight;
}

static setPlanterHeight(value: any) {
    this.planterHeight = value;
}
static getplanterCapacity(): any {
    return this.planterCapacity;
}

static setplanterCapacity(value: any) {
    this.planterCapacity = value;
}

// Getter and Setter for planterHoles
static getplanterHoles(): any {
    return this.planterHoles;
}

static setplanterHoles(value: any) {
    this.planterHoles = value;
}

// Getter and Setter for planterColor
static getplanterColor(): any {
    return this.planterColor;
}

static setplanterColor(value: any) {
    this.planterColor = value;
}

// Getter and Setter for planterShape
static getplanterShape(): any {
    return this.planterShape;
}

static setplanterShape(value: any) {
    this.planterShape = value;
}

// Getter and Setter for planterStock
static getplanterStock(): any {
    return this.planterStock;
}

static setplanterStock(value: any) {
    this.planterStock = value;
}

// Getter and Setter for planterCost
static getplanterCost(): any {
    return this.planterCost;
}

static setplanterCost(value: any) {
    this.planterCost = value;
}


  static setUserType(str: string): void {
    this.userType = str;
  }
 
  static getUserType(): string {
    return this.userType;
  }
 
  static setPlantCost(cost: any): void {
    this.plantCost = cost;
  }
  static getId(): any {
    return this.id;
  }
 
  static setId(id: any): void {
    this.id = id;
  }
 
  static getPlantCost(): any {
    return this.plantCost;
  }
 
  static setPlanterCost(cost: any): void {
    this.planterCost = cost;
  }
 
  static getPlanterCost(): any {
    return this.planterCost;
  }
 
  static setSeedCost(cost: any): void {
    this.seedCost = cost;
  }
 
  static getSeedCost(): any {
    return this.seedCost;
  }
}