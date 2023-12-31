import { Component, OnInit } from '@angular/core';
import { Kitty } from 'src/app/interfaces/kitty.interface';

import { KittensService } from 'src/app/services/kittens.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  kittens: Kitty[] = [];
  page: number = 0;
  limitPagination: number = 4;
  limitPetitions: number = 0;

  constructor(private kittensService: KittensService) { }

  ngOnInit(): void {
    this.getKittens();
  }

  public getKittens(): void {
    this.updatePagination();
    this.kittensService.getKittens(this.page).subscribe({
      next: (res: Kitty[]) => {
        this.kittens = [...this.kittens, ...res];
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  handleFavorites(kitty: Kitty): void {
    if (!this.alreadyInFavorite(kitty)) {
      this.addToFavorite(kitty);
    } else {
      this.removeFromFavorite(kitty);
    }
  }

  addToFavorite(kitty: Kitty): void {
    const favorites: Kitty[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(kitty);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  removeFromFavorite(kitty: Kitty): void {
    const favorites: Kitty[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = favorites.filter((kit) => kit.id !== kitty.id);

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  alreadyInFavorite(kitty: Kitty): boolean {
    const favorites: Kitty[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some((kit) => kit.id === kitty.id);
  }

  private updatePagination(): void {
    if (this.limitPetitions === this.limitPagination) {
      this.limitPetitions = 0;
      this.page++;
    }
  }

}
