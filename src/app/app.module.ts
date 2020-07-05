import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { appRoutes } from './app.route';
import { ProductService } from './Services/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductOverviewComponent } from './product-detail/product-overview/product-overview.component';
import { ProductSpecComponent } from './product-detail/product-spec/product-spec.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { DeactivateGuard } from './Services/deactivate.service';
import { AuthService } from './Services/auth.service';
import { RegisterComponent } from './register/register.component';
import { ProductListResolverService } from './Services/product-list-resolver';
import { ProductResolverService } from './Services/product-resolver';
import { RegisterDetailComponent } from './register-detail/register-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    ErrorComponent,
    ProductDetailComponent,
    ProductOverviewComponent,
    ProductSpecComponent,
    LoginComponent,
    RegisterComponent,
    RegisterDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService, AuthGuardService, AuthService, DeactivateGuard, ProductListResolverService, ProductResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
