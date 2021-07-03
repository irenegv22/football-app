import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPlayerComponent } from './components/new-player/new-player.component';
import { NewTeamComponent } from './components/new-team/new-team.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  {
    path: 'players',
    component: PlayersComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'new-player',
    component: NewPlayerComponent,
  },
  {
    path:"new-team",
    component: NewTeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
