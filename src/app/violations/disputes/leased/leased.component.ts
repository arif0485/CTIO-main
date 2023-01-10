import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-leased',
  templateUrl: './leased.component.html',
  styleUrls: ['./leased.component.scss']
})
export class LeasedComponent implements OnInit {
  @Output() btnAction = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
