import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kitty-card',
  templateUrl: './kitty-card.component.html',
  styleUrls: ['./kitty-card.component.scss']
})
export class KittyCardComponent {
  @Input('kitty') kitty: any;

}
