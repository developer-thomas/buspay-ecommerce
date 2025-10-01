import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { IconMapperPipe } from '../../pipes/icon-mapper.pipe';
import { AppIcon } from './enum/app-icon.enum';

// Component separado, pois caso futuramente queira mudar a lib de icons, não precise alterar todos os components que a usam
@Component({
  selector: 'app-custom-icon',
  imports: [
    NgIcon,
    IconMapperPipe
  ],
  templateUrl: './custom-icon.component.html',
  styleUrl: './custom-icon.component.scss'
})
export class CustomIconComponent {
  iconName = input.required<AppIcon>();

}
