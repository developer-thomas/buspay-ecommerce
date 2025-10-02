import { Component, inject, OnInit } from '@angular/core';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { ProductsFacade } from '../../products.facade';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
  selector: 'app-product-create',
  imports: [
    ProductFormComponent,
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent implements OnInit{

  productsFacade = inject(ProductsFacade);
  router = inject(Router);
  
  categories$ = this.productsFacade.categories$
  loading$ = this.productsFacade.loading$;


  ngOnInit(): void {
    this.productsFacade.loadProducts();
  }

  onSubmit(product: IProduct) {}
  
  onCancel() {
    this.router.navigate(['../']);
  }
}
