import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Player } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
 
  //Players inputs
  inputName:string= "";
  inputId: string ="";
  inputavatar: string="";
  inputTeamId: string ="";

  players: Player[] = [
    //  {name: "Paco", id: "4", avatar: "hola", teamId: "team1"},
    //  {name: "Juan", id: "5", avatar: "hola2", teamId: "team2"}
  ];

  // Search input
  filter_value = "";

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
     this._http.get<Player[]>('https://footbal-api.herokuapp.com/players')
     .subscribe(jugadores => this.players = jugadores)
  }

  //Filter_Seach functions
  handleSeach(value:string){
    this.filter_value = value;
  };

  // CRUD functions
  add() {
    this.players.push({name:this.inputName, id:this.inputId, Avatar:this.inputavatar, teamId:this.inputTeamId});
    this.inputName = "";
    this.inputId = "";
    this.inputavatar = "";
    this.inputTeamId = "";
  };

  remove(nombreJugador : string){
    this.players = this.players.filter(player => player.id != nombreJugador)
  };

  edit(player:Player){
    this.inputName = player.name;
    this.inputId = player.id;
    this.inputavatar = player.Avatar;
    this.inputTeamId = player.teamId;
  }

}
