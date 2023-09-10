import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';


import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
