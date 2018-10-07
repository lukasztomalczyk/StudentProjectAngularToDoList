import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsMenuComponent } from './projects-menu/projects-menu.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from "./routing/routing.module";
import { AdminComponent } from './admin/admin.component';
import { LoginFormComponent } from './home/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsMenuComponent,
    UserNavComponent,
    HomeComponent,
    AdminComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AdminComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

