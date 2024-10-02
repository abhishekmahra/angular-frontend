import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

import { TrendingEventsComponent } from './components/trending-events/trending-events.component';
import { ExploreEventsComponent } from './explore-events/explore-events.component';
import { FormsModule } from '@angular/forms';
import { SanfranciscoDiariesComponent } from './sanfrancisco-diaries/sanfrancisco-diaries.component';
import { FooterComponent } from './footer/footer.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    TrendingEventsComponent,
    ExploreEventsComponent,
    SanfranciscoDiariesComponent,
    FooterComponent,
    SpotlightComponent
  ],
  imports: [
    BrowserModule,FormsModule, BrowserAnimationsModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
