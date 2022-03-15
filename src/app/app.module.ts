import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UsersModule,
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore())
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
