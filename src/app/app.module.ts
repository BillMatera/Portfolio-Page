import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      NgbModule.forRoot(),
      CommonModule,
      MdCardModule,
      MdMenuModule,
      MdInputModule,
      MdButtonModule,
      MdListModule,
      MdIconModule,
      MdSidenavModule,
      MdToolbarModule,
      MdTooltipModule,
      MdDialogModule,
      MdTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
