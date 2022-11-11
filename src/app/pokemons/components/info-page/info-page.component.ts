import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'poke-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css'],
})
export class InfoPageComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}
  backHandler() {
    this.location.back()
  }
}
