import { HttpInterceptorFn } from '@angular/common/http';
import { ErrorFilterService } from '../services/error-filter.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const errorFilter = inject(ErrorFilterService);

  return next(req).pipe(
    catchError(error => {
      errorFilter.handleError(error);
      return throwError(() => error); 
    })
  );
};
