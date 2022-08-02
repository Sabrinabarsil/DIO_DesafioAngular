import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { SupportComponent } from './components/support/support.component';

const routes: Routes = [
  { path: '', component: BookstoreAppComponent},
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }