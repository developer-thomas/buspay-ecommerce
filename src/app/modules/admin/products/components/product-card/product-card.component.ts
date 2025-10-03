import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from '../../../../shared/components/base-button/base-button.component';
import { AppIcon } from '../../../../shared/components/custom-icon/enum/app-icon.enum';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, BaseButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  product = input.required<IProduct>();

  edit = output<number>();
  delete = output<number>();
  
  readonly AppIcon = AppIcon;

  onEdit() {
    this.edit.emit(this.product()?.id);
  }

  onDelete() {
    this.delete.emit(this.product()?.id);
  }
}
