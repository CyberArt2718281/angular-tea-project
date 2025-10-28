import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/types';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: Product | null = null;
  loading: boolean = true;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.productsService.getProductById(id)
        .pipe(
          tap(() => (this.loading = false))
        )
        .subscribe((data: Product) => {
          this.product = data;
        });
      }
    });
  }
}
