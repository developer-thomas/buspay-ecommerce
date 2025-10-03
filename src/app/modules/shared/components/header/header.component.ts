import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { BaseButtonComponent } from '../base-button/base-button.component';
import { AppIcon } from '../custom-icon/enum/app-icon.enum';

@Component({
  selector: 'app-header',
  imports: [
    BaseButtonComponent,
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  clickBtn = output();
  readonly AppIcon = AppIcon;

  title = input.required<string>();  
  description = input.required<string>();
  useButton = input<boolean>(false);
  
  onButtonClick() {
    this.clickBtn.emit();
  }
}
