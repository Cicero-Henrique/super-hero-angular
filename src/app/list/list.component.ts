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
    this.info = this.listService.getHeroesInfo(await this.listService.makeRequest());
  }
}
