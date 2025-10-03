import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { ProductsFacade } from '../products.facade';
import { filter, map, take } from 'rxjs';
import { IProduct } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';

export const productsResolver: ResolveFn<IProduct | null> = (route, state) => {
  const productsFacade = inject(ProductsFacade);
  const router = inject(Router);
  const toastr = inject(ToastrService);

  const id = route.params['id'];
  
  if(!id) {
    router.navigate(['/admin/products']);
    return null;
  }

  productsFacade.loadProducts();

  return productsFacade.products$.pipe(
    // Se não fizer isso, no refresh da página tava voltando e lançando erro pois não tinha produtos
    filter(products => products.length > 0),
    take(1),
    map( products => {
      const product = products.find(product => product.id === +id);
      if(!product) {
        toastr.error('Produto não encontrado');
        router.navigate(['/admin/products']);
        return null;
      }

      return product;
    })
  )
};
