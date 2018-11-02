import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptService } from './services/interceptor/intercept.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngMaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { SitesComponent } from './sites/sites.component';
import { SiteComponent } from './sites/site/site.component';
import { SiteListComponent } from './sites/site-list/site-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SitesComponent,
    SiteComponent,
    SiteListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AngMaterialModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
