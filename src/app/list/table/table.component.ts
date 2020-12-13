import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare interface Table {
  headerRow: string[];
  dataRows: string[][];
  images: string[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public tableData1: Table;
  public images = [];

  constructor() { }

  async ngOnInit() {
    this.tableData1 = {
      headerRow: ['Image', 'Name', 'Gender', 'Alignment'],
      dataRows: [
        ['https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg', '1', 'Dakota Rice', 'Niger']
      ],
      images: ['https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg']
    };
    this.tableData1 = {
      headerRow: ['Image', 'Name', 'Gender', 'Alignment'],
      dataRows: this.getHeroesInfo(await this.makeRequest()),
      images: this.images

    };
  }

  getHeroesInfo(heroes) {
    let infos = [];
    heroes.forEach(hero => {
      const info = [hero.images.xs, hero.name, hero.appearance.gender, hero.biography.alignment];
      this.images.push(hero.images.xs);
      // const info = {
      //   'id': hero.images.xs,
      //   'name': hero.name,
      //   'gender': hero.appearance.gender,
      //   'allignment': hero.biography.alignment
      // }
      infos.push(info);
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
