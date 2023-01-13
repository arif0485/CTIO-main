import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ViolationsComponent } from './violations/violations.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { ApiService } from './services/ApiService';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './Interceptors/HeaderIntereptor';
import { StolenComponent } from './violations/disputes/stolen/stolen.component';
import { NeverOwnedComponent } from './violations/disputes/never-owned/never-owned.component';
import { RentalComponent } from './violations/disputes/rental/rental.component';
import { NoLongerOwnComponent } from './violations/disputes/no-longer-own/no-longer-own.component';
import { DeathComponent } from './violations/disputes/death/death.component';
import { LeasedComponent } from './violations/disputes/leased/leased.component';
import { ForcedOntoComponent } from './violations/disputes/forced-onto/forced-onto.component';
import { BankrupcyComponent } from './violations/disputes/bankrupcy/bankrupcy.component';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { RequestHearingComponent } from './request-hearing/request-hearing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViolationsComponent,
    HomeComponent,
    AboutComponent,
    FaqComponent,
    StolenComponent,
    NeverOwnedComponent,
    RentalComponent,
    NoLongerOwnComponent,
    DeathComponent,
    LeasedComponent,
    ForcedOntoComponent,
    BankrupcyComponent,
    RequestHearingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ApiService,DecimalPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
