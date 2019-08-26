import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewcustomersComponent } from './viewcustomers/viewcustomers.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AboutComponent } from './about/about.component';
import { CanDeactiveGuard } from './guards/candeactivate.guard';
import { AngularfomrsComponent } from './angularfomrs/angularfomrs.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { AuthguardGuard } from './guards/authguard.guard';
import { DialogComponent } from './shared/dialog/dialog.component';
import { SubjectService } from './service/subject.service';
import { RedirectComponent } from './redirect/redirect.component';
import { SigninComponent } from './signin/signin.component';
import { HttpinterceptorService } from './interceptor/httpinterceptor.service';
import { TestComponent } from './test/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewcustomersComponent,
    ContactComponent,
    LoginComponent,
    LogoutComponent,
    AddcustomerComponent,
    AboutComponent,
    AngularfomrsComponent,
    DialogComponent,
    RedirectComponent,
    SigninComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true
    }, CanDeactiveGuard, AuthguardGuard, SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
