import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ConfigLoaderService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return this.http.get('/assets/external-config.json')
      .toPromise()
      .then(config => {
        console.log({config});
        console.log("from config");
        
        this.config = config;
      });
  }

  getConfig(): any {
    return this.config;
  }
}
