import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { IProductFilters } from '../../models/filters.model';

/**
 * Serviço que vai atuar como helper para aplicar os filtros nos produtos
 * Caso um dia eu precise de mais filtros, eu posso adicionar por aqui
 */
@Injectable({
  providedIn: 'root'
})
export class ProductFiltersService {

  applyFilters(products: IProduct[], filters: IProductFilters): IProduct[] {
    return products.filter(product =>
      this.byCategory(product, filters.category) &&
      this.byName(product, filters.name) &&
      this.byPriceRange(product, filters.min, filters.max)
    );
  }

  private byCategory(product: IProduct, category?: string): boolean {
    return !category || product.category.toLowerCase() === category;
  }

  private byName(product: IProduct, name?: string): boolean {
    return !name || product.title.toLowerCase().includes(name);
  }

  private byPriceRange(product: IProduct, min?: number, max?: number): boolean {
    return (!min || product.price >= min) && (!max || product.price <= max);
  }
}
