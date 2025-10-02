import { DestroyRef, inject, Injectable } from "@angular/core";
import { ProductsApiService } from "./api/products-api.service";
import { ProductsStore } from "./state/products.store";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { map } from "rxjs";
import { IProductFilters } from "./models/filters.model";
import { ProductFiltersService } from "./services/filters/product-filters.service";
import { IProduct } from "./models/product.model";

/**
 * Facade para manipulação dos dados dos produtos.
 * Aqui tem a responsabilidade de manipular os dados da store e os dados da api
 * e expôr os dados para o component
 */
@Injectable({ providedIn: 'root' })
export class ProductsFacade {

  private filtersService = inject(ProductFiltersService);

  // Destroyref precisa ser injetado através do método e não pelo construtor
  private destroyRef = inject(DestroyRef);
  private api = inject(ProductsApiService);
  private store = inject(ProductsStore);
  
  // Exposição do observable para o component se inscrever na storage
  products$ = this.store.products$;
  filteredProducts$ = this.store.filteredProducts$;
  loading$ = this.store.loading$;
  
  //Observable para expor as categorias dos produtos
  categories$ = this.products$.pipe(
    map(products => {
      const categories: string[] = [];
      products.forEach(p => {
        if (!categories.includes(p.category)) {
          categories.push(p.category);
        }
      });
      return categories;
    })
  )

  /**
   * Método para carregar os produtos iniciais e armazenar na store
   */
  loadProducts() {
    this.store.setLoading(true);

    this.api.findAll()  
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: products => {
          this.store.setProducts(products)
        },
        // Alterar para utilizar loading/skeleton
        error: (err) => this.store.setLoading(false),
        complete: () => this.store.setLoading(false)
      })
  }

  /**
   * Método para aplicar os filtros na store
   * @param filters Os filtros a serem aplicados
   */
  applyFilters(filters: IProductFilters) {
    this.products$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(products => {
        const filtered = this.filtersService.applyFilters(products, filters);
        this.store.setFilteredProducts(filtered);
      });
  }

  changePage(page: number) {
    this.store.setPage(page);
  }

  // ====================== CRUD ======================
  createProduct(product: IProduct) {
    this.api.create(product)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: created => {
          this.store.addProduct(created);
        },
        error: () => this.store.setLoading(false),
        complete: () => this.store.setLoading(false)
      })
  }

}