import { Component, OnInit } from '@angular/core';

declare interface Item {
  name: string;
  image: string;
  publisher: string;
  alignment: string;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  public info = [];

  async ngOnInit() {
    this.info = this.getHeroesInfo(await this.makeRequest());
  }

  getHeroesInfo(heroes) {
    let infos = [];
    let item: Item;
    heroes.forEach(hero => {
      item = {
        'name': hero.name,
        'image': hero.images.md,
        'publisher': hero.biography.publisher,
        'alignment': hero.biography.alignment
      }
      infos.push(item);
    });
    return infos;
  }

  async makeRequest() {
    const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
    const response = await fetch(url, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  }

}
