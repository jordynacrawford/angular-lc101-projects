import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks:string[] = ['https://www.spacejam.com/', 'http://www.allthemwitches.org/', 'https://www.mlb.com/cardinals']

  constructor() { }

  ngOnInit() {
  }

}
