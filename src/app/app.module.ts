import { AppRoutingModule } from './app-routing.module';
import { ProfileService } from './services/profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { HireFormComponent } from './hire-form/hire-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollDirective,
    ProfileViewComponent,
    HireFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
