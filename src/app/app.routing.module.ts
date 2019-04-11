import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {SliderComponent} from './slider/slider.component';
import {LayoutComponent} from './shared/layout/layout.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'portfolio',
  pathMatch: 'full'
}, {
  path: '',
  component: LayoutComponent,
    children: [{
      path: 'portfolio',
      component: PortfolioComponent,
      data: { title: 'Portfolio' }
    }, {
      path: 'slider',
      component: SliderComponent,
      data: { title: 'slider' }
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
