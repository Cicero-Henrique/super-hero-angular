import { Component, OnInit } from '@angular/core';
import { ListComponentService } from '../list.component.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private listService: ListComponentService) { }
  teste: number;

  ngOnInit(): void {}

  async getFilters() {
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
    this.listService.toFilter(actives);
  }
}
