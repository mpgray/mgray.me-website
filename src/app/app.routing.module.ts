import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {SliderComponent} from './slider/slider.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'portfolio',
  pathMatch: 'full'
}, {
  path: 'landingpage',
  component: LandingpageComponent,
  data: {title: 'Landing Page'}
}, {
  path: 'portfolio',
  component: PortfolioComponent,
  data: {title: 'Portfolio'}
}, {
  path: 'slider',
  component: SliderComponent,
  data: {title: 'Slider'}
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
