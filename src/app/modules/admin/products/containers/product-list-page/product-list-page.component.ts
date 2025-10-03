import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductFiltersComponent } from '../../components/product-filters/product-filters.component';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { ProductsFacade } from '../../products.facade';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ProductSkeletonComponent } from '../../components/skeletons/product-skeleton/product-skeleton.component';
import { NotFoundComponent } from '../../../../shared/components/not-found/not-found.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ConfirmDialogService } from '../../../../shared/utils/sweet-alert.service';
import { IProductFilters } from '../../models/filters.model';

@Component({
  selector: 'app-product-list-page',
  imports: [
    ProductCardComponent,
    ProductFiltersComponent,
    PaginationComponent,
    CommonModule,
    HeaderComponent,
    ProductSkeletonComponent,
    NotFoundComponent,
    RouterModule
],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.scss'
})
export class ProductListPageComponent implements OnInit {
  private productsFacade = inject(ProductsFacade);
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private confirmDialogService = inject(ConfirmDialogService);

  // Paginação local
  currentPage = signal(1);
  itemsPerPage = 6;
  totalItems = 0;
  
  filters = signal<IProductFilters>({
    category: '',
    name: '',
    min: 0,
    max: 0
  });

  // Observadores do store
  products$ = this.productsFacade.filteredProducts$;
  categories$ = this.productsFacade.categories$;
  loading$ = this.productsFacade.loading$;

  paginatedProducts = signal<IProduct[]>([]);

  ngOnInit(): void {
    this.triggerProducts()
  }
  
  /** Trigga o facade que armazena na store e o products$ fica observando a prop exposta no facade */
  triggerProducts() {
    this.productsFacade.loadProducts();
    this.updatePaginatedProducts();
  }

  /** Atualiza o filtro de categoria */
  onCategoryChange(category: string) {
    this.filters.set({ ...this.filters(), category });
    this.applyFilters();
  }

  /** Atualiza o filtro de nome */
  onSearchChange(name: string) {
    this.filters.set({ ...this.filters(), name });
    this.applyFilters();
  }
  
  /** Atualiza o filtro de preço mínimo */
  onMinChange(min: number) {
    this.filters.set({ ...this.filters(), min });
    this.applyFilters();
  }

  /** Atualiza o filtro de preço máximo */
  onMaxChange(max: number) {
    this.filters.set({ ...this.filters(), max });
    this.applyFilters();
  }

  /** Atualiza a página */
  onPageChange(page: number) {
    this.currentPage.set(page);
    this.updatePaginatedProducts();
  }

  /** Atualiza os produtos paginados */
  private updatePaginatedProducts() {
    this.products$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(products => {
        const start = (this.currentPage() - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        this.paginatedProducts.set(products.slice(start, end));
        this.totalItems = products.length;
      });
  }
  
  /** Aplica os filtros */
  private applyFilters() {
    this.productsFacade.applyFilters(
      {
        category: this.filters().category,
        name: this.filters().name,
        min: this.filters().min,
        max: this.filters().max
      }
    );

    this.currentPage.set(1);
    this.updatePaginatedProducts();
  }

  onEdit(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

  onDelete(id: number) {
    const message = "Deseja deletar este produto?";
    this.confirmDialogService.confirm(message).then(result => {
      if(result) {
        this.productsFacade.deleteProduct(id);
      }
    });
  }

  onButtonClick() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }



  
  // Posso criar um método central para atualizar somente as chaves necessárias do um obj signal filters
  // private updateFilters(filters: IProductFilters) {}

}
