import { Planter } from "../app.planter-component/app.planter-model";

export class Plant {
    plantId?: any;
  plantHeight: any;
  bloomTime: any;
  typeOfPlant: any;
  commonName: any;
  exposure:any;
  flowerColor:any;
  temperature: any;
  description: any;
  plantsStock: any;
  plantCost: any;
  planter!:Planter;
  plant!:Plant;

  getPlant(): any {
    return this.plant;
  }

  setPlant(plant: any) {
    this.plant = plant;
  }
  getPlantId(): any {
    return this.plantId;
  }

  setPlantId(value: any) {
    this.plantId = value;
  }

  getPlantHeight(): any {
    return this.plantHeight;
  }

  setPlantHeight(value: any) {
    this.plantHeight = value;
  }

  getBloomTime(): any {
    return this.bloomTime;
  }

  setBloomTime(value: any) {
    this.bloomTime = value;
  }

  getTypeOfPlant(): any {
    return this.typeOfPlant;
  }

  setTypeOfPlant(value: any) {
    this.typeOfPlant = value;
  }

  getCommonName(): any {
    return this.commonName;
  }

  setCommonName(value: any) {
    this.commonName = value;
  }

  getExposure(): any {
    return this.exposure;
  }

  setExposure(value: any) {
    this.exposure = value;
  }

  getFlowerColor(): any {
    return this.flowerColor;
  }

  setFlowerColor(value: any) {
    this.flowerColor = value;
  }

  getTemperature(): any {
    return this.temperature;
  }

  setTemperature(value: any) {
    this.temperature = value;
  }

  getDescription(): any {
    return this.description;
  }

  setDescription(value: any) {
    this.description = value;
  }

  getPlantsStock(): any {
    return this.plantsStock;
  }

  setPlantsStock(value: any) {
    this.plantsStock = value;
  }

  getPlantCost(): any {
    return this.plantCost;
  }

  setPlantCost(value: any) {
    this.plantCost = value;
  }

  }
  