import { Component, OnInit, signal } from '@angular/core';
import { ProductsApiService } from '../../api/products-api.service';
import { IProduct } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductFiltersComponent } from '../../components/product-filters/product-filters.component';

@Component({
  selector: 'app-product-list-page',
  imports: [
    ProductCardComponent,
    ProductFiltersComponent
  ],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.scss'
})
export class ProductListPageComponent implements OnInit {
  public products = signal<IProduct[]>([]);
  
  constructor(private readonly productsApiService: ProductsApiService) {}

  ngOnInit(): void {
    // Acoplamento apenas pra criar UI
    this.loadProducts()
  }

  loadProducts() {
    this.productsApiService.findAll().subscribe({
      next: (res) => {
        this.products.set(res)
      }
    })
  }

}
