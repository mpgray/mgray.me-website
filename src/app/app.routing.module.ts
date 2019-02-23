import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {LandingpageComponent} from './landingpage/landingpage.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'landingpage',
  pathMatch: 'full'
}, {
  path: '',
  component: LandingpageComponent,
  data: {title: 'Landing Page'}
}, {
  path: 'portfolio',
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
