import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsService } from './products.service';
import { MergePipe } from './merge.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MergePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
