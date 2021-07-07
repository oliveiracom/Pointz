import { Component, OnInit } from '@angular/core';
import { GiftsService } from './gifts.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss']
})
export class GiftsComponent implements OnInit {
private gifts = [];
  constructor(
    protected gifs: GiftsService
  ) { }

  ngOnInit(): void {
    //animated loader
    this.gifts.listGifts().subscribe(() => {
      
    })
  }

}
