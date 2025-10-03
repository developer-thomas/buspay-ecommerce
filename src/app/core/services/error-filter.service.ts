import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorFilterService {
  private toastr = inject(ToastrService);

  handleError(error: any) {
    const status = error.status;

    switch (status) {
      case 400:
        this.toastr.error('Requisição inválida.', 'Erro 400');
        break;
      case 401:
        this.toastr.warning('Você precisa estar autenticado.', 'Não autorizado');
        break;
      case 403:
        this.toastr.error('Acesso negado.', 'Erro 403');
        break;
      case 404:
        this.toastr.info('Recurso não encontrado.', 'Erro 404');
        break;
      case 500:
        this.toastr.error('Erro interno do servidor.', 'Erro 500');
        break;
      default:
        this.toastr.error('Ocorreu um erro inesperado.', 'Erro');
        break;
    }
  }
}
