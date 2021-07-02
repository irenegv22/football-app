import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';
import { NewTeamComponent } from './components/new-team/new-team.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeamsComponent,
    PlayersComponent,
    NewPlayerComponent,
    NewTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
