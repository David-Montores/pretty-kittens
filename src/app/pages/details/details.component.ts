import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kitty } from 'src/app/interfaces/kitty.interface';
import { KittensService } from 'src/app/services/kittens.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  kitty: Kitty = {
    url: '',
    id: '',
    height: 0,
    width: 0,
    breeds: []
  }

  constructor(
    private kittensService: KittensService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getKitty();
  }

  private getKitty(): void {
    const id = this.route.snapshot.params['id'];

    this.kittensService.getKitty(id).subscribe({
      next: (res: Kitty) => {
        this.kitty = res;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
