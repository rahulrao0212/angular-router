import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product: Product;
  id;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {

  }

  sub;

  ngOnInit() {

    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.product = this._Activatedroute.snapshot.data['product'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['product']);
  }

}
