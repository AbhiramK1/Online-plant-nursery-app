import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDashboardComponentComponent } from './app.dashboard-component/app.dashboard-component.component';
import { AppPlantComponentComponent } from './app.plant-component/app.plant-component.component';
import { AppPlanterComponentComponent } from './app.planter-component/app.planter-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoginComponentComponent } from './app.login-component/app.login-component.component';
import { HttpClientModule } from '@angular/common/http';
import { AppOrderComponent } from './app.order-component/app.order.component';
import { AppSeedComponentComponent } from './app.seed-component/app.seed-component.component';
import { AppSignupComponentComponent } from './app.signup-component/app.signup-component.component';
import { AppCustomerComponentComponent } from './app.customer-component/app.customer-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AppCustomerComponentComponent,
    AppDashboardComponentComponent,
    AppPlantComponentComponent,
    AppPlanterComponentComponent,
    AppSeedComponentComponent,
    AppLoginComponentComponent,
    AppSignupComponentComponent,
    AppOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
