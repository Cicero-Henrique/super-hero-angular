import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }

  url = 'https://superheroapi.com/api/' + environment.ACCESS_TOKEN + '/289';
  name; eye; gender; hair; height; race; weight;
  aliases; alignment; alterEgos; firstAppearance; fullName; placeOfBirth; publisher;
  connections; image; work; groupAffiliation; relatives;
  combat; durability; intelligence; power; speed; strength;
  base; occupation; x;


  async ngOnInit() {
    let response = await this.letsTest();
    this.name = response['name'];
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
    // this.image = await this.getImage(response.image.url);
    this.combat = response.powerstats.combat;
    this.durability = response.powerstats.durability;
    this.intelligence = response.powerstats.intelligence;
    this.power = response.powerstats.power;
    this.speed = response.powerstats.speed;
    this.strength = response.powerstats.strength;
    this.base = response.work.base;
    this.occupation = response.work.occupation;

    console.log(await this.allJson());
  }

  async letsTest() {
    const response = await fetch(this.url, {
      method: 'GET',
      mode:'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  }

  async getImage(url) {
    const response = await fetch(url, {
      method: 'GET',
      mode:'no-cors',
      headers: {
        'Content-Type': 'image/jpeg'
      }
    });
    return response;
  }

  async allJson() {
    const response = await fetch(this.url, {
      method: 'GET',
      mode:'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  }

}
