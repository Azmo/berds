import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { FinishingItemComponent } from './finishing-item/finishing-item.component';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { LandComponent } from './land/land.component';
import { PackageComponent } from './package/package.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandComponent,
    HouseComponent,
    FinishingItemComponent,
    PackageComponent,
  ],
  imports: [
    AppRouting,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
