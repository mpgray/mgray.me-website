import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import {MatCardModule, MatIconModule, MatTabsModule, MatButtonModule, MatSliderModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LandingpageComponent } from './landingpage/landingpage.component';
import {MatMenuModule} from '@angular/material/menu';
import { SliderComponent } from './slider/slider.component';
import { SliderService } from './slider/slider.service';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    LandingpageComponent,
    SliderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSliderModule,
    MatMenuModule
  ],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
