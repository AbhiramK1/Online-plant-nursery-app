import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'opnapp';
  showSection=true;
  showNext=false;
  constructor(private router: Router){}
  naviagateToLogin(){
    this.showSection = false;
    this.showNext = true; 
    this.router.navigate(['/login']); 
  }
}
