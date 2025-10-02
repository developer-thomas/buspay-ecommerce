import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CustomIconComponent } from '../../../../../../shared/components/custom-icon/custom-icon.component';
import { AppIcon } from '../../../../../../shared/components/custom-icon/enum/app-icon.enum';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-filter',
  imports: [
    CustomIconComponent,
    FormsModule
  ],
  templateUrl: './text-filter.component.html',
  styleUrl: './text-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFilterComponent {
  value = input<string>();
  label = input.required<string>();
  placeholder = input.required<string>();

  textSearch = output<string>();

  readonly AppIcon = AppIcon;

   onTextSearch(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    let treatedValue = value.trim().toLowerCase();
    this.textSearch.emit(treatedValue);
   }

   
}
