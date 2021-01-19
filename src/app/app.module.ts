import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListComponentService } from './list/list.component.service';
import { FilterComponent } from './list/filter/filter.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'profile/:id', component: ProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ListComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
