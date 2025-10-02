import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from '../../../../shared/components/base-button/base-button.component';

@Component({
  selector: 'app-product-form',
  imports: [
    ReactiveFormsModule, 
    CommonModule,
    BaseButtonComponent
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  private fb = inject(FormBuilder);

  product = input<IProduct>();
  categories = input.required<string[]>();
  loading = input<boolean>(false);

  submitForm = output<IProduct>();
  cancel = output();

  form!: FormGroup;

  constructor() {
    this.form = this.fb.group({
      title: [this.product()?.title, Validators.required],
      price: [this.product()?.price, [Validators.required, Validators.min(0)]],
      category: [this.product()?.category, Validators.required],
      image: [this.product()?.image, [Validators.required]],
      description: [this.product()?.description, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
