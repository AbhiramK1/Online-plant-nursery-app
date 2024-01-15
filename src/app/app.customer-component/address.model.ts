export class Address {
  houseNo: any;
  colony: any;
  city: any;
  state: any;
  pincode: any;

  constructor(
      houseNo?: any,
      colony?: any,
      city?: any,
      state?: any,
      pincode?: any
  ) {
      this.houseNo = houseNo;
      this.colony = colony;
      this.city = city;
      this.state = state;
      this.pincode = pincode;
  }
      

    getHouseNo(): any  {
      return this.houseNo;
    }
  
    setHouseNo(houseNo: any): void {
      this.houseNo = houseNo;
    }
  
    getColony(): any {
      return this.colony;
    }
  
    setColony(colony: any): void {
      this.colony = colony;
    }
  
    getCity(): any {
      return this.city;
    }
  
    setCity(city: any): void {
      this.city = city;
    }
  
    getState(): any {
      return this.state;
    }
  
    setState(state: any): void {
      this.state = state;
    }
  
    getPincode(): any {
      return this.pincode;
    }
  
    setPincode(pincode: any): void {
      this.pincode = pincode;
    }
    
  }
  