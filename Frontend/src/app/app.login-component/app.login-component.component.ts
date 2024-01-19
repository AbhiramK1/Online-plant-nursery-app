import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentUser } from '../CurrentUser';
import { LoginService } from './loginService';
import { User } from './User';
import { UserInfo } from './UserInfo';

@Component({
  selector: 'app-app.login-component',
  templateUrl: './app.login-component.component.html',
  styleUrls: ['./app.login-component.component.css']
})
export class AppLoginComponentComponent {
  loginForm!: FormGroup;
  userTypee=CurrentUser.getUserType();
  showForm = true;
  show=false;
  showNext = false;
  msg='';
  userInfo :UserInfo = new UserInfo();

  constructor(private fb: FormBuilder, private router: Router, private loginService:LoginService) {}
  searchUserType(){
   this.show=true;
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          )
        ]
      ],
      userType:['', [Validators.required]],
      username:['']
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.showForm=false;
      const emailValue = this.loginForm.get('email')?.value;
      const passwordValue = this.loginForm.get('password')?.value;
      const userTypeValue = this.loginForm.get('userType')?.value;
      const usernameValue = this.loginForm.get('username')?.value;

      //console.log(this.loginForm.value);

      this.loginService.authUser(new User(userTypeValue,(userTypeValue==='customer')?emailValue:usernameValue,passwordValue)).subscribe(
        data => {
          if(data.isAdministrator){
            CurrentUser.setUserType('administrator');
            CurrentUser.setId(data.id);
            this.navigateToDashboard();
          }
          else if(data.isCustomer){
            CurrentUser.setUserType('customer');
            CurrentUser.setId(data.id);
            CurrentUser.setPlantCost(0);
            CurrentUser.setSeedCost(0);
            CurrentUser.setPlanterCost(0);
            this.navigateToDashboard();
          }
          else this.msg='Invalid Credentials';
        },
        error => console.log(error)
      );
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get userType(){
    return this.loginForm.get('userType');
  }
  get username(){
    return this.loginForm.get('username');
  }

  navigateToSignup() {
      this.showForm=false;
      this.showNext=true;
      this.router.navigate(['/signup']);
    }
  navigateToDashboard() {
      this.showForm=false;
      this.router.navigate(['/dashboard']);
  }
}
