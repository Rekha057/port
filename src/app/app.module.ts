import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataApiService } from './services/http/data-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LinkifyPipe } from './pipes/linkify.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    LinkifyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
