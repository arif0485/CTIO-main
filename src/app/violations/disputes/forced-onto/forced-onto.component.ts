import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forced-onto',
  templateUrl: './forced-onto.component.html',
  styleUrls: ['./forced-onto.component.scss']
})
export class ForcedOntoComponent implements OnInit {
  @Output() btnAction = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
