import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { PipesModule } from './pipes/pipes.module';
import { UiModule } from './ui/ui.module';


@NgModule({
  declarations: [
    AppComponent,
    AccountsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PipesModule,
    UiModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
