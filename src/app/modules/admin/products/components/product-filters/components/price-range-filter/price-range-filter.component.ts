import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CustomIconComponent } from '../../../../../../shared/components/custom-icon/custom-icon.component';
import { AppIcon } from '../../../../../../shared/components/custom-icon/enum/app-icon.enum';

@Component({
  selector: 'app-price-range-filter',
  imports: [
    CustomIconComponent
  ],
  templateUrl: './price-range-filter.component.html',
  styleUrl: './price-range-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceRangeFilterComponent {
  public readonly AppIcon = AppIcon;

  label = input.required(); 

  minPriceSearch = output<number>();
  maxPriceSearch = output<number>();

  onMinChange(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    let parsedValue = parseFloat(value);

    this.minPriceSearch.emit(parsedValue);
  }

  onMaxChange(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    let parsedValue = parseFloat(value);

    this.maxPriceSearch.emit(parsedValue);
  }
}
