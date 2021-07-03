import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { League } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues: League[] = [];

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
    this._http.get<League[]>('https://footbal-api.herokuapp.com/leagues')
     .subscribe(ligas => this.leagues = ligas)
  }

}
