import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { User } from "./User";
import { UserInfo } from "./UserInfo";

@Injectable({providedIn:'root'})
export class LoginService{
    constructor(private httpClient:HttpClient){}

    authUser(user:User):Observable<UserInfo>{
       return this.httpClient.post<UserInfo>(`http://localhost:8050/login/auth`,user);
    }
}