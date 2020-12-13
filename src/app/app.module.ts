import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TableComponent } from './list/table/table.component';
import { ListItemComponent } from './list/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListComponent,
    TableComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      { path: '', component: ListComponent },
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
