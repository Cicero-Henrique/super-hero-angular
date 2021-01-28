import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list.component';
import { ListComponentService } from '../list.component.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private listService: ListComponentService, private listComponent: ListComponent) { }
  teste: number;

  ngOnInit(): void { }

  async getFilters() {
    const alignmentGood = <HTMLInputElement>document.getElementById("goodCheck");
    const alignmentBad = <HTMLInputElement>document.getElementById("badCheck");
    const alignmentNone = <HTMLInputElement>document.getElementById("alignmentNoneCheck");
    const alignmentNeutral = <HTMLInputElement>document.getElementById("neutralCheck");
    const genderMale = <HTMLInputElement>document.getElementById("maleCheck");
    const genderFemale = <HTMLInputElement>document.getElementById("femaleCheck");
    const genderNone = <HTMLInputElement>document.getElementById("genderNoneCheck");
    const publisherMarvel = <HTMLInputElement>document.getElementById("marvelCheck");
    const publisherDarkhorse = <HTMLInputElement>document.getElementById("darkhCheck");
    const publisherDc = <HTMLInputElement>document.getElementById("dcCheck");
    const publisherNbc = <HTMLInputElement>document.getElementById("nbcCheck");
    const publisherSyfy = <HTMLInputElement>document.getElementById("syfyCheck");
    const publisherGeorgelucas = <HTMLInputElement>document.getElementById("georgelucasCheck");
    const publisherJkr = <HTMLInputElement>document.getElementById("jkrCheck");
    const publisherJrrt = <HTMLInputElement>document.getElementById("jrrtolkienCheck");

    let alignments = [];
    let genres = [];
    let publishers = [];
    if (alignmentGood.checked) {
      alignments.push('good');
    }
    if (alignmentBad.checked) {
      alignments.push('bad');
    }
    if (alignmentNone.checked) {
      alignments.push('-');
    }
    if (alignmentNeutral.checked) {
      alignments.push('neutral');
    }
    if (genderMale.checked) {
      genres.push('Male');
    }
    if (genderFemale.checked) {
      genres.push('Female');
    }
    if (genderNone.checked) {
      genres.push('-');
    }
    if (publisherMarvel.checked) {
      publishers.push('Marvel Comics');
    }
    if (publisherDarkhorse.checked) {
      publishers.push('Dark Horse Comics');
    }
    if (publisherDc.checked) {
      publishers.push('DC Comics');
    }
    if (publisherNbc.checked) {
      publishers.push('NBC - Heroes');
    }
    if (publisherSyfy.checked) {
      publishers.push('SyFy');
    }
    if (publisherGeorgelucas.checked) {
      publishers.push('George Lucas');
    }
    if (publisherJkr.checked) {
      publishers.push('J. K. Rowling');
    }
    if (publisherJrrt.checked) {
      publishers.push('J. R. R. Tolkien');
    }

    this.listComponent.info = await this.listService.toFilter(alignments, genres, publishers);
    this.listComponent.createTable(this.listComponent.info);
  }

  async search() {
    const search = <HTMLInputElement>document.getElementById('search-input');
    this.listComponent.info = await this.listService.searchByName(search.value);
    console.log(this.listComponent.info);
    this.listComponent.createTable(this.listComponent.info);
  }
}
