import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-no-longer-own',
  templateUrl: './no-longer-own.component.html',
  styleUrls: ['./no-longer-own.component.scss']
})
export class NoLongerOwnComponent implements OnInit {
  @Output() btnAction = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
