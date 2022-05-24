import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PreferencesButtonComponent } from './components/preferences-button/preferences-button.component';
import { PreferencesMainComponent } from './components/preferences-main/preferences-main.component';
import { LocalStorageService } from './services/local-storage.service';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { PreferencesFormComponent } from './components/preferences-form/preferences-form.component';
import { ToastrModule } from 'ngx-toastr';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FocusMainComponent } from './components/focus-main/focus-main.component';
import { FocusButtonComponent } from './components/focus-button/focus-button.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component'; // a plugin!

// firestore imports
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from 'src/environments/environment';
import { FirebaseService } from './services/firebase.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { HomeComponent } from './home/home.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
    PreferencesButtonComponent,
    PreferencesMainComponent,
    CreateAccountComponent,
    PreferencesFormComponent,
    FocusMainComponent,
    FocusButtonComponent,
    HeaderMainComponent,
    LogoutButtonComponent,
    FooterMainComponent,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FullCalendarModule
  ],
  providers: [LocalStorageService, Storage, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
