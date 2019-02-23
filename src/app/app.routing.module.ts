import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {PortfolioComponent} from './portfolio/portfolio.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'portfolio',
  pathMatch: 'full'
}, {
  path: '',
  component: PortfolioComponent,
  data: {title: 'Portfolio'}
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
