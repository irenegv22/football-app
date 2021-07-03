import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormsModule } from '@angular/forms';
import { Team } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

//Teams inputs
inputName:string= "";
inputId: string ="";
inputLogo: string="";
inputLiga: string ="";

teams: Team[] = [
  //  {name: "Paco", id: "4", avatar: "hola", teamId: "team1"},
  //  {name: "Juan", id: "5", avatar: "hola2", teamId: "team2"}
];

//Add Team
visible:boolean = false;

// Search input
filter_value = "";

constructor(private _http:HttpClient) { }

ngOnInit(): void {
   this._http.get<Team[]>('https://footbal-api.herokuapp.com/players')
   .subscribe(equipos => this.teams = equipos)
}

//Filter_Seach functions
handleSeach(value:string){
  this.filter_value = value;
};

//Add Team
showhideUtility(){
  this.visible = this.visible?false:true;
}

// CRUD functions
add() {
  this.teams.push({name:this.inputName, id:this.inputId, Logo:this.inputLogo, Liga:this.inputLiga});
  this.inputName = "";
  this.inputId = "";
  this.inputLogo = "";
  this.inputLiga = "";
};

remove(nombreEquipo : string){
  this.teams = this.teams.filter(team => team.id != nombreEquipo)
};

edit(player:Team){
  this.inputName = player.name;
  this.inputId = player.id;
  this.inputLogo = player.Logo;
  this.inputLiga = player.Liga;
}

}
