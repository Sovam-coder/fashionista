import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllorderComponent } from './allorder/allorder.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { KidComponent } from './kid/kid.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:"" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"allorder" , component:AllorderComponent},
  {path:"allproduct" , component:AllproductComponent},
  {path:"home" , component:HomeComponent},
  {path:"admindashboard" , component:AdminDashboardComponent},
  {path:"women" , component:WomenComponent},
  {path:"kid" , component:KidComponent},
  {path:"men" , component:MenComponent},
  {path:"addproduct" , component:ProductCreateComponent},
  {path:"cart",component:CartComponent},
  {path:"success",component:SuccessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
