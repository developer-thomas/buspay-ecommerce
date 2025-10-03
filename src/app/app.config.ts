import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { ICONS_PROVIDERS } from './icons.providers'
import { provideNgxMask } from 'ngx-mask';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { errorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([errorHandlerInterceptor]),
    ),
    provideNgxMask(),
    provideAnimationsAsync(),
    provideToastr({
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar: true,
      preventDuplicates: true,
      timeOut: 1500
    }),
    
    ICONS_PROVIDERS
  ]
};
