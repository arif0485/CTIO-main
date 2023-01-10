import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-never-owned',
  templateUrl: './never-owned.component.html',
  styleUrls: ['./never-owned.component.scss']
})
export class NeverOwnedComponent implements OnInit {
  @Output() btnAction = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
