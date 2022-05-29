import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { MenComponent } from './men/men.component';
import { KidComponent } from './kid/kid.component';
import { SuccessComponent } from './success/success.component';
import { AllorderComponent } from './allorder/allorder.component';
import { AllproductComponent } from './allproduct/allproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    HomeComponent,
    WomenComponent,
    ProductCreateComponent,
    MenComponent,
    KidComponent,
    SuccessComponent,
    AllorderComponent,
    AllproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
