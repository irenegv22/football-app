import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[] = [
    {name: "Paco", id: "4", avatar: "hola", teamId: "team1"},
    {name: "Juan", id: "5", avatar: "hola2", teamId: "team2"}
  ];

  //Players inputs
  inputName:string= "";
  inputId: string ="";
  inputAvatar: string="";
  inputTeamId: string ="";

  //Boolean to know if you edit a player and if so remove the old one
  editAndRemove:boolean = false;

  // player:Player= {name:"",id:"", avatar:"", teamId:""};

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.players.push({name:this.inputName, id:this.inputId, avatar:this.inputAvatar, teamId:this.inputTeamId});
    this.inputName = "";
    this.inputId = "";
    this.inputAvatar = "";
    this.inputTeamId = "";
  };

  remove(nombreJugador : string){
    this.players = this.players.filter(player => player.name != nombreJugador)
  };

  editPlayer(player:Player){
    this.inputName = player.name;
    this.inputId = player.id;
    this.inputAvatar = player.avatar;
    this.inputTeamId = player.teamId;
  }

}
