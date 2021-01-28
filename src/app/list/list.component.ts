import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ListComponentService } from './list.component.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private listService: ListComponentService) { }
  public info = [];
  heroes$: Observable<any>;

  async ngOnInit() {
    this.createTable(this.listService.getHeroesInfo(await this.listService.makeRequest()));
  }

  createCard(hero) {
    let card = document.createElement('div');
    card.className = "card";

    let image = document.createElement('img');
    image.className = "card-img-top w-100 d-block";
    image.src = hero.image;
    image.alt = "Card image cap";

    let cardBody = document.createElement('div');
    cardBody.className = "card-body";

    let h = document.createElement("h5");
    h.className = "card-title";
    h.innerHTML = hero.name;

    let pOne = document.createElement("p");
    pOne.className = "card-text";
    pOne.innerHTML = hero.publisher;

    let pTwo = document.createElement("p");
    pTwo.className = "card-text";
    pTwo.innerHTML = hero.alignment;

    let anchor = document.createElement("a");
    anchor.href = "/profile/" + hero.id.toString();
    anchor.className = "btn btn-primary";
    anchor.innerHTML = hero.name;

    card.appendChild(image);
    cardBody.appendChild(h);
    cardBody.appendChild(pOne);
    cardBody.appendChild(pTwo);
    cardBody.appendChild(anchor);
    card.appendChild(cardBody);
    return card;
  }

  createTable(info) {
    const tbody = <HTMLInputElement>document.getElementById('tbody');
    tbody.remove();
    let newTbody = document.createElement('tbody');
    newTbody.setAttribute('id', 'tbody');

    let count = 0;
    let newRow = document.createElement('tr');
    let newCell = document.createElement('td');
    let cardGroup = document.createElement('div');
    cardGroup.className = "card-group";
    newRow.appendChild(newCell);
    newCell.appendChild(cardGroup);
    for (let i = 0; i < info.length; i++) {
      const card = this.createCard(info[i]);
      cardGroup.appendChild(card);
      if (count <= 3) {
        count = count + 1;
      } else {
        newTbody.appendChild(newRow);
        newRow = document.createElement('tr');
        newCell = document.createElement('td');
        cardGroup = document.createElement('div');
        cardGroup.className = "card-group";
        newRow.appendChild(newCell);
        newCell.appendChild(cardGroup);
        count = 0;
      }
    }
    newTbody.appendChild(newRow);
    newRow = document.createElement('tr');
    newCell = document.createElement('td');
    cardGroup = document.createElement('div');
    cardGroup.className = "card-group";
    newRow.appendChild(newCell);
    newCell.appendChild(cardGroup);
    let table = document.getElementsByClassName("heroes-table");
    table[0].appendChild(newTbody);
  }
}
