import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CustomIconComponent } from '../../../../../../shared/components/custom-icon/custom-icon.component';
import { AppIcon } from '../../../../../../shared/components/custom-icon/enum/app-icon.enum';
import { IProduct } from '../../../../models/product.model';


@Component({
  selector: 'app-category-filter',
  imports: [
    CustomIconComponent
  ],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryFilterComponent {
  readonly AppIcon = AppIcon

  label = input.required<string>();
  categories = input<IProduct[]>();

  categorySearch = output<string>();

  onCategorySelected(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.categorySearch.emit(value);
  }

}
