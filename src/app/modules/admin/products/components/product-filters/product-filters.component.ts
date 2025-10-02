import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { AppIcon } from '../../../../shared/components/custom-icon/enum/app-icon.enum';
import { TextFilterComponent } from './components/text-filter/text-filter.component';
import { PriceRangeFilterComponent } from './components/price-range-filter/price-range-filter.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-filters',
  imports: [
    CommonModule,
    TextFilterComponent,
    PriceRangeFilterComponent,
    CategoryFilterComponent
  ],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.scss'
})
export class ProductFiltersComponent {
  readonly AppIcon = AppIcon;

  // Expõe cada método separado (facilita o trabalho)
  categoryChange = output<string>();
  searchChange = output<string>();
  minChange = output<number>();
  maxChange = output<number>();

  categories = input.required<string[] | null>();

  onSearch(value: string) {
    this.searchChange.emit(value.trim());
  }

  onMinPrice(value: number) {
    this.minChange.emit(Number(value));
  }

  onMaxPrice(value: number) {
    this.maxChange.emit(Number(value));
  }

  onCategory(value: string) {
    console.log(value);
    
    this.categoryChange.emit(value);
  }
}
