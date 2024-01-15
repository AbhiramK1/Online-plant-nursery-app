import { Planter } from "../app.planter-component/app.planter-model";

export class Seed{
  seedId: any;
  commonName: any;
  bloomTime: any;
  watering: any;
  difficultyLevel: any;
  temperature: any;
  typeOfSeed: any;
  description: any;
  stock: any;
  cost: any;
  seedsPerPacket: any;   
  planter!:Planter;
  seed!:Seed;
  getSeedId(): any {
    return this.seedId;
  }

  setSeedId(value: any) {
    this.seedId = value;
  }

  getCommonName(): any {
    return this.commonName;
  }

  setCommonName(value: any) {
    this.commonName = value;
  }

  getBloomTime(): any {
    return this.bloomTime;
  }

  setBloomTime(value: any) {
    this.bloomTime = value;
  }

  getWatering(): any {
    return this.watering;
  }

  setWatering(value: any) {
    this.watering = value;
  }

  getDifficultyLevel(): any {
    return this.difficultyLevel;
  }

  setDifficultyLevel(value: any) {
    this.difficultyLevel = value;
  }

  getTemperature(): any {
    return this.temperature;
  }

  setTemperature(value: any) {
    this.temperature = value;
  }

  getTypeOfSeed(): any {
    return this.typeOfSeed;
  }

  setTypeOfSeed(value: any) {
    this.typeOfSeed = value;
  }

  getDescription(): any {
    return this.description;
  }

  setDescription(value: any) {
    this.description = value;
  }

  getStock(): any {
    return this.stock;
  }

  setStock(value: any) {
    this.stock = value;
  }

  getCost(): any {
    return this.cost;
  }

  setCost(value: any) {
    this.cost = value;
  }

  getSeedsPerPacket(): any {
    return this.seedsPerPacket;
  }

  setSeedsPerPacket(value: any) {
    this.seedsPerPacket = value;
  }

  getPlanter(): Planter {
    return this.planter;
  }

  setPlanter(planter: Planter): void {
    this.planter = planter;
  }
  getSeed(): Seed {
    return this.seed;
  }

  setSeed(seed: Seed): void {
    this.seed = seed;
  }
} 




