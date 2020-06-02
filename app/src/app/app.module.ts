
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppMatModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetModule } from './planet/planet.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppMatModule,
    BrowserAnimationsModule,
    PlanetModule,
    AboutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}