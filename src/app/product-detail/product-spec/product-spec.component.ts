import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-spec',
  templateUrl: './product-spec.component.html',
  styleUrls: ['./product-spec.component.css']
})
export class ProductSpecComponent implements OnInit {

  product: Product;
  id;
  sub;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {
  }

  ngOnInit() {

    this.sub = this._Activatedroute.parent.params.subscribe(params => {
      this.id = params['id'];
      this.product = this._Activatedroute.parent.snapshot.data.product;

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
