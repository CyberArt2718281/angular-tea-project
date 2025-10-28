import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/types';
import { ProductsService } from '../../services/products.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  allProducts: Product[] = [];
  loading: boolean = true;
  searchProduct:string = '';
  constructor(private productService: ProductsService, private searchService:SearchService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(tap(() => (this.loading = false)))
      .subscribe((data: Product[]) => {
        this.products = data;
        this.allProducts = data;
      });
      this.searchService.searchText$.subscribe(text=>{
        console.log(text);
        this.products = this.allProducts.filter(product=>product.title.toLowerCase().includes(text.toLowerCase()));
      });
  }
  trackByFn(index: number, item: Product) {
    return item.id;
  }

}
