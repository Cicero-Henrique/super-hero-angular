export class ListComponentService {
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

  filterByAlignments(alignments, allHeroes) {
    let heroes = [];
    if (alignments.length == 1) {
      for (let i = 0; i < alignments.length; i++) {
        heroes = allHeroes.filter(hero => hero.alignment == alignments[i]);
      }
    } else {
      if (alignments.length > 1) {
        let aux = [];
        for (let i = 0; i < alignments.length; i++) {
          aux = aux.concat(allHeroes.filter(hero => hero.alignment == alignments[i]));
        }
        heroes = aux;
      }
    }
    return heroes;
  }

  filterByGenres(genres, allHeroes) {
    let heroes = [];
    if (genres.length == 1) {
      for (let i = 0; i < genres.length; i++) {
        heroes = allHeroes.filter(hero => hero.gender == genres[i]);
      }
    } else {
      if (genres.length > 1) {
        let aux = [];
        for (let i = 0; i < genres.length; i++) {
          aux = aux.concat(allHeroes.filter(hero => hero.gender == genres[i]));
        }
        heroes = aux;
      }
    }
    return heroes;
  }
  filterByPublishers(publishers, allHeroes) {
    let heroes = [];
    if (publishers.length == 1) {
      for (let i = 0; i < publishers.length; i++) {
        heroes = allHeroes.filter(hero => hero.publisher == publishers[i]);
      }
    } else {
      if (publishers.length > 1) {
        let aux = [];
        for (let i = 0; i < publishers.length; i++) {
          aux = aux.concat(allHeroes.filter(hero => hero.gender == publishers[i]));
        }
        heroes = aux;
      }
    }
    return heroes;
  }

  async toFilter(alignments, genres, publishers) {
    let info = [];
    info = this.getHeroesInfo(await this.makeRequest());
    if (alignments.length > 0) {
      info = this.filterByAlignments(alignments, info);
    }
    if (genres.length > 0) {
      info = this.filterByGenres(genres, info);
    }
    if (publishers.length > 0) {
      info = this.filterByPublishers(publishers, info);
    }
    return info;
  }

  filterByName(name, allHeroes) {
    let heroes = [];
    heroes = allHeroes.filter(hero => hero.name.toUpperCase().includes(name.toUpperCase()));
    return heroes;
  }

  async searchByName(name) {
    let info = [];
    info = this.getHeroesInfo(await this.makeRequest());
    info = this.filterByName(name, info);
    return info;
  }

}