import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 69,
    name: 'batman'
  }
  heroes = HEROES;
  detailHeroName: string;
  detailHeroID: number;

  isSelected(hero) {
    hero.selected = !hero.selected;
    if (hero.selected == true) {
      this.detailHeroName = hero.name;
      this.detailHeroID = hero.id;
    } else {
      this.detailHeroName = null;
      this.detailHeroID = null;
    }

  }
}

export class Hero {
  name: string;
  id: number;
  selected?: boolean;
}

const HEROES: Hero[] = [
  {id: 1, name: 'Batman'},
  {id: 2, name: 'Superman'},
  {id: 3, name: 'Deadpool'},
  {id: 4, name: 'WonderWoman'},
  {id: 5, name: 'Spiderman'},
  {id: 6, name: 'Flash'},
  {id: 7, name: 'Wolverine'},
  {id: 8, name: 'Hulk'},
  {id: 9, name: 'Archer'},
  {id: 10, name: 'Whatever'}
]
