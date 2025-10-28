import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/catalog/products.component';
import { AnswersComponent } from './components/main-component/answers/answers.component';
import { SliderComponent } from './components/main-component/slider/slider.component';
import { FormComponent } from './components/order/form.component';
import { ProductComponent } from './components/product/product.component';
import { FormGuardService } from './services/guards/form-guard.service';

const routes: Routes = [
  {
    path: 'main',
    component: SliderComponent,
  },
  {
    path: 'catalog',
    component: ProductsComponent,
  },
  {
    path: 'catalog/:id',
    component: ProductComponent,
  },
  {
    path: 'answers',
    component: AnswersComponent,
  },

  {
    path: 'order',
    component: FormComponent,
    canActivate: [FormGuardService],
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
