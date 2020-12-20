import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}
  public info = [];
  heroes$: Observable<any>;
  selectedId: number;

  async ngOnInit() {
    this.info = this.getHeroesInfo(await this.makeRequest());
    
  }

  getHeroesInfo(heroes) {
    let infos = [];
    heroes.forEach(hero => {
      const item = {
        'name': hero.name,
        'image': hero.images.md,
        'publisher': hero.biography.publisher,
        'alignment': hero.biography.alignment,
        'id': hero.id
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
