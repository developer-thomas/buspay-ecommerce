import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { CustomIconComponent } from '../custom-icon/custom-icon.component';
import { AppIcon } from '../custom-icon/enum/app-icon.enum';

type btnStyleClass = 'primary' | 'secondary' | 'outlined' 

@Component({
  selector: 'app-base-button',
  imports: [CommonModule, CustomIconComponent],
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.scss'
})
export class BaseButtonComponent {
  public label = input.required<string>();
  public styleClass = input<btnStyleClass>('primary');
  
  public useIcon = input<boolean>(false);
  public iconName = input<AppIcon>();

  // Trocar isso por um pipe
  getClass(): string {
    const baseStyle = 'btn-base';

    switch (this.styleClass()) {
      case 'primary':
        return `${baseStyle} btn-primary`;

      case 'secondary':
        return `${baseStyle} btn-secondary`;
        
      case 'outlined':
        return `${baseStyle} btn-outlined`
       
      default:
        return `${baseStyle}`
        
    }
  }
}
