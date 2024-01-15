import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponentComponent } from './app.login-component/app.login-component.component';
import { AppDashboardComponentComponent } from './app.dashboard-component/app.dashboard-component.component';
import { AppPlantComponentComponent } from './app.plant-component/app.plant-component.component';
import { AppPlanterComponentComponent } from './app.planter-component/app.planter-component.component';
import { AppOrderComponent } from './app.order-component/app.order.component';
import { AppCustomerComponentComponent } from './app.customer-component/app.customer-component.component';
import { AppSeedComponentComponent } from './app.seed-component/app.seed-component.component';
import { AppSignupComponentComponent } from './app.signup-component/app.signup-component.component';

const routes: Routes = [{path:'login', component : AppLoginComponentComponent},
{path:'signup', component:AppSignupComponentComponent},
{path:'dashboard', component:AppDashboardComponentComponent},
{path:'plant', component:AppPlantComponentComponent},
{path:'planter', component:AppPlanterComponentComponent},
{path:'seed', component:AppSeedComponentComponent},
{path:'order', component:AppOrderComponent},
{path:'customer', component:AppCustomerComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
