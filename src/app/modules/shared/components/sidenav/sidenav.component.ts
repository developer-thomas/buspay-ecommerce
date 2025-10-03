import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CustomIconComponent } from '../custom-icon/custom-icon.component';
import { AppIcon } from '../custom-icon/enum/app-icon.enum';

export interface ISidenavRoute {
  label: string;
  route: string;
  icon: AppIcon;
}

@Component({
  selector: 'app-sidenav',
  imports: [
    CommonModule,
    RouterModule,
    CustomIconComponent
],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  AppIcon = AppIcon;
  private router = inject(Router);
  
  @Input() routes: ISidenavRoute[] = [];

  drawerOpen = signal(false);

  toggleDrawer() {
    this.drawerOpen.update(open => !open);
  }

  closeDrawer() {
    this.drawerOpen.set(false);
  }

  logout() {
    this.router.navigate(['/']);
  }
}
