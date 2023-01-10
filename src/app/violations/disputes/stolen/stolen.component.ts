import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stolen',
  templateUrl: './stolen.component.html',
  styleUrls: ['./stolen.component.scss']
})
export class StolenComponent implements OnInit {
  @Output() btnAction = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  
}
