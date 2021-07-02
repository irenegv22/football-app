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


  constructor() {}

  ngOnInit(): void {
  }

}
