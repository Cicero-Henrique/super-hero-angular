import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private ls: ListComponent) { }

  ngOnInit(): void {
  }

  async toFilter() {
    let alignmentGood = <HTMLInputElement>document.getElementById("goodCheck");
    let alignmentBad = <HTMLInputElement>document.getElementById("badCheck");
    let alignmentNone = <HTMLInputElement>document.getElementById("noneCheck");
    let alignmentNeutral = <HTMLInputElement>document.getElementById("neutralCheck");
    let genderMale = <HTMLInputElement>document.getElementById("maleCheck");
    let genderFemale = <HTMLInputElement>document.getElementById("femaleCheck");
    let genderNone = <HTMLInputElement>document.getElementById("noneCheck");
    let publisherMarvel = <HTMLInputElement>document.getElementById("marvelCheck");
    let publisherDarkhorse = <HTMLInputElement>document.getElementById("darkhCheck");
    let publisherDc = <HTMLInputElement>document.getElementById("dcCheck");
    let publisherNbc = <HTMLInputElement>document.getElementById("nbcCheck");
    let publisherSyfy = <HTMLInputElement>document.getElementById("syfyCheck");
    let publisherGeorgelucas = <HTMLInputElement>document.getElementById("georgelucasCheck");
    let publisherJkr = <HTMLInputElement>document.getElementById("jkrCheck");
    let publisherJrrt = <HTMLInputElement>document.getElementById("jrrtolkienCheck");

    let actives = [];
    let checkboxes = [
      alignmentGood,
      alignmentBad,
      alignmentNone,
      alignmentNeutral,
      genderMale,
      genderFemale,
      genderNone,
      publisherMarvel,
      publisherDarkhorse,
      publisherDc,
      publisherNbc,
      publisherSyfy,
      publisherGeorgelucas,
      publisherJkr,
      publisherJrrt
    ];
    let i = 0;
    for (i = 0; i < checkboxes.length; i++) {
      if(checkboxes[i].checked) {
        actives.push(checkboxes[i]);
      }
    }
  }

  getHeroesInfo(heroes) {
    let infos = [];
    heroes.forEach(hero => {
      const item = {
        'name': hero.name,
        'image': hero.images.md,
        'publisher': hero.biography.publisher,
        'alignment': hero.biography.alignment,
        'id': hero.id,
        'gender': hero.appearance.gender,
        'race': hero.appearance.race
      }
      infos.push(item);
      // let exist = false;
      // if (this.genders.length > 0) {
      //   for (let i = 0; i < this.genders.length; i++) {
      //     if (String(item.race).localeCompare(this.genders[i]) == 0) {
      //       exist = true;
      //     }
      //   }
      // }
      // if (exist == false) {
      //   console.log(item.race);
      //   this.genders.push(item.race);
      // }
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
