import { ChangeDetectionStrategy, Component, inject, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from '../../../../shared/components/base-button/base-button.component';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-product-form',
  imports: [
    ReactiveFormsModule, 
    CommonModule,
    BaseButtonComponent,
    NgxMaskDirective
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnChanges{
  private fb = inject(FormBuilder);

  product = input<IProduct | null>();
  categories = input.required<string[]>();
  loading = input<boolean>(false);

  submitForm = output<IProduct>();
  cancel = output();

  form!: FormGroup;

  constructor() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', [Validators.required, Validators.min(0.01)]],
      image: ['', [Validators.required]],
      description: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      this.form.patchValue(this.product()!);
    }
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
