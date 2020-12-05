import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare interface Table {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public tableData1: Table;

  constructor() { }

  async ngOnInit() {
    this.tableData1 = {
      headerRow: ['Name', 'Gender', 'Alignment'],
      dataRows: [
        ['1', 'Dakota Rice', 'Niger'],
      ]
    };
    this.tableData1 = {
      headerRow: ['Name', 'Gender', 'Alignment'],
      dataRows: this.getHeroesInfo(await this.makeRequest())
    };
  }

  getHeroesInfo(heroes) {
    let infos = [];
    heroes.forEach(hero => {
      const info = [hero.name, hero.appearance.gender, hero.biography.alignment]
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
