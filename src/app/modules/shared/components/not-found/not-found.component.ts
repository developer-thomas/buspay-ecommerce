import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BaseButtonComponent } from '../base-button/base-button.component';

@Component({
  selector: 'app-not-found',
  imports: [
    BaseButtonComponent,
    RouterModule
],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {
  showButton = false;

  constructor(private route: ActivatedRoute) {
    this.showButton = this.route.snapshot.data['showButton']
  }
}
