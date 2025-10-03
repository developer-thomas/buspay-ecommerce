import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CustomIconComponent } from '../../../../../../shared/components/custom-icon/custom-icon.component';
import { AppIcon } from '../../../../../../shared/components/custom-icon/enum/app-icon.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-filter',
  imports: [
    CustomIconComponent,
    CommonModule
  ],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryFilterComponent {
  readonly AppIcon = AppIcon

  label = input.required<string>();
  categories = input<string[]>();

  categorySearch = output<string>();

  onCategorySelected(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    let treatedValue = value.trim().toLowerCase();
    this.categorySearch.emit(treatedValue);
  }

}
