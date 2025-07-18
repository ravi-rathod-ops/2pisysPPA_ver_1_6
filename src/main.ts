import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

fetch('/assets/external-config.json')
  .then(res => res.json())
  .then(config => {
    if (config.production) {
      enableProdMode();
    }

    platformBrowserDynamic([
      { provide: 'APP_CONFIG', useValue: config }
    ])
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
  })
  .catch(err => {
    console.error(' Failed to load config', err);
  });
