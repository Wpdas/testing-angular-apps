import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-integration/home.component';
import { TodosComponent } from './08-todos-integration-dependecies/todos.component';
import { UserDetailsComponent } from './09-user-details-integration/user-details.component';
import { VoterComponent } from './07-voter-integration/voter.component';

import { routes } from './app.routes';
import { UsersComponent } from './users-integration/users.component';
import { HighlightDirective } from './highlight.directive';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    HighlightDirective,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
