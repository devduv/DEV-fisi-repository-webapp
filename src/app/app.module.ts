import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarPageModule } from './layout/toolbar/toolbar.module';
import { HttpClientModule } from '@angular/common/http';
import localePE from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localePE, 'es_PE');
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarPageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es_PE' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
