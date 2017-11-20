import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { FinishingItemComponent } from './finishing-item/finishing-item.component';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { LandEditComponent } from './land-edit/land-edit.component';
import { LandComponent } from './land/land.component';
import { PackageComponent } from './package/package.component';

// Initialize Firebase
export const firebaseConfig = {
  apiKey: 'AIzaSyCjl2A4PbZ431Np9qJBp_mi2KEL-s2LaAI',
  authDomain: 'yourhomeselector-dev.firebaseapp.com',
  databaseURL: 'https://yourhomeselector-dev.firebaseio.com',
  projectId: 'yourhomeselector-dev',
  storageBucket: 'yourhomeselector-dev.appspot.com',
  messagingSenderId: '436450569408',
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandComponent,
    HouseComponent,
    FinishingItemComponent,
    PackageComponent,
    LandEditComponent,
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
    MatListModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
