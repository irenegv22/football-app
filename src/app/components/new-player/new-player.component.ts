import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {
  players: Player[] = [
    {name: "Paco", id: "4", avatar: "hola", teamId: "team1"},
    {name: "Juan", id: "5", avatar: "hola2", teamId: "team2"}
  ];

  //Players inputs
  inputName:string= "";
  inputId: string ="";
  inputavatar: string="";
  inputTeamId: string ="";

  // player:Player= {name:"",id:"", avatar:"", teamId:""};

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.players.push({name:this.inputName, id:this.inputId, avatar:this.inputavatar, teamId:this.inputTeamId});
    this.inputName = "";
    this.inputId = "";
    this.inputavatar = "";
    this.inputTeamId = "";
  };

}
