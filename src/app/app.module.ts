import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; /* added so angular knows to use this component */
import { ServersComponent } from './servers/servers.component';
// import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent, /* added so angular knows to use this component */
    ServersComponent, /* added via cli command */
    // FormsModule,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
