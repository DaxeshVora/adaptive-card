import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdaptiveTestComponent } from './adaptive-test/adaptive-test.component';
import { FluentExampleComponent } from './fluent-example/fluent-example.component';

@NgModule({
  declarations: [
    AppComponent,
    AdaptiveTestComponent,
    FluentExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
