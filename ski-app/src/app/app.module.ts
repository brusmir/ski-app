import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SkiresortsComponent } from './skiresorts/skiresorts.component';
import { SkiService } from './skiresorts/service/ski.service';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { SkiresortsPanelComponent } from './skiresorts/skiresorts-panel/skiresorts-panel.component';
import { SkiTracksComponent } from './skiresorts/ski-tracks/ski-tracks.component';
import { SkiWeatherComponent } from './skiresorts/ski-weather/ski-weather.component';
import { SkiPassComponent } from './skiresorts/ski-pass/ski-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SkiresortsComponent,
    HomeComponent,
    AboutComponent,
    SkiresortsPanelComponent,
    SkiTracksComponent,
    SkiWeatherComponent,
    SkiPassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [
    SkiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
