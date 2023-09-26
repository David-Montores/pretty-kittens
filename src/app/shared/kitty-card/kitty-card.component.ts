import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Kitty } from 'src/app/interfaces/kitty.interface';

@Component({
  selector: 'app-kitty-card',
  templateUrl: './kitty-card.component.html',
  styleUrls: ['./kitty-card.component.scss']
})
export class KittyCardComponent {
  @Input('kitty') kitty: Kitty = {
    url: '',
    id: '',
    height: 0,
    width: 0,
    breeds: []
  };

  constructor(private router: Router) { }

  checkKittyDetail(): void {
    this.router.navigate([`home/details/${this.kitty.id}`]);
  }

  handleFavorites(): void {
    if (!this.alreadyInFavorite()) {
      this.addToFavorite();
    } else {
      this.removeFromFavorite();
    }
  }

  addToFavorite(): void {
    const favorites: Kitty[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(this.kitty);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  removeFromFavorite(): void {
    const favorites: Kitty[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = favorites.filter((kitty) => kitty.id !== this.kitty.id);

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  alreadyInFavorite(): boolean {
    const favorites: Kitty[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some((kitty) => kitty.id === this.kitty.id);
  }

}