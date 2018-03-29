import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './Crisis/crisislist.component';
import { HeroDetailComponent } from './HeroDetail/herodetail.component';
import { HeroListComponent } from './HeroList/herolist.component';
import { PageNotFoundComponent } from './PageNotFound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '', redirectTo: '/heroes', pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroDetailComponent,
    HeroListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, 
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
