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
  
  // Filtros, da pra unificar em um só objeto
  categoryFilter = signal('');
  nameFilter = signal('');
  minFilter = signal(0);
  maxFilter = signal(0);

  // Observadores do store
  products$ = this.productsFacade.filteredProducts$;
  categories$ = this.productsFacade.categories$;
  loading$ = this.productsFacade.loading$;

  paginatedProducts = signal<IProduct[]>([]);

  ngOnInit(): void {
    // trigga o facade que armazena na store e o products$ fica observando a prop exposta no facade
    this.triggerProducts()
  }

  triggerProducts() {
    this.productsFacade.loadProducts();
    this.updatePaginatedProducts();
  }

  onCategoryChange(category: string) {
    this.categoryFilter.set(category);
    this.applyFilters();
  }

  onSearchChange(name: string) {
    this.nameFilter.set(name);
    this.applyFilters();
  }
  
  onMinChange(min: number) {
    this.minFilter.set(min);
    this.applyFilters();
  }

  onMaxChange(max: number) {
    this.maxFilter.set(max);
    this.applyFilters();
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
    this.updatePaginatedProducts();
  }

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
  
  private applyFilters() {
    this.productsFacade.applyFilters(
      {
        category: this.categoryFilter(),
        name: this.nameFilter(),
        min: this.minFilter(),
        max: this.maxFilter()
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
