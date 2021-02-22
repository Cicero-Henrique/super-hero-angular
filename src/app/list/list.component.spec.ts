import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListComponent } from './list.component';
import { ListComponentService } from './list.component.service';
import { FilterComponent } from './filter/filter.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let listService: ListComponentService;

  beforeEach(() => { listService = new ListComponentService(); });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ListComponent, FilterComponent],
      providers: [ListComponentService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make request', async () => {
    const request = await listService.makeRequest();
    expect(request[0].name).toEqual('A-Bomb');
  });

  it('should return the heroes info', async () => {
    const heroes = listService.getHeroesInfo(await listService.makeRequest());
    expect(heroes[0].appearance).toEqual(undefined);
  });

  it('should filter', async () => {
    const publisher = ['Marvel Comics'];
    const alignment = ['good'];
    const gender = ['Male']
    const heroes = await listService.toFilter(alignment, gender, publisher);
    component.createTable(heroes);
    expect(heroes[81].name).toEqual('Spider-Man');
  });

  it('should search a name', async () => {
    const hero_name = 'Riddler';
    const heroes = await listService.searchByName(hero_name);
    component.createTable(heroes);
    expect(heroes[0].name).toEqual('Riddler');
  });

});
