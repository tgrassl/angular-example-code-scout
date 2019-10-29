import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProfileService } from './services/profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { HireFormComponent } from './hire-form/hire-form.component';
import { ProfileComponent } from './profile-view/profile/profile.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollDirective,
    ProfileViewComponent,
    ProfileComponent,
    HireFormComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
