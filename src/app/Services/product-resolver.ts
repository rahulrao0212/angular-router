import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators';
 
@Injectable()
export class ProductResolverService implements Resolve<any>{
 
    constructor(private router:Router , private productService:ProductService ) {
    }

 
    resolve(route: ActivatedRouteSnapshot,
           state: RouterStateSnapshot): any {
 
    let id = route.paramMap.get('id');
    return this.productService.getProduct(id)
        .pipe(map( data => {
            if (data) {
                console.log(data);
                return data;
            } else {
                console.log('redirecting');
                this.router.navigate(['/product']);
                return null
            }
        }))
}
}