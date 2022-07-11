import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideFluentDesignSystem, fluentDataGrid, fluentCard, fluentButton, fluentTextField } from '@fluentui/web-components';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

provideFluentDesignSystem().register(fluentCard(), fluentButton(), fluentTextField(), fluentDataGrid());


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
