import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductOverviewComponent } from './product-detail/product-overview/product-overview.component';
import { ProductSpecComponent } from './product-detail/product-spec/product-spec.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { DeactivateGuard } from './Services/deactivate.service';
import { ProductListResolverService } from './Services/product-list-resolver';
import { LoginComponent } from './login/login.component';
import { ProductResolverService } from './Services/product-resolver';
import { RegisterDetailComponent } from './register-detail/register-detail.component';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent, canDeactivate: [DeactivateGuard] },
    { path: 'register-detail', component: RegisterDetailComponent },
    { path: 'contact', component: ContactComponent },
    {
        path: 'product', component: ProductComponent, canActivate: [AuthGuardService], canActivateChild: [AuthGuardService],
        resolve: { products: ProductListResolverService },
        children: [
            {
                path: 'detail/:id', component: ProductDetailComponent,
                resolve: { product: ProductResolverService },
                children: [
                    {
                        path: 'overview', component: ProductOverviewComponent
                    },
                    {
                        path: 'spec', component: ProductSpecComponent
                    },
                    { path: '', redirectTo: 'overview', pathMatch: "full" }
                ]
            }
        ]
    },
    // { path: 'product/:id', component: ProductDetailComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];