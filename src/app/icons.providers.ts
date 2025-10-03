import { Provider } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

import {
  featherDollarSign,
  featherPlus,
  featherSearch,
  featherTag,
  featherTrash2,
  featherArchive,
  featherMenu,
  featherBox,
  featherBell,
  featherX,
  featherUser,
  featherSettings
} from '@ng-icons/feather-icons';

// Aqui importa somente os ícones que for usar durante a aplicação
export const ICONS_PROVIDERS: Provider[] = [
  provideIcons({
    featherPlus,
    featherTrash2,
    featherSearch,
    featherDollarSign,
    featherTag,
    featherArchive,
    featherMenu,
    featherBox,
    featherBell,
    featherX,
    featherSettings,
    featherUser,
  })
];
