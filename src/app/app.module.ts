import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements'
import { NgModule, Inject, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [ButtonComponent],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const customElement = createCustomElement(ButtonComponent, {injector: this.injector});
    customElements.define('app-button', customElement);
  }
 }

