import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home';
import { ProductsComponent } from './Products/Products';
import { ServicesComponent } from './Services/Services';
import { NotFoundComponent } from './NotFound/NotFound';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductsComponent, ServicesComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5TiZoTEwEcB_HUZRhe_rXrcSWW1Z5x8I'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
