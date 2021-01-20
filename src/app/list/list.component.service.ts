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

  async toFilter(checkboxes, heroes) {
    let info = [];
    info = this.getHeroesInfo(await this.makeRequest());
    info = info.filter(hero => hero.gender == 'Female');
    info = info.filter(hero => hero.alignment == 'bad');
    console.log(info);
    return info;
  }
}