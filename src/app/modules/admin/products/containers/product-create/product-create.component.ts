import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { ProductsFacade } from '../../products.facade';
import { CommonModule, Location } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  private productsFacade = inject(ProductsFacade);
  private router = inject(Router);
  private location = inject(Location);
  private destroyRef = inject(DestroyRef);
  
  categories$ = this.productsFacade.categories$
  loading$ = this.productsFacade.loading$;

  ngOnInit(): void {
    this.productsFacade.loadProducts();
  }

  /** Envia o produto para o facade e se inscreve no loading$ para fazer o skeleton funcionar*/
  onSubmit(product: IProduct) {
    this.productsFacade.createProduct(product);

    this.loading$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (loading) => {        
        if(loading === false) {
          this.router.navigate(['../']);
        }
      }
    })
  }
  
  onCancel() {
    this.location.back();
  }
}
