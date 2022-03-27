import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProducts from './apps/t1/products/products.reducer';
import { ProductsEffects } from './apps/t1/products/products.effects';
import { ProductsFacade } from './apps/t1/products/products.facade';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.reducer
    ),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  providers: [ProductsFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
