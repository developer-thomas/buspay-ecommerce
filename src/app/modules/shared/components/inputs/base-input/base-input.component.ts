import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-base-input',
  imports: [],
  template: 
  `
    <input
      [type]="type()"
      [value]="value()"
      (change)="onInput($event)"
      (input)="onInput($event)"
      [class]="baseClass + ' ' + class"
      [placeholder]="placeholder()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseInputComponent {
  type = input.required<string>();
  value = input<string>();
  placeholder = input<string>();

  // Classe adicional que pode concatenar com a básica
  class= input<string>();
  
  valueChange = output<string>();

  baseClass = 'input-base';

  onInput(event: Event) {
    // this.valueChange.emit(event);
  }
}
