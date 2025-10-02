import { Pipe, PipeTransform } from '@angular/core';
import { AppIcon, ICON_MAP } from '../components/custom-icon/enum/app-icon.enum';

@Pipe({ name: 'iconMapper', standalone: true })
export class IconMapperPipe implements PipeTransform {

  transform(icon: AppIcon): string {
    return ICON_MAP[icon];
  }
}
