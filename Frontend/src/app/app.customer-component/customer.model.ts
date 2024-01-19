import { Address } from "./address.model";

export class Customer {
    id? : any;
    name: any;
    email: any;
    username: any;
    password: any;
    address!:Address;
  
    getName(): string {
      return this.name;
    }
  
    setName(name: string): void {
      this.name = name;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    setEmail(email: string): void {
      this.email = email;
    }
  
    getUsername(): string {
      return this.username;
    }
  
    setUsername(username: string): void {
      this.username = username;
    }
  
    getPassword(): string{
      return this.password;
    }
  
    setPassword(password: string): void {
      this.password = password;
    }
    getAddress(): Address {
        return this.address;
      }
    
    setAddress(address: Address) {
        this.address = address;
      }
    
  }
  