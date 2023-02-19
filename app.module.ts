import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { PoliticsComponent } from './politics/politics.component';
import { CrimeComponent } from './crime/crime.component';
import { WorldComponent } from './world/world.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { BuisnessNewsComponent } from './buisness-news/buisness-news.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { DescriptionPipe } from './description-pipe';

const allLinks: Routes = [
  { path: 'buisnessnews', component: BuisnessNewsComponent },
  { path: 'politics', component: PoliticsComponent },
  { path: 'crime', component: CrimeComponent },
  { path: 'world', component: WorldComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'sports', component: SportsComponent },
  {path:'newsDetail/:category',component:ViewDetailsComponent}



]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PoliticsComponent,
    CrimeComponent,
    WorldComponent,
    TechnologyComponent,
    SportsComponent,
    BuisnessNewsComponent,
    ViewDetailsComponent,
    DescriptionPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


