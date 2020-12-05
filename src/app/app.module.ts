import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TableComponent } from './list/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      { path: '', component: ProfileComponent },
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
