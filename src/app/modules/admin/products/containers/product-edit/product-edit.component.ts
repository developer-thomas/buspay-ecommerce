import { Component, DestroyRef, inject, signal } from '@angular/core';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/product.model';
import { ProductsFacade } from '../../products.facade';
import { CommonModule, Location } from '@angular/common';
import { FormSkeletonComponent } from '../../components/skeletons/form-skeleton/form-skeleton.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-edit',
  imports: [
    ProductFormComponent,
    CommonModule,
    FormSkeletonComponent,
    HeaderComponent
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent {
  private productsFacade = inject(ProductsFacade);
  private destroyRef = inject(DestroyRef);
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  
  categories$ = this.productsFacade.categories$
  loading$ = this.productsFacade.loading$;

  product = signal<IProduct | null>(null);

  ngOnInit(): void {
    this.productsFacade.loadProducts();
    this.getResolverProduct();
  }

  getResolverProduct() {
    const currentProduct = this.route.snapshot.data['product'];
    this.product.set(currentProduct);
  }

  onSubmit(product: IProduct) {
    this.productsFacade.createProduct(product);

    this.loading$.pipe(
      takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (loading) => {        
            if(loading === false) {
              this.location.back();
            }
          }
      })
  }
  
  onCancel() {
    this.location.back();
  }
}
