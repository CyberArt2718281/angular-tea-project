import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/catalog/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AnswersComponent } from './components/main-component/answers/answers.component';
import { PopupComponent } from './components/main-component/popup/popup.component';
import { SliderComponent } from './components/main-component/slider/slider.component';
import { FormComponent } from './components/order/form.component';
import { ProductComponent } from './components/product/product.component';
import { ShortTextPipe } from './pipes/short-text.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    ProductsComponent,
    AnswersComponent,
    FormComponent,
    ProductComponent,
    PopupComponent,
    ShortTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage,
    HttpClientModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
