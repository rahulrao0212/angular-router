import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  pageNo = 0;
  constructor(private Activatedroute: ActivatedRoute,
    private router: Router, private productService: ProductService) {
  }

  ngOnInit() {
    // this.products = this.productService.getProducts();

    this.products = this.Activatedroute.snapshot.data['products'];

    this.Activatedroute.queryParamMap
      .subscribe(params => {
        this.pageNo = +params.get('pageNum') || 0;
      });
  }

  nextPage() {
    this.router.navigate(['product'], { queryParams: { pageNum: this.pageNo + 1 } });
  }


}
