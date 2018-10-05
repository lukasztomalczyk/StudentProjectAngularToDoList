import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsMenuComponent } from './projects-menu/projects-menu.component';
import { UserNavComponent } from './user-nav/user-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsMenuComponent,
    UserNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
