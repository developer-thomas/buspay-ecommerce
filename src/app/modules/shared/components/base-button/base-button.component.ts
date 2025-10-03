import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CustomIconComponent } from '../custom-icon/custom-icon.component';
import { AppIcon } from '../custom-icon/enum/app-icon.enum';

type btnStyleClass = 'primary' | 'secondary' | 'filled' 

@Component({
  selector: 'app-base-button',
  imports: [
    CommonModule, 
    CustomIconComponent
  ],
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseButtonComponent {
  public label = input.required<string>();
  public styleClass = input<btnStyleClass>('primary');
  public disabled = input<boolean>(false);
  
  public useIcon = input<boolean>(false);
  public iconName = input<AppIcon>();

 
  getClass = computed(() => {
    const baseStyle = 'btn-base';

    switch (this.styleClass()) {
      case 'primary':
        return `${baseStyle} btn-primary`;

      case 'secondary':
        return `${baseStyle} btn-secondary`;

      case 'filled':
        return `${baseStyle} btn-filled`;

      default:
        return `${baseStyle}`;
    }
  });
}
