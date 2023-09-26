import { Component, OnInit } from '@angular/core';
import { KittensService } from 'src/app/services/kittens.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  kittens: any = [];
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
      next: (res) => {
        this.kittens = [...this.kittens, ...res];
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  private updatePagination(): void {
    if (this.limitPetitions === this.limitPagination) {
      this.limitPetitions = 0;
      this.page++;
    }
  }

}
