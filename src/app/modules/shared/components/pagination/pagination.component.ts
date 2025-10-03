import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';


@Component({
  selector: 'app-pagination',
  imports: [
    CommonModule
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  totalItems = input<number>(0);
  itemsPerPage = input<number>(6);
  currentPage = input<number>(1);

  pageChange = output<number>();

  onPageChange(event: any) {
    this.pageChange.emit(event.page);
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems() / this.itemsPerPage());
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {

    if (page < 1 || page > this.totalPages) return;
    this.pageChange.emit(page);
    this.scrollToTop();
  }

  isActive(page: number) {
    return page === this.currentPage();
  }

  private scrollToTop() {
    const main = document.querySelector('main');
    
    if (main) {
      main.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
