import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  confirm(text: string, cancelButtonText = 'Cancelar'): Promise<boolean> {
    return Swal.fire({
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      },
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--color-danger)',
      cancelButtonColor: 'var(--color-primary',
      confirmButtonText: 'Excluir',
      cancelButtonText,
    }).then((result) => result.isConfirmed);
  }
}
