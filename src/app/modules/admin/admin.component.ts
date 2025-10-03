import { Component } from '@angular/core';
import { ISidenavRoute, SidenavComponent } from '../shared/components/sidenav/sidenav.component';
import { AppIcon } from '../shared/components/custom-icon/enum/app-icon.enum';

@Component({
  selector: 'app-admin',
  imports: [SidenavComponent],
  template: '<app-sidenav [routes]="allRoutes" />'
})
export class AdminComponent {
  allRoutes: ISidenavRoute[] = [
    { label: 'produtos', route: 'products', icon: AppIcon.Product },
    { label: 'categorias', route: 'categories', icon: AppIcon.ProductTag },
    { label: 'pedidos', route: 'orders', icon: AppIcon.ProductPrice },
    { label: 'usuarios', route: 'users', icon: AppIcon.UserIcon },
    { label: 'configurações', route: 'settings', icon: AppIcon.SettingsIcon }, 
  ];
}
