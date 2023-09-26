import { Component, OnInit } from '@angular/core';
import { KittensService } from 'src/app/services/kittens.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  kittens: [] = [];

  constructor(private kittensService: KittensService) { }

  ngOnInit(): void {
    this.getKittens();
  }

  public getKittens(): void {
    this.kittensService.getKittens().subscribe({
      next: (res) => {
        this.kittens = res;
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
