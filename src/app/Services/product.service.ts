import { Product } from '../../app/product';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';


export class ProductService {
    products: Product[];

    public constructor() {
        this.products = [
            new Product(1, 'Memory Card', 500),
            new Product(2, 'Pen Drive', 750),
            new Product(3, 'Power Bank', 100)
        ]
    }

    public getProduct(id): Observable<Product> {
        var product = this.products.find(i => i.productID == id)
        return of(product).pipe(delay(1500));
    }

    public getProducts(): Observable<Product[]> {
        return of(this.products).pipe(delay(2000));
    }


}