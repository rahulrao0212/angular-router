import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
 
@Injectable()
export class ProductListResolverService implements Resolve<any>{
 
    constructor(private productService:ProductService ) {
    }
 
    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> {        
        return this.productService.getProducts();
    }
}