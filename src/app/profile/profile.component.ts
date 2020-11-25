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

  url = 'https://superheroapi.com/api/' + environment.ACCESS_TOKEN + '/70';
  name;

  async ngOnInit() {
    this.name = await this.getInformation();
  }

  getInformation() {
    return this.http.get(this.url, {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    ).subscribe(() => this.name).toString();
  }

}
