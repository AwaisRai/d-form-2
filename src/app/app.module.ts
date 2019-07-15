import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './shared/authentication.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { LoginComponent } from './login/login.component';
import { PatientFormComponent } from './patient-form/patient-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
