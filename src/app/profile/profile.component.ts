import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id: String;
  url: string;
  name; eye; gender; hair; height; race; weight;
  aliases; alignment; alterEgos; firstAppearance; fullName; placeOfBirth; publisher;
  connections; image; work; groupAffiliation; relatives;
  combat; durability; intelligence; power; speed; strength;
  base; occupation; x;
  selectedTab: number;
  average: number;

  async ngOnInit() {
    this.selectedTab = 1;
    this.id = this.route.snapshot.paramMap.get('id');

    this.url = 'https://superheroapi.com/api/' + environment.ACCESS_TOKEN + '/' + this.id;
    let response = await this.makeRequest();
    this.name = response.name;
    this.eye = response.appearance['eye-color'];
    this.gender = response.appearance.gender;
    this.hair = response.appearance['hair-color'];
    this.height = response.appearance.height;
    this.race = response.appearance.race;
    this.weight = response.appearance.weight;
    this.aliases = response.biography.aliases;
    this.alignment = response.biography.alignment;
    this.alterEgos = response.biography['alter-egos'];
    this.firstAppearance = response.biography['first-appearance'];
    this.fullName = response.biography['full-name'];
    this.placeOfBirth = response.biography['place-of-birth'];
    this.publisher = response.biography.publisher;
    this.groupAffiliation = response.connections['group-affiliation'];
    this.relatives = response.connections.relatives;
    this.image = response.image.url;
    this.combat = Number(response.powerstats.combat);
    this.durability = Number(response.powerstats.durability);
    this.intelligence = Number(response.powerstats.intelligence);
    this.power = Number(response.powerstats.power);
    this.speed = Number(response.powerstats.speed);
    this.strength = Number(response.powerstats.strength);
    this.base = response.work.base;
    this.occupation = response.work.occupation;
    this.average = Number(((this.intelligence + this.strength + this.speed + this.durability + this.power + this.combat) / 6).toFixed(0));
  }

  async makeRequest() {
    const response = await fetch(this.url, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  }

  changeTab(number: number) {
    if (number == 1) {
      this.selectedTab = 1;
    } else {
      this.selectedTab = 2;
    }
  }
}
