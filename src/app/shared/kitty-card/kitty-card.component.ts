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

  checkKittyDetail(id: string): void {
    this.router.navigate([`home/details/${id}`]);
  }

}
